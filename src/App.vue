<template>
    <nav class="navbar-wrapper navbar navbar-light bg-white">
        <div class="container">
            <a class="navbar-brand" href="#">
                <button type="button" class="home-button"><i class="fa fa-home home_icon"></i></button>
                <span class="home_text">Back to home</span>
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
</template>


<script>
import FilterMenu from '@/components/FilterMenu.vue'
import Menu from '@/components/Menu.vue'
import blueberry_ice_cream_img from '@/assets/menu/blueberry_ice_cream.jpg'
import chocolate_ice_cream_img from '@/assets/menu/chocolate_ice_cream.jpg'
import chocolate_milk_img from '@/assets/menu/chocolate_milk.jpg'
import strawberry_milk_img from '@/assets/menu/strawberry_milk.jpg'
import pasta_img from '@/assets/menu/pasta.jpg'
import ramen_img from '@/assets/menu/ramen.jpg'
import fried_rice_img from '@/assets/menu/fried_rice.jpg'
import sushi_img from '@/assets/menu/sushi.jpg'
import french_fries_img from '@/assets/menu/french_fries.jpg'
import hamburger_img from '@/assets/menu/hamburger.jpg'

import all_img from '@/assets/filter/all.png'
import fast_food_img from '@/assets/filter/fast_food.png'
import rice_img from '@/assets/filter/rice.png'
import ice_cream_img from '@/assets/filter/ice_cream.png'
import milk_img from '@/assets/filter/milk.png'
import noodle_img from '@/assets/filter/noodle.png'
import soup_img from '@/assets/filter/soup.png'
import tea_img from '@/assets/filter/tea.png'


export default {
    name: 'App',
    components: {
        FilterMenu,
        Menu
    },
    data() {
        return {
            active_tag: "All dishes",
            display_list: [
                {img_src: blueberry_ice_cream_img, img_alt: "Blueberry Ice Cream", item_name: "Blueberry Ice Cream", item_price: "Vnd 4000.0", tag: "Ice Cream"},
                {img_src: chocolate_ice_cream_img, img_alt: "Chocolate Ice Cream", item_name: "Chocolate Ice Cream", item_price: "Vnd 4000.0", tag: "Ice Cream"},
                {img_src: chocolate_milk_img, img_alt: "Chocolate Milk", item_name: "Chocolate Milk", item_price: "Vnd 4000.0", tag: "Milk"},
                {img_src: strawberry_milk_img, img_alt: "Strawberry Milk", item_name: "Strawberry Milk", item_price: "Vnd 4000.0", tag: "Milk"},
                {img_src: pasta_img, img_alt: "Pasta", item_name: "Pasta", item_price: "Vnd 4000.0", tag: "Noodles"},
                {img_src: ramen_img, img_alt: "Ramen", item_name: "Ramen", item_price: "Vnd 4000.0", tag: "Noodles"},
                {img_src: fried_rice_img, img_alt: "Fried Rice", item_name: "Fried Rice", item_price: "Vnd 4000.0", tag: "Rice"},
                {img_src: sushi_img, img_alt: "Sushi", item_name: "Sushi", item_price: "Vnd 4000.0", tag: "Rice"},
                {img_src: french_fries_img, img_alt: "French Fries", item_name: "French Fries", item_price: "Vnd 4000.0", tag: "Fast Food"},
                {img_src: hamburger_img, img_alt: "Hamburger", item_name: "Hamburger", item_price: "Vnd 4000.0", tag: "Fast Food"},
            ],
            menu_items: [
                {img_src: blueberry_ice_cream_img, img_alt: "Blueberry Ice Cream", item_name: "Blueberry Ice Cream", item_price: "Vnd 4000.0", tag: "Ice Cream"},
                {img_src: chocolate_ice_cream_img, img_alt: "Chocolate Ice Cream", item_name: "Chocolate Ice Cream", item_price: "Vnd 4000.0", tag: "Ice Cream"},
                {img_src: chocolate_milk_img, img_alt: "Chocolate Milk", item_name: "Chocolate Milk", item_price: "Vnd 4000.0", tag: "Milk"},
                {img_src: strawberry_milk_img, img_alt: "Strawberry Milk", item_name: "Strawberry Milk", item_price: "Vnd 4000.0", tag: "Milk"},
                {img_src: pasta_img, img_alt: "Pasta", item_name: "Pasta", item_price: "Vnd 4000.0", tag: "Noodles"},
                {img_src: ramen_img, img_alt: "Ramen", item_name: "Ramen", item_price: "Vnd 4000.0", tag: "Noodles"},
                {img_src: fried_rice_img, img_alt: "Fried Rice", item_name: "Fried Rice", item_price: "Vnd 4000.0", tag: "Rice"},
                {img_src: sushi_img, img_alt: "Sushi", item_name: "Sushi", item_price: "Vnd 4000.0", tag: "Rice"},
                {img_src: french_fries_img, img_alt: "French Fries", item_name: "French Fries", item_price: "Vnd 4000.0", tag: "Fast Food"},
                {img_src: hamburger_img, img_alt: "Hamburger", item_name: "Hamburger", item_price: "Vnd 4000.0", tag: "Fast Food"},
            ],
            tag_list: [
                {img_src: all_img, img_alt: "all", tag: "All Dishes"},
                {img_src: fast_food_img, img_alt: "fastfood", tag: "Fast Food"},
                {img_src: rice_img, img_alt: "Rice", tag: "Rice"},
                {img_src: noodle_img, img_alt: "noodles", tag: "Noodles"},
                {img_src: soup_img, img_alt: "soup", tag: "Soup"},
                {img_src: ice_cream_img, img_alt: "ice_cream", tag: "Ice Cream"},
                {img_src: milk_img, img_alt: "milk", tag: "Milk"},
                {img_src: tea_img, img_alt: "tea", tag: "Tea"}
            ],
        }
    },
    methods: {
        updateMenuByCate: function(tag){
            if (tag == "All Dishes"){
                this.display_list = this.menu_items
            }else{
                this.display_list = Array()

                for (let i=0; i<this.menu_items.length; i++){
                    let item = this.menu_items[i]
                    if (item.tag == tag){
                        this.display_list.push(item)
                    }
                }
            }

            this.active_tag = tag
        }
    }
}
</script>


