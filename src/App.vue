<template>
    <FilterWrapper :callback = 'foodFiltering'/>
    <Menu :items = 'display_list'/>
</template>

<script>
import FilterWrapper from './components/FilterWrapper.vue'
import Menu from './components/Menu.vue'
import images from '@/assets/images/'

export default {
    name: 'App',
    components: {
        FilterWrapper,
        Menu
    },
    data() {
        console.log(images.pancake_img)
        return {
            menu_items: [
                { img_src: images.pancake_img, img_alt: "pancake", p: "Pancake" },
                { img_src: images.cheeseburger_img, img_alt: "cheeseburger", p: "Cheeseburger" },
                { img_src: images.crispy_pork_img, img_alt: "crispy_pork", p: "Crispy Pork" },
                { img_src: images.french_fries_img, img_alt: "french_fries", p: "French Fries" },
                { img_src: images.fried_rice_img, img_alt: "fried_rice", p: "Fried Rice" },
                { img_src: images.ice_cream_img, img_alt: "ice_cream", p: "Ice Cream" },
                { img_src: images.milk_img, img_alt: "milk", p: "Milk" },
                { img_src: images.noodles_img, img_alt: "noodles", p: "Noodles" },
                { img_src: images.pizza_img, img_alt: "pizza", p: "Pizza" },
                { img_src: images.tuna_sandwich_img, img_alt: "tuna_sandwich", p: "Tuna Sandwich" },
            ],
            display_list: [
                { img_src: images.pancake_img, img_alt: "pancake", p: "Pancake" },
                { img_src: images.cheeseburger_img, img_alt: "cheeseburger", p: "Cheeseburger" },
                { img_src: images.crispy_pork_img, img_alt: "crispy_pork", p: "Crispy Pork" },
                { img_src: images.french_fries_img, img_alt: "french_fries", p: "French Fries" },
                { img_src: images.fried_rice_img, img_alt: "fried_rice", p: "Fried Rice" },
                { img_src: images.ice_cream_img, img_alt: "ice_cream", p: "Ice Cream" },
                { img_src: images.milk_img, img_alt: "milk", p: "Milk" },
                { img_src: images.noodles_img, img_alt: "noodles", p: "Noodles" },
                { img_src: images.pizza_img, img_alt: "pizza", p: "Pizza" },
                { img_src: images.tuna_sandwich_img, img_alt: "tuna_sandwich", p: "Tuna Sandwich" },
            ],
        }
    },
    methods: {
        foodFiltering: function(tag, filter = false) {
            this.display_list = this.menu_items.filter((item) => {
                return (item.p === tag || filter);
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
    margin-top: 60px;
}
</style>
