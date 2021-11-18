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
                <div class="row" style="margin-bottom: 6px;">
                    <div class="item-label col-md-12 col-sm-12 col-12 p-0">
                        <p class="item-name">
                            {{item_index}}. {{item.item_name}}
                        </p>
                        <button type="button" class="edit" @click="editItem">
                            <i class="fa fa-edit"></i>
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-12 w-100">
                        <button class="minus" @click="decreaseCartQuantity">
                            <i class="fa fa-minus"></i>
                        </button>
                        <p class="quantity">
                            {{item.in_cart}}
                        </p>
                        <button class="plus" @click="increaseCartQuantity">
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
        increaseCartQuantity: function(){
            this.emitter.emit('increaseCartQuantity', this.item_index -1);
        },
        decreaseCartQuantity: function(){
            this.emitter.emit('decreaseCartQuantity', this.item_index - 1);
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
}
</script>

<style scoped>
img {
    float: left;
    width: 23%;
    height: 80px;
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
}

.edit {
    float: left;
    display: flex;
    background: none;
    border: none;
    font-size: 80%;
    color: #ff0000;
    margin-left: 2%;
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
    color: #ff0000;
    border: 1px solid #ff0000;
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
    height: 110px;
}

.price {
    color: #ff0000;
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


@media only screen and (max-width: 1000px ){
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
        font-size: 11px;
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
}

</style>