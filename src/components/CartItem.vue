<template>
    <div class="row">
        <div class='cart-item'>
            <button class="close" @click="closeCartItem"><i class="fa fa-close"></i></button>
            <div class="col-md-3 col-sm-3 col-3 w-100">
                <img v-bind:src="img_src" v-bind:alt="img_alt">
            </div>
            <div class="col-md-9 col-sm-9 col-9 w-100">
                <div class="row" style="margin-bottom: 6px;">
                    <div class="col-md-12 col-sm-12 col-12">
                        <b>
                            <p style="float: left; color: #FF0000; margin-right: 5px;"> {{id}}.</p>
                            <p style="float: left">{{text}}</p>
                        </b>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2 col-sm-2 col-2">
                        <button class="minus" @click="decreaseCartQuantity"><i class="fa fa-minus"></i></button>
                    </div>
                    <div class="col-md-2 col-sm-2 col-2">
                        <p>{{in_cart}}</p>
                    </div>
                    <div class="col-md-2 col-sm-2 col-2">
                        <button class="plus" @click="increaseCartQuantity"><i class="fa fa-plus"></i></button>
                    </div>
                    <div class="col-md-6 col-sm-6 col-6">
                        <div style="color: #ff0000; float: right">
                            <b><p>{{price}}</p></b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    props: {
        text: {
            type: String,
            default: ""
        },
        id: {
            type: Number,
            default: -1
        },
        img_src: {
            type: String,
            default: ""
        },
        img_alt: {
            type: String,
            default: ""
        },
        in_cart: {
            type: Number,
            default: 1
        },
        price: {
            type: Number,
            default: 0
        },
    },
    methods: {
        increaseCartQuantity: function(){
            this.emitter.emit('increaseCartQuantity', this.id - 1);
        },
        decreaseCartQuantity: function(){
            this.emitter.emit('decreaseCartQuantity', this.id - 1);
        },
        closeCartItem: function(){
            this.emitter.emit('closeCartItem', this.id - 1);
        }
    },
}
</script>

<style scoped>
img {
    float: left;
    margin-top: 1%;
    width: 23%;
    border-radius: 10px;
    margin-right: 3%;

}

.minus {
    float: left;
    display: flex;
    color: #000000;
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius:.45rem;
    height: 30px;
    width: 30px;
    justify-content: center;
    align-items: center;
}

.plus {
    float: left;
    display: flex;
    color: #ff0000;
    background-color: #ffffff;
    border: 1px solid #ff0000;
    border-radius:.45rem;
    height: 30px;
    width: 30px;
    justify-content: center;
    align-items: center;
}

.close {
    float: right;
    display: flex;
    color: #808080;
    background-color: #ffffff;
    border: 1px solid #808080;
    border-radius:50%;
    height: 30px;
    width: 30px;
    justify-content: center;
    align-items: center;
    margin-top: -19px;
    margin-right: -18px;
}

.cart-item {
    border: 1px solid #dbd2d2;
    border-radius: 10px;
    margin-left: 2.5%;
    margin-bottom: 15px;
    padding-top: 2%;
    width: 95%;
    height: 100px;
}
</style>