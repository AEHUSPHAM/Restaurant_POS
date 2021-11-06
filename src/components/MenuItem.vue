<template>
    <div class=" menu-item-wrapper col-md-3 col-sm-4 col-6 mb-5">
        <!-- Image of menu item -->
        <div class="menu-item container rounded shadow p-0">
            <div class="menu-item-image-wrapper row ratio ratio-4x3">
                <img v-bind:src="img_src" v-bind:alt="img_alt" class="menu-item-image img-fluid">
            </div>


            <div class="menu-item-details container">
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
                    <div class="col-md-8 col-sm-8 col-8 m-auto">
                        <div class="menu-item-price">{{item_price}}</div>
                    </div>

                    <!-- Add-to-cart button -->
                    <div class="col-md-4 col-sm-4 col-4 m-auto">
                        <button title="cart" type="button" class="btn btn-rounded cart-button" @click="onClick">
                            <i class="fa fa-shopping-cart menu_item"></i>
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
        border-radius:.55rem!important;
    }
    .menu-item-image-wrapper {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }
    .menu-item-image {
        padding: 10%;
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
        max-width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cart-button .fa-shopping-cart {
        color: #ffffff;
    }
    
    @media only screen and (max-width: 420px){
        .menu-item-name {
            font-size: 70%;
        }
        .menu-item-price {
            font-size: 67%;
        }
        .cart-button {
            max-height: 25px;
            max-width: 25px;
        }
        .rounded, .btn-rounded {
            border-radius:.35rem!important;
        }

    }

    @media only screen and (min-width: 421px) and (max-width: 575px){
        .menu-item-name {
            font-size: 95%;
        }
        .menu-item-price {
            font-size: 90%;
        }
        .cart-button {
            max-height: 25px;
            max-width: 25px;
        }
        .rounded, .btn-rounded {
            border-radius:.35rem!important;
        }
    }

    @media only screen and (min-width: 576px) and (max-width: 767px){
        .menu-item-name {
            font-size: 62%;
        }
        .menu-item-price {
            font-size: 60%;
        }
        .cart-button {
            max-height: 28px;
            max-width: 28px;
        }
        .rounded, .btn-rounded {
            border-radius:.40rem!important;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 991px){
        .menu-item-name {
            font-size: 62%;
        }
        .menu-item-price {
            font-size: 60%;
        }
        .cart-button {
            max-height: 25px;
            max-width: 25px;
        }
        .rounded, .btn-rounded {
            border-radius:.45rem!important;
        }
    }

    @media only screen and (min-width: 992px) and (max-width: 1199px){
        .menu-item-name {
            font-size: 75%;
        }
        .menu-item-price {
            font-size: 70%;
        }
        .cart-button {
            max-height: 28px;
            max-width: 28px;
        }
        .rounded, .btn-rounded {
            border-radius:.45rem!important;
        }
    }

    @media only screen and (min-width: 1200px){
        .menu-item-name {
            font-size: 95%;
        }
        .menu-item-price {
            font-size: 90%;
        }
        .cart-button {
            max-height: 32px;
            max-width: 32px;
        }
        .rounded, .btn-rounded {
            border-radius:.55rem!important;
        }
    }
</style>