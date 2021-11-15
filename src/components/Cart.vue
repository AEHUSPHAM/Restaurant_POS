<template>
    <div :class="{ 'cart-open': active, 'cart-close': !active }">
        <div class="cart-header">
            <i class="fa fa-shopping-cart" style="float: left; font-size: 32px; margin-right: 20px"></i>
            <p style="float: left; font-size: 25px;"><b>Your cart ({{ total_item }})</b></p>
        </div>
        <div style="margin-top:90px">
            <CartItem 
                v-for="(cart_item,index) in cart"
                v-bind:key="index"
                v-bind:img_src="cart_item.img_src"
                v-bind:img_alt="cart_item.img_alt"
                v-bind:id="index + 1"
                v-bind:text="cart_item.item_name"
                v-bind:in_cart="in_cart[index]"
                v-bind:price="cart_item.item_price"
            />
        </div>
    </div>
    <div :class="{ 'cart-footer-open': active, 'cart-footer-close': !active }">
        <div class="row">
            <div class="col-md-2 col-sm-2 col-2"><p style="font-size: 20px;"><b>Total: </b></p></div>
            <div class="col-md-10 col-sm-10 col-10"><p style="float: right; color: #FF0000; font-size: 20px; margin: 2px;"><b>VND {{ total_money }}</b></p></div>
        </div>
        <div class="row" style="justify-content: center;"><button class="payment-button col-md-12 col-sm-12 col-12">PAYMENT</button></div>
    </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'

export default {
    name: 'Cart',
    props: {
        active: {
            type: Boolean,
        },
    },
    components: {
        CartItem,
    },
    data() {
        return {
            cart: [],
            name: [],
            in_cart: [],
            total_item: 0,
            total_money: 0,
        }
    },
    created() {
        this.emitter.on('addToCart', item_added => {
            var temp = {img_src: item_added.img_src, img_alt: item_added.img_alt, item_name: item_added.item_name, item_price: item_added.item_price};
            var temp2 = this.name.indexOf(item_added.item_name);
            if(temp2 === -1)
            {
                this.cart.push(temp);
                this.in_cart.push(1);
                this.name.push(item_added.item_name);
            }
            else
            {   
                this.in_cart[temp2] += 1;
            }
            this.total_item += 1;
            this.total_money += item_added.item_price
        })
        this.emitter.on('increaseCartQuantity', index => {
            this.in_cart[index] += 1;
            this.total_item += 1;
            this.total_money += this.cart[index].item_price
        })
        this.emitter.on('decreaseCartQuantity', index => {
            if(this.in_cart[index] > 0) {
                this.in_cart[index] -= 1;
                this.total_item -= 1;
                this.total_money -= this.cart[index].item_price
            }
        })
        this.emitter.on('closeCartItem', index => {
            this.cart.splice(index, 1);
            this.total_item -= this.in_cart[index];
            this.total_money -= this.cart[index].item_price * this.in_cart[index];
            this.in_cart.splice(index, 1);
            this.name.splice(index, 1);
        })
    }

}
</script>

<style scoped>
.cart-header {
    width: 100%;
    color: #FF0000;
    padding: 10px;
    position: fixed;
    background-color: #FFFFFF;
    overflow: hidden;
    top: 0;
}
.cart-close {
    display: none;
}
.cart-open {
    padding-left: 10px;
    padding-right: 10px;
    height: 85%;
    width: 500px;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #FFFFFF;
    overflow-x: hidden;
    box-shadow: -13px 0px 15px 0px rgba(0,0,0,0.39);
    -webkit-box-shadow: -13px 0px 15px 0px rgba(0,0,0,0.39);
    -moz-box-shadow: -13px 0px 15px 0px rgba(0,0,0,0.39);
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
.cart-open::-webkit-scrollbar {
    display: none;
}
.cart-footer-close {
    display: none;
}
.cart-footer-open {
    width: 500px;
    height: 15%;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 1;
    background: #ffffff;
    padding: 10px;
    box-shadow: -13px 0px 15px 0px rgba(0,0,0,0.39);
    -webkit-box-shadow: -13px 0px 15px 0px rgba(0,0,0,0.39);
    -moz-box-shadow: -13px 0px 15px 0px rgba(0,0,0,0.39);
}
.payment-button {
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
    background-color: red;
    border: 1px solid #dbd2d2;
    border-radius: 10px;
    margin-bottom: 15px;
    padding-top: 2%;
    width: 95%;
    height: 70px;
    justify-content: center;
}
</style>