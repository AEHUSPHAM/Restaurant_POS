<template>
    <div v-if="show_modal">
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content rounded">
                            <!-- hedaer -->
                            <div class="modal-header rounded">
                                <h5 class="modal-title">CONFIRM ORDER</h5>
                                <button type="button" class="close rounded-circle" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" @click="show_modal = false">&times;</span>
                                </button>
                            </div>

                            <!-- body -->
                            <div class="modal-body p-0 m-0">
                                <div
                                    class="item-wrapper container rounded"
                                    v-for="(item, index) in order.cart"
                                    v-bind:key="index"
                                    v-bind:item="item"
                                >
                                    <div class=" row">
                                        <!-- menu item photo -->
                                        <div class="col-md-4 col-sm-4 col-4">
                                            <img 
                                                v-bind:src="getDownloadUrl(item.img_path)"
                                                v-bind:alt="item.img_alt"
                                                class="rounded"
                                            >
                                        </div>

                                        <!-- menu item info -->
                                        <div class="col-md-8 col-sm-8 col-8">
                                            <div class="container m-0 p-0">

                                                <!-- item's name & unit price -->
                                                <div class="item-info row">
                                                    <div class="item-name col-md-6 col-sm-6 col-6">
                                                        <h6>Item Name</h6>
                                                        <span>{{ item.item_name }}</span>
                                                    </div>
                                                    <div class="item-price col-md-6 col-sm-6 col-6">
                                                        <h6>Unit Price</h6>
                                                        <h5>{{ formatMoney(item.item_price) }}</h5>
                                                    </div>
                                                </div>
        

                                                <!-- item toppings -->
                                                <div class="item-toppings row">
                                                    <div class="row">
                                                        <h6>Toppings (<span style="color:#ff0909">
                                                                {{ item.selected_toppings.length }}
                                                            </span>)
                                                        </h6>
                                                    </div>

                                                    <div 
                                                        class="topping-checkbox row"
                                                        style="padding-right:0;"
                                                        v-for="(topping_name, index) in item.selected_toppings"
                                                        v-bind:key="index"
                                                    >
                                                        <div class="col-md-8 col-sm-8 col-8 m-auto">
                                                            <span>
                                                                <i class="fa fa-check"></i>&nbsp;{{ topping_name }}
                                                            </span>
                                                        </div>
                                                        <div class="col-md-4 col-sm-4 col-4 m-auto">
                                                            <span class="topping-price">
                                                                {{ item.toppings[topping_name]? formatMoney(item.toppings[topping_name]): 'Free' }}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>


                                                 <div class="item-quantity row">
                                                    <div class="col-md-6 col-sm-6 col-6">
                                                        <h6>Quantity</h6>
                                                    </div>
                                                    <div class="col-md-6 col-sm-6 col-6">
                                                        <h5>&times; {{ item.in_cart }}</h5>
                                                    </div>
                                                </div>
        
                                                
                                                <div class="item-total row">
                                                    <div class="col-md-8 col-sm-8 col-8 m-auto">
                                                        <h5 style="float:left;">
                                                            Item total
                                                        </h5>
                                                    </div>
                                                    <div class="col-md-4 col-sm-4 col-4 m-auto">
                                                        <h5 style="float:right;">
                                                            {{ formatMoney(item.in_cart * item.total_price) }}
                                                        </h5>
                                                    </div>
                                            
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <!-- footer -->
                            <div class="modal-footer">
                                <div class="container p-0">
                                    <div class="total-cost row">
                                        <div class="col-md-6 col-sm-6 col-6">
                                            <h4 style="float:left;">
                                                <i class="fa fa-money"></i>&nbsp;&nbsp;Total cost
                                            </h4>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-6">
                                            <h4 style="float:right;">
                                                {{ formatMoney(order.total_money) }}
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-12 m-auto">
                                            <button type="button" class="btn rounded" @click="show_modal = false">
                                                CONFIRM
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
import { formatMoney, getDownloadUrl } from '@/mixins/menu.js'


