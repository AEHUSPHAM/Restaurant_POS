<template>
    <div id='home'>
        <FilterWrapper v-bind:callback = 'foodFiltering'/>
        <Menu v-bind:items = 'display_list'/>
    </div>
</template>

<script>
import FilterWrapper from '@/components/FilterWrapper.vue'
import Menu from '@/components/Menu.vue'

export default {
    name: 'App',
    components: {
        FilterWrapper,
        Menu
    },
    data() {
        return {
            menu_items: [
                {img_src: "https://p7.hiclipart.com/preview/179/257/277/pepe-the-frog-cartoon-internet-meme-clip-art-frog.jpg", img_alt: "Pepe", item_name: "Milk", item_price: "Vnd 6969.0", item_tag: "Milk"},
                {img_src: "https://s.tcdn.co/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/1.png", img_alt: "Pepe", item_name: "Fast Food", item_price: "Vnd 6969.0", item_tag: "Fast Food"},
                {img_src: "https://s.tcdn.co/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/1.png", img_alt: "Pepe", item_name: "Fast Food", item_price: "Vnd 6969.0", item_tag: "Fast Food"},
                {img_src: "https://s.tcdn.co/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/1.png", img_alt: "Pepe", item_name: "Fast Food", item_price: "Vnd 6969.0", item_tag: "Fast Food"},
                {img_src: "https://s.tcdn.co/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/1.png", img_alt: "Pepe", item_name: "Rice", item_price: "Vnd 6969.0", item_tag: "Rice"},
                {img_src: "https://s.tcdn.co/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/1.png", img_alt: "Pepe", item_name: "Rice", item_price: "Vnd 6969.0", item_tag: "Rice"}
            ],
            display_list: [
                {img_src: "https://p7.hiclipart.com/preview/179/257/277/pepe-the-frog-cartoon-internet-meme-clip-art-frog.jpg", img_alt: "Pepe", item_name: "Milk", item_price: "Vnd 6969.0", item_tag: "Milk"},
                {img_src: "https://s.tcdn.co/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/1.png", img_alt: "Pepe", item_name: "Fast Food", item_price: "Vnd 6969.0", item_tag: "Fast food"},
                {img_src: "https://s.tcdn.co/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/1.png", img_alt: "Pepe", item_name: "Fast Food", item_price: "Vnd 6969.0", item_tag: "Fast food"},
                {img_src: "https://s.tcdn.co/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/1.png", img_alt: "Pepe", item_name: "Fast Food", item_price: "Vnd 6969.0", item_tag: "Fast food"},
                {img_src: "https://s.tcdn.co/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/1.png", img_alt: "Pepe", item_name: "Rice", item_price: "Vnd 6969.0", item_tag: "Rice"},
                {img_src: "https://s.tcdn.co/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/1.png", img_alt: "Pepe", item_name: "Rice", item_price: "Vnd 6969.0", item_tag: "Rice"}
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
