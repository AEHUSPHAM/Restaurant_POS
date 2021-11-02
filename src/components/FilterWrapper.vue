<template>
    <div class = "wrapper" >
 
    <FilterItem
        v-for= "(item,index) in filter_items"
        v-bind:key = "index"
        v-bind:img_src= "item.img_src"
        v-bind:alt = "item.img_alt"
        v-bind:p = "item.p"
        :callback = "callback"
    />
    </div>
    <button @click = 'showAll'> Show all </button>
</template>

<script>
import FilterItem from './FilterItem.vue'
import images from '@/assets/images/'

export default {
    name: 'FilterWrapper',
    components: {
        FilterItem,
    },
    data() {
        return {
            filter_items: [
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
    props: {
        callback: Function
    },
    methods: {
        showAll: function () {
            this.callback('', true);
        }
    }
}
</script>




<style scoped>
.wrapper {
    width: 67%;
	height: 160px;
    margin: 10px;
    margin-top: -40px;
	padding: 10px;
    outline: 1px solid #808080;
    float: left;
    display: flex;
    overflow-x: auto;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
::-webkit-scrollbar-thumb {
  background: #888; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>