<template>
    <div :class="{ 'cart-open': active, 'cart-close': !active }">
        <div style="color: #FF0000; padding: 10px;">
            <i class="fa fa-shopping-cart" style="float: left; font-size: 32px; margin-right: 20px"></i>
            <p style="float: left; font-size: 25px;"><b>Your cart ({{ total }})</b></p>
        </div>
        <CartItem 
            v-for="(cart_item,index) in cart"
            v-bind:img_src="cart_item.img_src"
            v-bind:img_alt="cart_item.img_alt"
            v-bind:key="index"
            v-bind:id="index + 1"
            v-bind:text="cart_item.item_name"
            v-bind:in_cart="in_cart[index]"
            v-bind:price="cart_item.item_price"
        />
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
            in_cart: [],
            total: 0
        }
    },
    created (){
        this.emitter.on('addToCart', item_added => {
            var temp = this.cart.indexOf(item_added); 
            if(temp === -1)
            {
                this.cart.push(item_added);
                this.in_cart.push(1);
            }
            else
            {   
                this.in_cart[temp] += 1;
            }
            this.total += 1;
        })
    }

}
</script>

<style scoped>
.cart-close {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #FFFFFF;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 20px;

}
.cart-open {
    height: 100%;
    width: 500px;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #FFFFFF;
    overflow-x: hidden;
    transition: 0.5s;
    box-shadow: -13px 0px 15px 0px rgba(0,0,0,0.39);
    -webkit-box-shadow: -13px 0px 15px 0px rgba(0,0,0,0.39);
    -moz-box-shadow: -13px 0px 15px 0px rgba(0,0,0,0.39);
}
</style>