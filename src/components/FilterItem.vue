<template>
    <div class="filter-item-wrapper col-md-2 col-sm-3 col-6 p-auto">        
        <div
            v-bind:class="is_active ? 'filter-item-active': 'filter-item'"
            class="container rounded"
            @click = "onClick"
        >
            <div class="filter-item-image-wrapper row ratio ratio-4x3 mb-1 mt-2">
                <div class=" col-md-12 col-sm-12 col-12">
                    <img v-bind:src = "img_src" v-bind:alt="img_alt" class="filter-item-image img-fluid">
                </div>
            </div>

            <div class="filter-item-name row">
                <div class=" col-md-12 col-sm-12 col-12">
                    {{tag}}
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default({
    name: 'FilterItem',
    props: {
        item_index: {
            type: Number
        },
        img_src : {
            type: String,
            default: ""
        },
        img_alt: {
            type: String,
            default: ""
        },
        tag: {
            type: String,
            default: ""
        },
        is_active: {
            type: Boolean,
            default: false
        },
        callback: {
            type: Function
        }
    },
    methods: {
        onClick: function(){
            this.$emit('updateActiveItem', this.item_index);
        }
    }
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
        width: auto;
        margin-top: auto;
        margin-bottom: auto;
    }
    .rounded {
        border-radius:.80rem!important;
    }
</style>
