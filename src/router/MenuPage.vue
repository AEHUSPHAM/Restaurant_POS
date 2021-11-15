<template>
    <Cart v-bind:active = 'cart_active'/>
    <button @click="cart_active = !cart_active">Cart</button>
    <div :class="{ 'menu-reduce': cart_active }">
        <nav class="navbar-wrapper navbar navbar-light bg-white">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <button type="button" class="home-button"><i class="fa fa-home home-icon"></i></button>
                    <span class="home-text">Back to home</span>
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
</template>


<script>
import FilterMenu from '@/components/FilterMenu.vue'
import Menu from '@/components/Menu.vue'
import Cart from '@/components/Cart.vue'
import menu_store from '@/stores/menu_store.js'


export default {
    name: 'MenuPage',
    components: {
        FilterMenu,
        Menu,
        Cart
    },
    data() {
        return {
            active_tag: "All dishes",
            display_list: menu_store.getters.getMenu().value,
            menu_items: menu_store.getters.getMenu().value,
            tag_list: menu_store.getters.getTags().value,
            cart_active: false,
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
        }
    }
}
</script>


<style scoped>
.navbar-wrapper span {
    font-weight: bold;
    color: #2c3a57;
}
.home-button {
    height: 100%;
    width: auto;
    margin-right: 15%;
    color: #ffffff;
    font-size: 150%;
    background: #2c3a57;
    border: none;
    border-radius:.70rem!important;
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
}
.body-wrapper {
    padding-left: 5%;
    padding-right: 5%;
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
.menu-reduce {
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