<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3a57;
}
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

@media only screen and (max-width: 420px){
    .home_text {
        font-size: 15px;
        position: relative;
        bottom: 1px;
    }
    .home-button {
        height: 29px;
        width: 29px;
        border-radius:.58rem!important;
    }
    .home_icon {
        font-size: 21px;
    }
    .title {
        font-size: 17px;
        position:relative;
        top:5px;
    }

}

@media only screen and (min-width: 421px) and (max-width: 575px){
    .home_text {
        font-size: 17px;
        position: relative;
        top: 1px;
    }
    .home-button {
        height: 32px;
        width: 32px;
        border-radius:.64rem!important;
    }
    .home_icon {
        font-size: 23px;
    }
    .title {
        font-size: 19px;
        position:relative;
        top:5px;
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px){
    .home_text {
        font-size: 15px;
        position: relative;
        bottom: 1px;
    }
    .home-button {
        height: 29px;
        width: 29px;
        border-radius:.58rem!important;
    }
    .home_icon {
        font-size: 21px;
    }
    .title {
        font-size: 19px;
        position:relative;
        top:5px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px){
    .home_text {
        font-size: 15px;
        position: relative;
        bottom: 1px;
    }
    .home-button {
        height: 29px;
        width: 29px;
        border-radius:.58rem!important;
    }
    .home_icon {
        font-size: 21px;
    }
    .title {
        font-size: 19px;
        position:relative;
        top:5px;
    }
}

@media only screen and (min-width: 992px) and (max-width: 1199px){
    .home_text {
        font-size: 17px;
        position: relative;
        top: 1px;
    }
    .home-button {
        height: 32px;
        width: 32px;
        border-radius:.64rem!important;
    }
    .home_icon {
        font-size: 23px;
    }
    .title {
        font-size: 23px;
        position:relative;
        top:2px;
    }
}

@media only screen and (min-width: 1200px){
    .home_text {
        font-size: 19px;
        position: relative;
        top: 4px;
    }
    .home-button {
        height: 35px;
        width: 35px;
        border-radius:.70rem!important;
    }
    .home_icon {
        font-size: 25px;
    }
    .title {
        font-size: 25px;
    }
}
</style>
