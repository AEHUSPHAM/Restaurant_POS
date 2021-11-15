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
                v-bind:in_cart="cart_item.in_cart"
                v-bind:price="cart_item.item_price"
            />
        </div>
    </div>
    <div :class="{ 'cart-footer-open': active, 'cart-footer-close': !active }">
        <div class="row">
            <div class="col-md-2 col-sm-2 col-2"><p style="font-size: 20px;"><b>Total: </b></p></div>
            <div class="col-md-10 col-sm-10 col-10"><p style="float: right; color: #FF0000; font-size: 20px; margin: 2px;"><b>{{total_money.toLocaleString('en-VN', {style: 'currency',currency: 'VND', minimumFractionDigits: 0})}}</b></p></div>
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
            ids: [],
            total_item: 0,
            total_money: 0,
        }
    },
    created() {
        this.emitter.on('addToCart', item_added => {
            var temp = {
                item_id: item_added.item_id,
                img_src: item_added.img_src,
                img_alt: item_added.img_alt,
                item_name: item_added.item_name,
                item_price: item_added.item_price,
                item_tag: item_added.item_tag,
                in_cart: 1
            };
            var temp2 = this.ids.indexOf(item_added.item_id);
            if(temp2 === -1)
            {
                this.cart.push(temp);
                this.ids.push(item_added.item_id);
            }
            else
            {   
                this.cart[temp2].in_cart += 1;
            }
            this.total_item += 1;
            this.total_money += item_added.item_price;
        })
        this.emitter.on('increaseCartQuantity', index => {
            this.cart[index].in_cart += 1;
            this.total_item += 1;
            this.total_money += this.cart[index].item_price
        })
        this.emitter.on('decreaseCartQuantity', index => {
            if(this.cart[index].in_cart > 0) {
                this.cart[index].in_cart -= 1;
                this.total_item -= 1;
                this.total_money -= this.cart[index].item_price
            }
        })
        this.emitter.on('closeCartItem', index => {
            this.total_item -= this.cart[index].in_cart;
            this.total_money -= this.cart[index].item_price * this.cart[index].in_cart;
            this.cart.splice(index, 1);
            this.ids.splice(index, 1);
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
    width: 30%;
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
    width: 30%;
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