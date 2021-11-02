<template>
    <div class = "wrapper" >
 
    <FilterItem
        v-for= "(item,index) in items"
        v-bind:key = "index"
        v-bind:img_src= "item.img_src"
        v-bind:alt = "item.img_alt"
        v-bind:p = "item.p"
    />
    </div>
</template>

<script>
import FilterItem from './FilterItem.vue'

export default {
    name: 'Menu',
    components: {
        FilterItem,
    },
    props: {
        items: Object
    }
}
</script>

<style scoped>
.wrapper {
    width: 70%;
	height: 140px;
    margin: 10px;
	padding: 10px;
    outline: 1px solid #808080;
    float: left;
    display: flex;
    overflow-x: auto;
}
</style>