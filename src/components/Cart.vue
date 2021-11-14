<template>
    <div class="cart">
        
    </div>
</template>

<script>
export default {
    name: 'Cart',
    methods: {
        toggleCart: function() {
            
        }
    }
}
</script>

<style scoped>
.cart_close {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #111111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}
.cart_open {
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #111111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}
</style>