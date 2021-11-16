<template>
    <div v-if="show_modal">
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content rounded">
                            <div class="modal-header rounded">
                                <h5 class="modal-title">Modal title</h5>
                                <button type="button" class="close rounded-circle" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" @click="show_modal = false">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="container m-0 p-0">
                                    <div class=" row">
                                        <div class="col-md-4 col-sm-4 col-4">
                                            <img 
                                                src="https://th.bing.com/th/id/R.9c003039b4ba1661cc1afe37c0495092?rik=uM1cwdIuYX9U4w&pid=ImgRaw&r=0"
                                                alt=""
                                                class="ratio ratio-1x1 rounded"
                                            >
                                        </div>
                                        <div class="col-md-8 col-sm-8 col-8">
                                            <div class="container m-0 p-0">
                                                <div class="item-info row">
                                                    <div class="item-name col-md-6 col-sm-6 col-6">
                                                        <h6>Item Name</h6>
                                                        <span>Cheese Cake</span>
                                                    </div>
                                                    <div class="item-price col-md-6 col-sm-6 col-6">
                                                        <h6>Item Price</h6>
                                                        <h5>20000</h5>
                                                    </div>
                                                </div>
                                                <div class="item-quantity row">
                                                    <div class="col-md-6 col-sm-6 col-6 m-auto">
                                                        <h6>Quantity</h6>
                                                    </div>
                                                    <div class="quantity-btn-group col-md-6 col-sm-6 col-6 m-auto">
                                                        <div class="row">
                                                            <div class="col-md-4 col-sm-4 col-4 m-auto p-0">
                                                                <button type="button" class="decre-btn btn rounded">
                                                                    <i class="fa fa-minus"></i>
                                                                </button>
                                                            </div>
                                                            <div class="quantity-number col-md-4 col-sm-4 col-4 m-auto p-0">
                                                                1
                                                            </div>
                                                            <div class="col-md-4 col-sm-4 col-4 m-auto p-0">
                                                                <button type="button" class="incre-btn btn rounded">
                                                                    <i class="fa fa-plus"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item-toppings row">
                                                    <div class="row">
                                                        <h6>Toppings (<span>0</span>)</h6>
                                                    </div>

                                                    <div class="topping-checkbox row">
                                                        <div class="col-md-6 col-sm-6 col-6 m-auto">
                                                            <label>
                                                                <input type="checkbox"> Boba
                                                            </label>
                                                        </div>
                                                        <div class="col-md-6 col-sm-6 col-6 m-auto">
                                                            <span>Vnd 50000</span>
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
                                                <i class="fa fa-shopping-cart"></i> &nbsp;30000
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
    <button @click="show_modal = true">Click</button>
</template>


<script>
export default {
    name: 'DetailModal',
    data() {
        return {
            show_modal: false
        };
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
    width: 70%;
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

.item-toppings span {
    color: #ff0909;
}

.item-toppings .row:first-of-type {
    padding-right: 0;
}

input[type='checkbox']{
    margin-top: 20%;
    margin-bottom: 10%;
}

.topping-checkbox label {
    float: left;
}

.topping-checkbox span {
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

@media only screen and (min-width: 421px) and (max-width: 575px) {
    .modal-footer .btn,
    .modal-content h6,
    .topping-checkbox label,
    .quantity-btn-group .quantity-number {
        font-size: 14px;
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
    .topping-checkbox label,
    .quantity-btn-group .quantity-number {
        font-size: 16px;
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
    .topping-checkbox label,
    .quantity-btn-group .quantity-number {
        font-size: 16px;
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
    .topping-checkbox label,
    .quantity-btn-group .quantity-number {
        font-size: 20px;
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