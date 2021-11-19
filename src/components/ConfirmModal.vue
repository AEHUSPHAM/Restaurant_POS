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
                                                <i class="fa fa-shopping-cart"></i> &nbsp;{{total_money}}
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
