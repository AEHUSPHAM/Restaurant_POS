<template>
    <div id='home'>
        <FilterWrapper v-bind:callback = 'foodFiltering'/>
        <Menu v-bind:items = 'display_list'/>
    </div>
</template>

<script>
import FilterWrapper from '@/components/FilterWrapper.vue'
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


export default {
    name: 'App',
    components: {
        FilterWrapper,
        Menu
    },
    data() {
        return {
            menu_items: [
                {img_src: blueberry_ice_cream_img, img_alt: "Blueberry Ice Cream", item_name: "Blueberry Ice Cream", item_price: "Vnd 4000.0", item_tag: "Ice Cream"},
                {img_src: chocolate_ice_cream_img, img_alt: "Chocolate Ice Cream", item_name: "Chocolate Ice Cream", item_price: "Vnd 4000.0", item_tag: "Ice Cream"},
                {img_src: chocolate_milk_img, img_alt: "Chocolate Milk", item_name: "Chocolate Milk", item_price: "Vnd 4000.0", item_tag: "Milk"},
                {img_src: strawberry_milk_img, img_alt: "Strawberry Milk", item_name: "Strawberry Milk", item_price: "Vnd 4000.0", item_tag: "Milk"},
                {img_src: pasta_img, img_alt: "Pasta", item_name: "Pasta", item_price: "Vnd 4000.0", item_tag: "Noodles"},
                {img_src: ramen_img, img_alt: "Ramen", item_name: "Ramen", item_price: "Vnd 4000.0", item_tag: "Noodles"},
                {img_src: fried_rice_img, img_alt: "Fried Rice", item_name: "Fried Rice", item_price: "Vnd 4000.0", item_tag: "Rice"},
                {img_src: sushi_img, img_alt: "Sushi", item_name: "Sushi", item_price: "Vnd 4000.0", item_tag: "Rice"},
                {img_src: french_fries_img, img_alt: "French Fries", item_name: "French Fries", item_price: "Vnd 4000.0", item_tag: "Fast Food"},
                {img_src: hamburger_img, img_alt: "Hamburger", item_name: "Hamburger", item_price: "Vnd 4000.0", item_tag: "Fast Food"},
            ],
            display_list: [
                {img_src: blueberry_ice_cream_img, img_alt: "Blueberry Ice Cream", item_name: "Blueberry Ice Cream", item_price: "Vnd 4000.0", item_tag: "Ice Cream"},
                {img_src: chocolate_ice_cream_img, img_alt: "Chocolate Ice Cream", item_name: "Chocolate Ice Cream", item_price: "Vnd 4000.0", item_tag: "Ice Cream"},
                {img_src: chocolate_milk_img, img_alt: "Chocolate Milk", item_name: "Chocolate Milk", item_price: "Vnd 4000.0", item_tag: "Milk"},
                {img_src: strawberry_milk_img, img_alt: "Strawberry Milk", item_name: "Strawberry Milk", item_price: "Vnd 4000.0", item_tag: "Milk"},
                {img_src: pasta_img, img_alt: "Pasta", item_name: "Pasta", item_price: "Vnd 4000.0", item_tag: "Noodles"},
                {img_src: ramen_img, img_alt: "Ramen", item_name: "Ramen", item_price: "Vnd 4000.0", item_tag: "Noodles"},
                {img_src: fried_rice_img, img_alt: "Fried Rice", item_name: "Fried Rice", item_price: "Vnd 4000.0", item_tag: "Rice"},
                {img_src: sushi_img, img_alt: "Sushi", item_name: "Sushi", item_price: "Vnd 4000.0", item_tag: "Rice"},
                {img_src: french_fries_img, img_alt: "French Fries", item_name: "French Fries", item_price: "Vnd 4000.0", item_tag: "Fast Food"},
                {img_src: hamburger_img, img_alt: "Hamburger", item_name: "Hamburger", item_price: "Vnd 4000.0", item_tag: "Fast Food"},
            ],
        }
    },
    methods: {
        foodFiltering: function(tag, filter = false) {
            this.display_list = this.menu_items.filter((item) => {
                return (item.item_tag === tag || filter);
            })
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
  color: #2c3e50;
  background: #f8f8f8;
}
</style>
