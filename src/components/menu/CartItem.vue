<template>
    <div class="row">
        <div class='cart-item'>
            <button class="close-item" @click="removeFromCart">
                <i class="fa fa-close"></i>
            </button>
            <div class="col-md-3 col-sm-3 col-3 w-100">
                <img v-bind:src="item.img_src" v-bind:alt="item.img_alt">
            </div>
            <div class="col-md-9 col-sm-9 col-9 w-100">
                <div class="row item">
                    <div class="item-label col-md-12 col-sm-12 col-12 p-0">
                        <p class="item-name">
                            {{item_index}}. {{item.item_name}}
                        </p>
                        
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-12 topping">
                        <p class="topping-lable">
                            Topping:
                        </p>
                        <button type="button" class="edit" @click="editItem">
                            <i class="fa fa-edit"></i>
                        </button>
                        <p class="topping-money">
                            {{ formatMoney(item.total_price - item.item_price) }}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-12 w-100">
                        <button class="minus" @click="decreaseItemQuantity">
                            <i class="fa fa-minus"></i>
                        </button>
                        <p class="quantity">
                            {{item.in_cart}}
                        </p>
                        <button class="plus" @click="increaseItemQuantity">
                            <i class="fa fa-plus"></i>
                        </button>
                        <b>
                            <p class="price">
                                {{formatMoney(item.item_price)}}
                            </p>
                        </b>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { formatMoney } from '@/mixins/menu.js'

export default {
    name: 'CartItem',
    props: {
        item_index: {
            type: Number,
        },
        item: {
            type: Object,
        }
    },
    data() {
        return {
            window: {
                width: 0,
                height: 0
            }
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    methods: {
        increaseItemQuantity: function(){
            this.emitter.emit('increaseItemQuantity', this.item_index -1);
        },
        decreaseItemQuantity: function(){
            this.emitter.emit('decreaseItemQuantity', this.item_index - 1);
        },
        removeFromCart: function(){
            this.emitter.emit('removeFromCart', this.item_index - 1);
        },
        editItem() {
            this.emitter.emit('editItem', this.item_index - 1)
        },
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        formatMoney
    },
    unmounted () {
        window.removeEventListener('resize', this.handleResize)
    }
}
</script>

<style scoped>
img {
    float: left;
    width: 25%;
    height: 90px;
    border-radius: 10px;
    margin-right: 3%;
}

.item-name {
    float: left;
    display: flex;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: bold;
    font-size: 14px;
}

.item {
    margin-bottom: -7px;
    margin-top: -7px;
}

.topping-money {
    height: 25px;
    margin-bottom: 9px;
    float: right;
}

.topping-money p {
    color: #ff0909;
    font-size: 14px;
    display: flex;
    margin: 0 auto;
    margin-right: 12px;
}

.edit {
    float: left;
    display: flex;
    background: none;
    border: none;
    font-size: 80%;
    color: #ff0909;
    margin-left: 2%;
}

.topping {
    height: 25px;
    margin-bottom: 9px;
    border-bottom: 1px solid #808080;
}

.topping-lable {
    float: left;
    display: flex;
    font-size: 12px; 
}

.minus, .plus, .quantity {
    float: left;
    display: flex;
    background: none;
    height: 25px;
    width: auto;
    justify-content: center;
    align-items: center;
    border-radius: 0.5em;
}

.minus {
    color: #000000;
    border: 1px solid #000000;
}

.plus {
    color: #ff0909;
    border: 1px solid #ff0909;
}

.quantity {
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: auto;
}

.close-item {
    float: right;
    display: flex;
    color: #808080;
    background-color: #ffffff;
    border: 1px solid #808080;
    border-radius: 50%;
    height: 25px;
    width: 25px;
    justify-content: center;
    align-items: center;
    margin-top: -25px;
    margin-right: -18px;
}

.cart-item {
    border: 1px solid #dbd2d2;
    border-radius: 10px;
    margin-left: 5%;
    margin-bottom: 15px;
    padding-top: 14px;
    width: 90%;
    height: 120px;
    padding-top: -10px;
}

.price {
    color: #ff0909;
    display: flex;
    float: right;
}

.item-label {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.item-label p, .item-label i {
    font-weight: bold;
    float: left;
}


@media only screen and (max-width: 767px ){
    .item-name {
        font-size: 11px;
    }
    .cart-item {
        padding-top: 20px;
    }
    img {
        height: 65px;
    }
    .minus {
        border-radius:.30rem;
        height: 20px;
        width: 20px;
    }
    .plus {
        border-radius:.30rem;
        height: 20px;
        width: 20px;
    }
    .price {
        font-size: 15px;
    }
}

@media only screen and (max-width: 350px){
    .item-name {
        font-size: 9px;
    }
    .cart-item {
        height: 80px;
        padding-top: 7px;
    }
    img {
        height: 65px;
    }
    .minus {
        border-radius:.25rem;
        height: 15px;
        width: 15px;
    }
    .plus {
        border-radius:.25rem;
        height: 15px;
        width: 15px;
    }
    .price {
        font-size: 12px;
    }

    .topping {
        height: 18px;
        margin-bottom: 7px;
        border-bottom: 1px solid black;
    }
    .topping-lable {
        float: left;
        display: flex;
        font-size: 10px; 
    }
    .topping-money {
        font-size: 10px; 
    }
    .quantity {
        font-size: 10px;
        margin-top: -4px;
    }
    .price {
        font-size: 10px;
    } 
    .item {
        margin-top: -3px;
    }
}

</style>