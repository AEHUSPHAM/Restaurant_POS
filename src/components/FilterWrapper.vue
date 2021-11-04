<template>
    <div class="row">
        <div class="wrapper w-50">
            <FilterItem
                v-for= "(item,index) in filter_items"
                v-bind:key = "index"
                v-bind:id = "item.id"
                v-bind:img_src= "item.img_src"
                v-bind:alt = "item.img_alt"
                v-bind:tag = "item.tag"
                v-bind:isActive = "item.isActive"
                v-bind:callback = "callback"
                v-bind:changeColor = "changeColor"
            />
        </div>
        <div class="wrapper_2 w-25" @click = 'showAll'>
            <FilterItem class="item_container_red" v-bind:img_src= "clear_btn.img_src" v-bind:tag = "clear_btn.text"/>
        </div>
    </div>
</template>

<script>
import FilterItem from './FilterItem.vue'

export default {
    name: 'FilterWrapper',
    components: {
        FilterItem,
    },
    data() {
        return {
            filter_items: [
                { id: 0 ,img_src: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png", img_alt: "fastfood", tag: "Fast Food", isActive: false },
                { id: 1, img_src: "https://cdn-icons-png.flaticon.com/512/3067/3067788.png", img_alt: "Rice", tag: "Rice", isActive: false },
                { id: 2, img_src: "https://cdn-icons-png.flaticon.com/512/938/938063.png", img_alt: "ice_cream", tag: "Ice Cream", isActive: false },
                { id: 3, img_src: "https://cdn-icons-png.flaticon.com/512/3500/3500270.png", img_alt: "milk", tag: "Milk", isActive: false },
                { id: 4, img_src: "https://cdn-icons-png.flaticon.com/512/1623/1623675.png", img_alt: "noodles", tag: "Noodles", isActive: false },
            ],
            clear_btn: {img_src:"https://cdn-icons-png.flaticon.com/512/126/126497.png", text: "Clear Filter"},
            prev_active: -1,
        }
    },
    props: {
        callback: Function
    },
    methods: {
        showAll: function () {
            this.callback('', true);
            this.filter_items[this.prev_active].isActive = false;
            this.prev_active = -1;
        },
        changeColor: function(idx) {
            if (this.prev_active >= 0) {
                this.filter_items[this.prev_active].isActive = false
            }
            this.filter_items[idx].isActive = true 
            this.prev_active = idx;
            this.filter_items.forEach((element,index) => {
                console.log(index, element.isActive)
            });
        }
    }
}
</script>




<style scoped>
.row {
    margin: 10px;
}

.wrapper {
    max-height: 160px;
    margin: 10px;
	padding: 10px;
    /* outline: 1px solid #808080; */
    outline: none;
    float: left;
    display: flex;
    overflow-x: auto;
}

.wrapper_2 {
    max-height: 160px;
    margin: 10px;
	padding: 10px;
    /* outline: 1px solid #808080; */
    outline: none;
    display: flex;
    float: left;
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