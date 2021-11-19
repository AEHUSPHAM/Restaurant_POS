<template>
    <div v-if="show_modal">
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content rounded">
                            <div class="modal-header rounded">
                                <h5 class="modal-title">ADD TO CART</h5>
                                <button type="button" class="close rounded-circle" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" @click="show_modal = false">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="container m-0 p-0">
                                    <div class=" row">
                                        <div class="col-md-4 col-sm-4 col-4">
                                            <img 
                                                v-bind:src="item.img_src"
                                                v-bind:alt="item.img_alt"
                                                class="rounded"
                                            >
                                        </div>
                                        <div class="col-md-8 col-sm-8 col-8">
                                            <div class="container m-0 p-0">
                                                <div class="item-info row">
                                                    <div class="item-name col-md-6 col-sm-6 col-6">
                                                        <h6>Item Name</h6>
                                                        <span>{{item.item_name}}</span>
                                                    </div>
                                                    <div class="item-price col-md-6 col-sm-6 col-6">
                                                        <h6>Unit Price</h6>
                                                        <h5>{{formatMoney(item.item_price)}}</h5>
                                                    </div>
                                                </div>
                                                <div class="item-quantity row">
                                                    <div class="col-md-6 col-sm-6 col-6 m-auto">
                                                        <h6>Quantity</h6>
                                                    </div>
                                                    <div class="quantity-btn-group col-md-6 col-sm-6 col-6 m-auto">
                                                        <div class="row">
                                                            <div class="col-md-4 col-sm-4 col-4 m-auto p-0">
                                                                <button 
                                                                    type="button"
                                                                    class="decre-btn btn rounded"
                                                                    @click="decreaseItemQuantity"
                                                                >
                                                                    <i class="fa fa-minus"></i>
                                                                </button>
                                                            </div>
                                                            <div class="quantity-number col-md-4 col-sm-4 col-4 m-auto p-0">
                                                                {{item.in_cart}}
                                                            </div>
                                                            <div class="col-md-4 col-sm-4 col-4 m-auto p-0">
                                                                <button 
                                                                    type="button" 
                                                                    class="incre-btn btn rounded"
                                                                    @click="increaseItemQuantity"
                                                                >
                                                                    <i class="fa fa-plus"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item-toppings row">
                                                    <div class="row">
                                                        <h6>Toppings (<span style="color:#ff0909">
                                                                {{item.selected_toppings.length}}
                                                            </span>)
                                                        </h6>
                                                    </div>

                                                    <div 
                                                        class="topping-checkbox row"
                                                        v-for="(topping_price, topping_name) in item.toppings"
                                                        v-bind:key="topping_name"
                                                    >
                                                        <div class="col-md-8 col-sm-8 col-8 m-auto">
                                                            <label>
                                                                <input
                                                                    type="checkbox"
                                                                    v-bind:value="topping_name"
                                                                    v-bind:checked="checked[topping_name]"
                                                                    v-on:click="toggleTopping($event.target.value)"
                                                                >
                                                                <span>&nbsp;{{topping_name}}</span>
                                                            </label>
                                                        </div>
                                                        <div class="col-md-4 col-sm-4 col-4 m-auto">
                                                            <span class="topping-price">
                                                                {{topping_price? formatMoney(topping_price): 'Free'}}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <div class="container p-0">
                                    <div class="row">
                                        <div class="col-md-8 col-sm-8 col-8 offset-md-4 offset-sm-4 offset-4">
                                            <button type="button" class="btn rounded" @click="show_modal = false">
                                                <i class="fa fa-shopping-cart"></i> &nbsp;{{ formatMoney(item.in_cart * item.total_price) }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>


<script>
import menu_store from '@/stores/menu_store.js'
import { formatMoney } from '@/mixins/menu.js'

export default {
    name: 'DetailModal',
    data() {
        return {
            show_modal: false,
            item_index: 0,  //index of this item in the cart
            item: null,
            checked: {},    //array to keep track of topping checkboxes
        };
    },
    methods: {
        saveEdit () {
            this.show_modal = false
        },
        decreaseItemQuantity () {
            this.emitter.emit('decreaseItemQuantity', this.item_index);
        },
        increaseItemQuantity () {
            this.emitter.emit('increaseItemQuantity', this.item_index);
        },
        toggleTopping(topping_name) {
            menu_store.commit("toggleTopping", {
                item_index: this.item_index,
                topping_name: topping_name
            })
        },
        editItemHandler (index) {
            this.show_modal = true
            this.item_index = index
            this.item = menu_store.state.cart[index]
            //determine if a topping is selected
            Object.keys(this.item.toppings).forEach((key) => {
                this.checked[key] = (this.item.selected_toppings.indexOf(key) !== -1)
            })
        },
        formatMoney,
    },
    created () {
        this.emitter.on('editItem', this.editItemHandler)
    },
    unmounted () {
        this.emitter.off('editItem', this.editItemHandler)
    }
}
</script>


<style scoped>
.rounded {
    border-radius: 0.6em!important;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-content {
    width: 96%;
    margin-left:auto;
    margin-right: auto;
}

.modal-header {
    background-color: #F3F0EC;
    padding-top: 2%;
    padding-bottom: 2%;
}

.modal-header .close {
    padding: 0;
    background: none;
    border: none;
}

.modal-header .close span {
    font-size: 100%;
}

.modal-header h5 {
    font-weight: bold;
    color: #505050;
}

.modal-body {
    margin-right: 3%;
}

.modal-body h6 {
    font-weight: bold;
    color: #000000;
}

.modal-body img {
    width: 100%;
    height: auto;
    border: solid 1px #e2e0e0;
}

.item-name, .item-price {
    margin-bottom: 2%;
}

.item-info {
    border-bottom: solid 1px #e2e0e0;
}

.item-name h6 {
    text-align: left;
    width: 100%;
}

.item-price h6 {
    text-align: right;
    width: 100%;
}

.item-price h5 {
    color: #ff0909;
    font-weight: bold;
    float: right;
    margin-top: 5%;
}

.item-name span {
    color: #414141;
    float: left;
    margin-top: 5%;
}

.item-quantity {
    padding-top: 5%;
    padding-bottom: 5%;
    border-bottom: solid 1px #e2e0e0;
}

.item-quantity h6 {
    float: left;
}

.quantity-btn-group .decre-btn {
    height: 100%;
    width: auto;
    border: solid 1px #000000;
    color: #000000;
    float: right;
}

.quantity-btn-group .incre-btn {
    height: 100%;
    width: auto;
    border: solid 1px #ff0909;
    color: #ff0909;
    float: left;
}

.quantity-btn-group .quantity-number {
    text-align: center;
}

.item-toppings {
    padding-top: 5%;
}

.item-toppings h6 {
    width: 100%;
    text-align: left;
    margin-bottom: 5%;
}

.item-toppings .row:first-of-type {
    padding-right: 0;
}

.topping-checkbox [type='checkbox']{
    margin-top: 10%;
    margin-bottom: 10%;
}

.topping-checkbox label {
    float: left;
}

.topping-checkbox label span {
    margin: auto;
}

.topping-checkbox .topping-price {
    color: #ff0909;
    font-weight: bold;
    margin-top: 8%;
    float: right;
}

.topping-checkbox div:nth-of-type(2) {
    padding-right: 0;
}

.modal-footer {
    border-top: none;
}

.modal-footer .btn {
    width: 100%;
    background: #ff0909;
    color: #ffffff;
    padding: 2%;
}

@media only screen and (max-width: 420px) {
    .modal-footer .btn,
    .modal-content h6,
    .quantity-btn-group .quantity-number {
        font-size: 12px;
    }
    .topping-checkbox label span {
        font-size: 9px;
    }
    .modal-content h5 {
        font-size: 14px;
    }
    .modal-content span,
    .quantity-btn-group .incre-btn,
    .quantity-btn-group .decre-btn {
        font-size: 10px;
    }
}

@media only screen and (min-width: 421px) and (max-width: 575px) {
    .modal-footer .btn,
    .modal-content h6,
    .quantity-btn-group .quantity-number {
        font-size: 14px;
    }
    .topping-checkbox label span {
        font-size: 11px;
    }
    .modal-content h5 {
        font-size: 18px;
    }
    .modal-content span,
    .quantity-btn-group .incre-btn,
    .quantity-btn-group .decre-btn {
        font-size: 12px;
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .modal-footer .btn,
    .modal-content h6,
    .quantity-btn-group .quantity-number {
        font-size: 16px;
    }
    .topping-checkbox label span {
        font-size: 13px;
    }
    .modal-content h5 {
        font-size: 20px;
    }
    .modal-content span,
    .quantity-btn-group .incre-btn,
    .quantity-btn-group .decre-btn {
        font-size: 14px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px){
    .modal-footer .btn,
    .modal-content h6,
    .quantity-btn-group .quantity-number {
        font-size: 16px;
    }
    .topping-checkbox label span {
        font-size: 15px;
    }
    .modal-content h5 {
        font-size: 20px;
    }
    .modal-content span,
    .quantity-btn-group .incre-btn,
    .quantity-btn-group .decre-btn {
        font-size: 14px;
    }
}

@media only screen and (min-width: 992px) and (max-width: 1199px){
    .modal-footer .btn,
    .modal-content h6,
    .quantity-btn-group .quantity-number {
        font-size: 20px;
    }
    .topping-checkbox label span {
        font-size: 17px;
    }
    .modal-content h5 {
        font-size: 24px;
    }
    .modal-content span,
    .quantity-btn-group .incre-btn,
    .quantity-btn-group .decre-btn {
        font-size: 18px;
    }
}
</style>