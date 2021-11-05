<template>
    <div class="menu-wrapper container">
        <div class="row">
            <MenuItem
                v-for= "(item,index) in items"
                v-bind:key = "index"
                v-bind:img_src= "item.img_src"
                v-bind:img_alt = "item.img_alt"
                v-bind:item_index = "index + 1"
                v-bind:item_name = "item.item_name"
                v-bind:item_price = "item.item_price"
                v-bind:item_tag = "item.item_tag"
            />
        </div>
    </div>
</template>


<script>
import MenuItem from '@/components/MenuItem.vue'
export default ({
    name: 'Menu',
    components: {
        MenuItem,
    },
    props: {
        items: Array,
        default: []
    }
})
</script>


<style scoped>
    menu-wrapper {
        margin-left: auto;
        margin-right: auto;
    }
</style>