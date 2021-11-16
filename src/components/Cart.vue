<template>
    <div :class="{ 'cart-open': active && (window.width > 1000), 'cart-open-small': active && (window.width <= 1000) ,'cart-close': !active }">
        <div :class="{ 'cart-header': (window.width > 1000), 'cart-header-small': (window.width <= 1000) }">
            <i class="fa fa-shopping-cart" :class="{'header-icon': (window.width > 1000), 'header-icon-small': (window.width <= 1000 && window.width > 576), 'header-icon-ssmall': (window.width <= 575)}"></i>
            <p :class="{'header-text': (window.width > 1000), 'header-text-small': (window.width <= 1000 && window.width > 576), 'header-text-ssmall': (window.width <= 575)}">
                <b>Your cart ({{ total_item }})</b>
            </p>
        </div>
        <div :class="{ 'cart-item-container': (window.width > 1000), 'cart-item-container-small': (window.width <= 1000) }">
            <CartItem 
                v-for="(cart_item,index) in menu_store.state.cart"
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
    <div :class="{ 'cart-footer-open': active && (window.width > 1000), 'cart-footer-open-small': active && (window.width <= 1000), 'cart-footer-close': !active }">
        <div class="row">
            <div class="col-md-2 col-sm-2 col-12">
                <p :class="{'total-word': (window.width > 1000), 'total-word-small': (window.width <= 1000 && window.width > 576), 'total-word-ssmall': (window.width <= 575)}">
                    <b>Total: </b>
                </p>
            </div>
            <div class="col-md-10 col-sm-10 col-12">
                <p :class="{'total-price': (window.width > 1000), 'total-price-small': (window.width <= 1000 && window.width > 576), 'total-price-ssmall': (window.width <= 575)}">
                    <b>{{menu_store.getters.getTotalMoney()}}</b>
                </p>
            </div>
        </div>
        <div class="row" style="justify-content: center;">
            <button class="col-md-12 col-sm-12 col-12" :class="{'payment-button': (window.width > 1000), 'payment-button-small': (window.width <= 1000 && window.width > 450), 'payment-button-ssmall': (window.width <= 450)}">
                PAYMENT
            </button>
        </div>
    </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'
import menu_store from '@/stores/menu_store.js'


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
            menu_store: menu_store,
            ids: [],
            total_item: 0,
            window: {
                width: 0,
                height: 0
            }
        }
    },
    created() {
        //add a new item to cart
        this.emitter.on('addToCart', item_added => {
            var item_index = this.ids.indexOf(item_added.item_id);

            if (item_index === -1)
            {
                //the item is not added to the cart
                var tmp = {
                    item_id: item_added.item_id,
                    img_src: item_added.img_src,
                    img_alt: item_added.img_alt,
                    item_name: item_added.item_name,
                    item_price: item_added.item_price,
                    item_tag: item_added.item_tag,
                    in_cart: 1
                };
                tmp.in_cart = 0;
                menu_store.commit('addToCart', tmp);
                this.ids.push(item_added.item_id);
            }
            
            menu_store.commit("increaseItemQuantity", this.ids.length - 1);
            this.total_item += 1;
        })
        //increase the quantity of an item in cart
        this.emitter.on('increaseCartQuantity', index => {
            menu_store.commit("increaseItemQuantity", index);
            this.total_item += 1;
        })
        this.emitter.on('decreaseCartQuantity', index => {
            if(menu_store.state.cart[index].in_cart > 1) {
                menu_store.commit("decreaseItemQuantity", index);
                this.total_item -= 1;
            }
        })
        //remove an item from cart
        this.emitter.on('removeFromCart', index => {
            this.total_item -= menu_store.state.cart[index].in_cart;
            menu_store.commit("removeFromCart", index);
            this.ids.splice(index, 1);
        })
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }
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
.cart-header-small {
    width: calc(30% + 1px);
    color: #FF0000;
    padding-top: 20px;
    padding-right: 10px;
    position: fixed;
    background-color: #FFFFFF;
    overflow: hidden;
    right: 0;
    height: 70px;
}
.cart-close {
    display: none;
}
.cart-item-container {
    margin-top: 90px;
}
.cart-item-container-small {
    margin-top: 20px;
}
.header-icon {
    float: left;
    font-size: 28px;
    margin-right: 20px;
}
.header-icon-small {
    font-size: 16px;
    margin-right: 10px;
}
.header-icon-ssmall {
    display: none;
}
.header-text {
    float: left;
    font-size: 22px;
}
.header-text-small {
    float: center;
    font-size: 18px;
}
.header-text-ssmall {
    float: center;
    font-size: 14px;
}
.cart-open {
    padding-left: 10px;
    padding-right: 10px;
    height: calc(100% - 150px);
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
.cart-open-small {
    padding-left: 10px;
    padding-right: 10px;
    height: 280px;
    width: 70%;
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
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
    height: 150px;
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
.cart-footer-open-small {
    width: calc(30% + 1px);
    height: 220px;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 1;
    background: #ffffff;
    padding: 10px;
    padding-top: 5%;
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
.payment-button-small {
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
    background-color: red;
    border: 1px solid #dbd2d2;
    border-radius: 10px;
    margin-bottom: 15px;
    padding-top: 2%;
    width: 80%;
    height: 50px;
    justify-content: center;
}
.payment-button-ssmall {
    font-weight: 300;
    font-size: 10px;
    color: #FFFFFF;
    background-color: red;
    border: 1px solid #dbd2d2;
    border-radius: 10px;
    margin-bottom: 15px;
    padding-top: 2%;
    width: 70%;
    height: 50px;
    justify-content: center;
}
.total-word {
    font-size: 20px;
}
.total-word-small {
    font-size: 18px;
}
.total-word-ssmall {
    font-size: 15px;
}
.total-price {
    float: right;
    color: #FF0000;
    font-size: 20px;
    margin: 2px;
}
.total-price-small {
    float: right;
    color: #FF0000;
    font-size: 18px;
    margin: 2px;
}
.total-price-ssmall {
    color: #FF0000;
    font-size: 15px;
    margin: 2px;
}
</style>