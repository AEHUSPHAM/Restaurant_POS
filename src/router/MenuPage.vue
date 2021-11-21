<template>
    <Cart v-bind:active = 'cart_active'/>
    <div :class="{
        'menu-reduce-right': cart_active && (window.width > 767),
        'menu-reduce-bottom': cart_active && (window.width <= 767)
        }"
    >
        <nav class="navbar-wrapper navbar navbar-light bg-white fixed-top" 
            :class="{
                'navbar-reduce-right': cart_active && (window.width > 767)
                }"
            >
            <div class="container">
                <router-link class="navbar-brand" to="/home">
                    <div class="home-button-wrapper">
                        <button 
                            type="button" 
                            class="home-button"
                            style="color:#ffffff;background-color:#2c3a57;"    
                        >
                            <i class="fa fa-home home-icon"></i>
                        </button>
                    </div>
                    <div class="home-text-wrapper" style="margin-left:15%;">
                        <span class="home-text">Home</span>
                    </div>
                </router-link>
                <a 
                    class="navbar-brand" 
                    @click="toggleCart"
                    style="margin-left:auto;"
                    v-if="(!cart_active) || (window.width <= 767)"
                >
                    <div class="home-text-wrapper" style="margin-right:15%;">
                        <span class="home-text" style="color:#ff0909;">Your Cart</span>
                    </div>
                    <div class="home-button-wrapper">
                        <button 
                            type="button"
                            class="home-button"
                            style="color:#ffffff;background-color:#ff0909;border-color:#ff0909"
                        > 
                            <i class="fa fa-shopping-cart"></i>
                        </button>
                    </div>
                </a>
            </div>
        </nav>


        <div class="body-wrapper container">
            <div class="row">
                <FilterMenu
                    v-bind:items = 'tag_list'
                    @updateMenuByCate="updateMenuByCate($event)"
                />
            </div>
            <div class="title-wrapper row">
                <div class="col-md-12 col-sm-12 col-12">
                    <h4 class="title">{{active_tag}}&nbsp;&nbsp;</h4><hr>
                </div>
            </div>
            <div class="row">
                <Menu v-bind:items = 'display_list'/>
            </div>
        </div>
    </div>
    <DetailModal/>
    <LoadingModal/>
    <ConfirmModal/>
</template>


<script>
import FilterMenu from '@/components/menu/FilterMenu.vue'
import Menu from '@/components/menu/Menu.vue'
import Cart from '@/components/menu/Cart.vue'
import DetailModal from '@/components/menu/DetailModal.vue'
import ConfirmModal from '@/components/menu/ConfirmModal.vue'
import LoadingModal from '@/components/LoadingModal.vue'
import { fetchMenu, fetchTags } from '@/mixins/menu.js'
import menu_store from '@/stores/menu_store.js'


export default {
    name: 'MenuPage',
    components: {
        FilterMenu,
        Menu,
        Cart,
        DetailModal,
        LoadingModal,
        ConfirmModal,
    },
    data() {
        return {
            active_tag: "All dishes",
            display_list: menu_store.getters.getMenu().value,
            menu_items: menu_store.getters.getMenu().value,
            tag_list: menu_store.getters.getTags().value,
            window: {
                width: 0,
                height: 0,
            }
        }
    },
    methods: {
        updateMenuByCate: function(tag){
            if (tag == "All Dishes"){
                this.display_list = this.menu_items
            }else{
                this.display_list = Array()

                for (const item of this.menu_items){
                    if (item.item_tag == tag){
                        this.display_list.push(item)
                    }
                }
            }
            this.active_tag = tag
        },
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        toggleCart() {
            menu_store.commit("toggleCart")
        }
    },
    computed: {
        cart_active: () => {
            return menu_store.state.cart_active
        },
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    unmounted () {
        window.removeEventListener('resize', this.handleResize);
    },
    beforeRouteEnter(to, from, next) {
        //make sure that the data is fetched before this page is created
        if (menu_store.state.menu_items === null || menu_store.state.taglist === null){
            Promise.allSettled([fetchMenu(), fetchTags()]).then((values) => {
                menu_store.commit('setMenu', values[0])
                menu_store.commit('setTags', values[1])
                next()
            })
        }else{
            next()
        }
    } 
}
</script>


<style scoped>
.body-wrapper {
    padding-top: 70px;
}
.navbar-wrapper span {
    font-weight: bold;
    color: #2c3a57;
}
.home-button-wrapper, .home-text-wrapper {
    display: inline-block;
}
.home-button {
    display: flex;
    align-items: center;
    justify-content: center;
}
.title-wrapper {
    margin-left: 1%;
    margin-bottom: 3%;
}
.title-wrapper hr {
    height: 1px;
    background: #2c3a57;
    border: none
}
.title {
    float: left;
    font-weight: bold;
    font-size: 25px;
}
.menu-reduce-right {
    margin-right: 30%;
}
.menu-reduce-bottom {
    margin-bottom: 280px;
}
.navbar-reduce-right {
    padding-right: 30px;
    padding-left: 30px;
    margin-right: 30%;
}
@media only screen and (max-width: 420px){
    .home-text {
        font-size: 15px;
        position: relative;
        bottom: 1px;
    }
    .home-button {
        height: 29px;
        width: 29px;
        border-radius:.58rem!important;
    }
    .home-icon {
        font-size: 21px;
    }
    .title {
        font-size: 17px;
        position:relative;
        top:5px;
    }
    
}
@media only screen and (min-width: 421px) and (max-width: 575px){
    .home-text {
        font-size: 17px;
        position: relative;
        top: 1px;
    }
    .home-button {
        height: 32px;
        width: 32px;
        border-radius:.64rem!important;
    }
    .home-icon {
        font-size: 23px;
    }
    .title {
        font-size: 19px;
        position:relative;
        top:5px;
    }
}
@media only screen and (min-width: 576px) and (max-width: 767px){
    .home-text {
        font-size: 15px;
        position: relative;
        bottom: 1px;
    }
    .home-button {
        height: 29px;
        width: 29px;
        border-radius:.58rem!important;
    }
    .home-icon {
        font-size: 21px;
    }
    .title {
        font-size: 19px;
        position:relative;
        top:5px;
    }
}
@media only screen and (min-width: 768px) and (max-width: 991px){
    .home-text {
        font-size: 15px;
        position: relative;
        bottom: 1px;
    }
    .home-button {
        height: 29px;
        width: 29px;
        border-radius:.58rem!important;
    }
    .home-icon {
        font-size: 21px;
    }
    .title {
        font-size: 19px;
        position:relative;
        top:5px;
    }
}
@media only screen and (min-width: 992px) and (max-width: 1199px){
    .home-text {
        font-size: 17px;
        position: relative;
        top: 1px;
    }
    .home-button {
        height: 32px;
        width: 32px;
        border-radius:.64rem!important;
    }
    .home-icon {
        font-size: 23px;
    }
    .title {
        font-size: 23px;
        position:relative;
        top:2px;
    }
}
@media only screen and (min-width: 1200px){
    .home-text {
        font-size: 19px;
        position: relative;
        top: 4px;
    }
    .home-button {
        height: 35px;
        width: 35px;
        border-radius:.70rem!important;
    }
    .home-icon {
        font-size: 25px;
    }
    .title {
        font-size: 25px;
    }
}
</style>
