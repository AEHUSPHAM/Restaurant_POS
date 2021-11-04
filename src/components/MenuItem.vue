<template>
    <div class=" menu-item-wrapper col-md-3 col-sm-3 col-6 mb-5">
        <!-- Image of menu item -->
        <div class="container menu-item rounded shadow p-0">

            <div class="row p-3">
                <img v-bind:src="img_src" v-bind:alt="img_alt" class=" menu-item-image img-fluid">
            </div>


            <div class="container menu-item-details">
                <!-- Menu Item name -->
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-12">
                        <div class="menu-item-name">
                            <span class="menu-item-index">{{item_index + ". "}}</span>{{item_name}}
                        </div>
                    </div>
                </div>

                <div class="row">
                    <!-- Menu Item price -->
                    <div class="col-md-8 col-sm-12 col-12 m-auto">
                        <div class="menu-item-price">{{item_price}}</div>
                    </div>

                    <!-- Add-to-cart button -->
                    <div class="col-md-4 col-sm-12 col-12 m-auto">
                        <button title="cart" type="button" class="btn btn-rounded cart-button" @click="onClick">
                            <i class="fa fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default ({
    name: 'MenuItem',
    props: {
        img_src: {
            type: String,
            default: ""
        },
        img_alt: {
            type: String,
            default: ""
        },
        item_index: {
            type: Number,
            default: 0,
            validiator: function(value){ //validiator for the item_index propertu
                return Number.isInteger(value);
            }
        },
        item_name: {
            type: String,
            default: "Unnamed"
        },
        item_price: {   //price should contain both the value and unit
            type: String, 
            default: "Unknown"
        },
        callback: {
            type: Function,
            default: function() {
                alert("This function has not been implemented.")
            }
        },
        item_tag: {
            type: String, 
            default: "Unknown"
        }
    },
    methods: {
        onClick: function(){
            this.callback(this.callback)
        }
    },
})
</script>



<style scoped>
    .menu-item {
        background: none;
        border: 1px solid #f8f8f8;
        overflow: hidden;
        max-width: 90%;
    }
    .rounded, .btn-rounded {
        border-radius:.60rem!important
    }
    .menu-item-image {
        margin-left: auto;
        margin-right: auto;
        max-width: 90%;
    }
    .menu-item-details {
        width: 100%;
        background: #ffffff;
        padding: 5%;
    }
    .menu-item-name, .menu-item-price {
        float: left;
        font-weight: bolder;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .menu-item-name {
        font-size: 95%;
        width: 100%;
        text-align: left;
        border-bottom: 2px solid #f8f8f8;
        padding-bottom: 3%;
        margin-bottom: 3%;
    }
     .menu-item-price {
        font-size: 90%;
    }
    .menu-item-index, .menu-item-price {
        color: #ff0000;
    }
    .cart-button {
        background: #ff0000;
        float: right;
    }
    .cart-button .fa-shopping-cart {
        color: #ffffff;
    }
</style>