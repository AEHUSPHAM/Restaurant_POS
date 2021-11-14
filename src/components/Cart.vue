<template>
    <div :class="{ 'cart-open': active, 'cart-close': !active }">
        <CartItem/>
        <CartItem/>
        <CartItem/>
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
    padding-top: 20px;
    box-shadow: -13px 0px 15px 0px rgba(0,0,0,0.39);
    -webkit-box-shadow: -13px 0px 15px 0px rgba(0,0,0,0.39);
    -moz-box-shadow: -13px 0px 15px 0px rgba(0,0,0,0.39);

}
</style>