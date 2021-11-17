<template>
    <div class="filter-menu-big-wrapper container">
        <div class="row">
            <div class="navigate-button-wrapper col-md-1 col-sm-1 col-1 p-auto">
                <button
                    class="navigate-button"
                    v-bind:disabled="!is_left_scrollable"
                    @click="scrollLeft"
                >
                    <i class="fa fa-caret-left"></i>
                </button>
            </div>
            <div class="col-md-10 col-sm-10 col-10 p-auto">
                <div class="filter-menu-wrapper container">
                    <div id="scrollable-filter-menu" class="filter-menu row">
                        <FilterItem
                            v-for = "(item,index) in items"
                            v-bind:key="index"
                            v-bind:item_index="index"
                            v-bind:item="item"
                            v-bind:is_active="states[index]"
                            @updateActiveItem="updateActiveItem($event)"   
                        />
                    </div>
                </div>
            </div>
            <div class="navigate-button-wrapper col-md-1 col-sm-1 col-1 p-auto">
                <button
                    class="navigate-button"
                    v-bind:disabled="!is_right_scrollable"
                    @click="scrollRight"
                >
                    <i class="fa fa-caret-right"></i>
                </button>
            </div>
        </div>
    </div>
</template>



<script>
import FilterItem from '@/components/FilterItem.vue'

export default({
    name: 'FilterMenu',
    components: {
        FilterItem
    },
    data() {
        return {
            active_index: 0,
            current_view: 0,
            is_left_scrollable: false,
            is_right_scrollable: false,
            states: Array(this.items.length).fill(false)
        }
    },
    props: {
        items: {
            type: Array
        }
    },
    methods: {
        updateActiveItem: function(index){
            //takes in the index of the new active item and
            //toggle the state of previously active item
            this.states[this.active_index] = false;
            this.states[index] = true;
            this.active_index = index;

            //update the displayed menu
            this.$emit('updateMenuByCate', this.items[index].tag)
        },
        scrollLeft: function(){
            let wrapper = document.querySelector(".filter-item-wrapper")
            let style = getComputedStyle(wrapper)
            let scroll_width = parseFloat(style.marginLeft) + wrapper.offsetWidth

            this.current_view -= 1
            var scroll_bar = document.getElementById("scrollable-filter-menu")
            scroll_bar.scrollLeft = scroll_width * this.current_view

            
            //check if we can still scroll left and right
            var max_offset = 0.5*scroll_width
            this.is_left_scrollable = (scroll_bar.scrollLeft >= max_offset)
            this.is_right_scrollable = ((scroll_bar.scrollWidth-scroll_bar.clientWidth-scroll_bar.scrollLeft) >=max_offset)
        },
        scrollRight: function(){
            let wrapper = document.querySelector(".filter-item-wrapper")
            let style = getComputedStyle(wrapper)
            let scroll_width = parseFloat(style.marginLeft) + wrapper.offsetWidth

            this.current_view += 1
            var scroll_bar = document.getElementById("scrollable-filter-menu")
            scroll_bar.scrollLeft = scroll_width * this.current_view
            
            //check if we can still scroll left and right
            var max_offset = 0.5*scroll_width
            this.is_left_scrollable = (scroll_bar.scrollLeft >= max_offset)
            this.is_right_scrollable = ((scroll_bar.scrollWidth-scroll_bar.clientWidth-scroll_bar.scrollLeft) >= max_offset)
        },
        adjustScroll: function(){
            let wrapper = document.querySelector(".filter-item-wrapper")
            let style = getComputedStyle(wrapper)
            let scroll_width = parseFloat(style.marginLeft) + wrapper.offsetWidth

            var scroll_bar = document.getElementById("scrollable-filter-menu")
            scroll_bar.scrollLeft = scroll_width * this.current_view

            //check if we can still scroll left and right
            var max_offset = 0.5*scroll_width
            this.is_left_scrollable = (scroll_bar.scrollLeft >= max_offset)
            this.is_right_scrollable = ((scroll_bar.scrollWidth-scroll_bar.clientWidth-scroll_bar.scrollLeft) >= max_offset)
        }
    },
    mounted () {
        this.states[0] = true;
        this.adjustScroll();
        window.addEventListener('resize', this.adjustScroll)
    },
    unmounted () {
        window.removeEventListener('resize', this.adjustScroll)
    }
})
</script>



<style scoped>
.filter-menu-big-wrapper {
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    margin-bottom: 3%;
}
.filter-menu-wrapper {
    padding-left: 0;
    padding-right: 0;
}
.filter-menu {
    flex-wrap: nowrap;
    overflow: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
}
.filter-menu .filter-menu-item-wrapper{
     display: inline-block;
}
.filter-menu::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
}
.navigate-button-wrapper {
    margin-top: auto;
    margin-bottom: auto;
    height: 100%;
}
.navigate-button {
    border: none;
    background: none;
    color: #2c3a57;

    /*scale the height of button*/
    -ms-transform: scale(2.0, 5.0); /* IE 9 */
    -webkit-transform: scale(2.0, 5.0); /* Safari */
    transform: scale(2.0, 5.0);
}
button:disabled {
    color: #9dadce;
}
</style>
