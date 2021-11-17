<template>
    <div class="menu-wrapper container">
        <div class="row">
            <MenuItem
                v-for= "(item,index) in items"
                v-bind:key = "index"
                v-bind:item_index = "index + 1"
                v-bind:item = "item"
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