export default {
    name: 'ConfirmModal',
    data () {
        return {
            show_modal: false,
            order: null,
        }
    },
    methods: {
        confirmOrderHandler: function(order) {
            this.order = order
            this.show_modal = true
        },
        formatMoney,
        getDownloadUrl,
    },
    created () {
        this.emitter.on('confirmOrder', this.confirmOrderHandler)
    },
    unmounted () {
        this.emitter.off('confirmOrder', this.confirmOrderHandler)
    },
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
    width: 100%;
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

.modal-header h5 {
    font-weight: bold;
    color: #505050;
}

.modal-body {
    height: 60vh;
    overflow-y: auto;
}

.item-wrapper {
    width: 94%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;
    margin-bottom: 3%;
    padding: 4% 3% 4% 3%;
    background-color: #fffcf2;
    border: solid 1px #acaaaa;   
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

.item-name, .item-price, .item-toppings {
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

.item-toppings {
    padding-top: 5%;
    padding-bottom: 5%;
    border-bottom: solid 1px #e2e0e0;
}

.item-toppings h6 {
    width: 100%;
    text-align: left;
    margin-bottom: 5%;
}

.item-toppings .row:first-of-type {
    padding-right: 0;
}

.topping-checkbox {
    margin-top: 2%;
    margin-bottom: 2%;
}

.topping-checkbox span {
    float: left;
    margin: auto;
}

.topping-checkbox .topping-price {
    color: #ff0909;
    font-weight: bold;
    margin-top: auto;
    margin-bottom: auto;
    float: right;
}

.topping-checkbox div:nth-of-type(2) {
    padding-right: 0;
}

.item-quantity {
    padding-top: 3%;
    padding-bottom: 3%;
    margin-bottom: 5%;
    border-bottom: solid 1px #e2e0e0;
}

.item-quantity h6 {
    float: left;
    padding-top: auto;
    padding-bottom: auto;
    height: 100%;
}

.item-quantity h5 {
    float: right;
    padding-top: auto;
    padding-bottom: auto;
    height: 100%;
    font-weight: bold;
    color: #ff0909;
}

.modal-footer {
    border-top: none;
}

.item-total h5 {
    color: #ff0909;
    font-weight: bold;
}

.total-cost {
    color: #ff0909;
    padding: 3%;
}

.total-cost h4 {
    font-weight: bold;
}

.modal-footer {
    border-top: solid 3px #e2e0e0;
}

.modal-footer .btn {
    width: 100%;
    background: #ff0909;
    color: #ffffff;
    padding: 2%;
}

@media only screen and (max-width: 420px) {
    .modal-content h6 {
        font-size: 12px;
    }
    .topping-checkbox label span {
        font-size: 9px;
    }
    .modal-header .close span,
    .modal-footer .btn,
    .item-total h5,
    .modal-content h5 {
        font-size: 14px;
    }
    .modal-content span{
        font-size: 10px;
    }
    .total-cost h4 {
        font-size: 16px;
    }
}

@media only screen and (min-width: 421px) and (max-width: 575px) {
    .modal-content h6 {
        font-size: 14px;
    }
    .topping-checkbox label span {
        font-size: 11px;
    }
    .modal-header .close span,
    .modal-footer .btn,
    .item-total h5,
    .modal-content h5 {
        font-size: 18px;
    }
    .modal-content span {
        font-size: 12px;
    }
    .total-cost h4 {
        font-size: 20px;
    }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
    .modal-content {
        font-size: 16px;
    }
    .topping-checkbox label span {
        font-size: 13px;
    }
    .modal-header .close span,
    .modal-footer .btn,
    .item-total h5,
    .modal-content h5 {
        font-size: 20px;
    }
    .modal-content span{
        font-size: 14px;
    }
    .total-cost h4 {
        font-size: 22px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px){
    .modal-content h6 {
        font-size: 16px;
    }
    .topping-checkbox label span {
        font-size: 15px;
    }
    .modal-header .close span,
    .modal-footer .btn,
    .item-total h5,
    .modal-content h5 {
        font-size: 20px;
    }
    .modal-content span{
        font-size: 14px;
    }
    .total-cost h4 {
        font-size: 22px;
    }
}

@media only screen and (min-width: 992px) and (max-width: 1199px){
    .modal-content h6 {
        font-size: 20px;
    }
    .topping-checkbox label span {
        font-size: 17px;
    }
    .modal-header .close span,
    .modal-footer .btn,
    .item-total h5,
    .modal-content h5 {
        font-size: 24px;
    }
    .modal-content span{
        font-size: 18px;
    }
    .total-cost h4 {
        font-size: 26px;
    }
}

@media only screen and (min-width: 1200px) {
    .modal-content h6 {
        font-size: 22px;
    }
    .topping-checkbox label span {
        font-size: 19px;
    }
    .modal-header .close span,
    .modal-footer .btn,
    .item-total h5,
    .modal-content h5 {
        font-size: 24px;
    }
    .modal-content span{
        font-size: 20px;
    }
    .total-cost h4 {
        font-size: 26px;
    }
}
</style>