<template>
    <div class="filter-item-wrapper col-sm-3 col-6 p-auto"
        v-bind:class="cart_active?'col-lg-3 col-md-3':'col-lg-2 col-md-2'"
    >        
        <div
            v-bind:class="is_active ? 'filter-item-active': 'filter-item'"
            class="container rounded"
            @click = "onClick"
        >
            <div class="filter-item-image-wrapper row ratio ratio-4x3 mb-1 mt-2">
                <div class=" col-md-12 col-sm-12 col-12">
                    <img v-bind:src="item.img_src" v-bind:alt="item.img_alt" class="filter-item-image img-fluid">
                </div>
            </div>

            <div class="filter-item-name row">
                <div class=" col-md-12 col-sm-12 col-12">
                    {{item.tag}}
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import menu_store from '@/stores/menu_store.js'

export default({
    name: 'FilterItem',
    props: {
        item_index: {
            type: Number,
        },
        item: {
            type: Object,
        },
        is_active: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        onClick: function(){
            this.$emit('updateActiveItem', this.item_index);
        }
    },
    computed: {
        cart_active: () => {
            return menu_store.state.cart_active
        } 
    },
})
</script>



<style scoped>
    .filter-item {
        background: #ffffff;
        border: 1px solid #dbd2d2;
        max-width: 80%;
    }
    .filter-item-name {
        font-weight: bold;
        font-size: 80%;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .filter-item-active {
        background: #2c3a57;
        border: 2px solid #f8f8f8;
        max-width: 80%;
    }
    .filter-item .filter-item-name {
        color: #000000;
    }
    .filter-item-active .filter-item-name {
        color: #ffffff
    }
    .filter-item, .filter-item-active {
        padding: 5% 0 5% 0;
    }
    .filter-item-image-wrapper {
        margin: auto;
        width: 70%;
    }
    .filter-item-image {
        height: 95%;
        width: 100%;
    }
    .rounded {
        border-radius:.80rem!important;
    }
    @media only screen and (max-width: 420px){
        .filter-item-name {
            font-size: 65%;
        }
    }
    @media only screen and (min-width: 421px) and (max-width: 575px){
        .filter-item-name {
            font-size: 80%;
        }
    }
    @media only screen and (min-width: 576px) and (max-width: 767px){
        .filter-item-image-wrapper {
            width: 85%;
            height: 80%;
        }
        .filter-item-name {
            font-size: 55%;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 991px){
        .filter-item-image-wrapper {
            width: 85%;
            height: 80%;
        }
        .filter-item-name {
            font-size: 55%;
        }
    }
    @media only screen and (min-width: 992px) and (max-width: 1199px){
        .filter-item-name {
            font-size: 65%;
        }
    }
    @media only screen and (min-width: 1200px){
        .filter-item-name {
            font-size: 80%;
        }
    }
</style>
