<template>
    <div :class="{
        'cart-open': active && (window.width > 767),
        'cart-open-small': active && (window.width <= 767)
        ,'cart-close': !active
        }"
    >
        <div :class="{
            'cart-header': (window.width > 767),
            'cart-header-small': (window.width <= 767)
            }"
        >
            <i  class="fa fa-shopping-cart"
                :class="{
                    'header-icon': (window.width > 767),
                    'header-icon-small': (window.width <= 767 && window.width > 576),
                    'header-icon-ssmall': (window.width <= 575)
                }"
            >
            </i>
            <p :class="{
                'header-text': (window.width > 767),
                'header-text-small': (window.width <= 767 && window.width > 576),
                'header-text-ssmall': (window.width <= 575)
                }"
            >
                <b>Your cart ({{ total_amount }})</b>
            </p>
            <button class="close-cart" @click="toggleCart">
                <i class="fa fa-close"></i>
            </button>
        </div>
        <div :class="{
            'cart-item-container': (window.width > 767),
            'cart-item-container-small': (window.width <= 767)
            }"
        >
            <CartItem 
                v-for="(item,index) in cart"
                v-bind:key="index"
                v-bind:item_index="index + 1"
                v-bind:item="item"
            />
        </div>
    </div>
    <div :class="{
        'cart-footer-open': active && (window.width > 767),
        'cart-footer-open-small': active && (window.width <= 767),
        'cart-footer-close': !active
        }"
    >
        <div class="row">
            <div class="col-md-2 col-sm-2 col-12">
                <p :class="{
                    'total-word': (window.width > 767),
                    'total-word-small': (window.width <= 767 && window.width > 576),
                    'total-word-ssmall': (window.width <= 575)
                    }"
                >
                    <b>Total: </b>
                </p>
            </div>
            <div class="col-md-10 col-sm-10 col-12">
                <p :class="{
                    'total-price': (window.width > 767),
                    'total-price-small': (window.width <= 767 && window.width > 576),
                    'total-price-ssmall': (window.width <= 575)
                    }
                ">
                    <b>{{ total_money }}</b>
                </p>
            </div>
        </div>
        <div class="row" style="justify-content: center;">
            <button 
                class="col-md-12 col-sm-12 col-12" 
                :class="{
                    'payment-button': (window.width > 767),
                    'payment-button-small': (window.width <= 767 && window.width > 450),
                    'payment-button-ssmall': (window.width <= 450)
                }"
                @click="placeOrder"
            >
                PAYMENT
            </button>
        </div>
    </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'
import menu_store from '@/stores/menu_store.js'
import { placeOrder } from '@/mixins/menu.js'


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
            window: {
                width: 0,
                height: 0
            }
        }
    },
    created() {
        //add a new item to cart
        this.emitter.on('addToCart', this.addToCartHandler)
        //increase the quantity of an item in cart
        this.emitter.on('increaseItemQuantity', this.increaseItemQuantityHandler)
        //decrease the quantity of an item in cart
        this.emitter.on('decreaseItemQuantity', this.decreaseItemQuantityHandler)
        //remove an item from cart
        this.emitter.on('removeFromCart', this.removeFromCartHandler)

        //handle resize event
        window.addEventListener('resize', this.handleResize);

        //adjust the cart on start up
        this.handleResize();
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        toggleCart() {
            menu_store.commit("toggleCart")
        },
        placeOrder() {
            this.emitter.emit("startLoading")
            const order = menu_store.getters.getOrder()

            placeOrder(order).then((response) => {
                this.emitter.emit("endLoading")
                const data = response.data
                
                if (data.status === 'success'){
                    //display the order confirmed by server
                    this.emitter.emit("askConfirmOrder", data)
                }else{
                    console.log("Error sending the order: ", data.message)
                }

            })
        },
        addToCartHandler(item_added) {
            //event handler od addToCart
            var new_item = {
                id: item_added.id,
                img_src: item_added.img_src,
                img_alt: item_added.img_alt,
                item_name: item_added.item_name,
                item_price: item_added.item_price,
                item_tag: item_added.item_tag,
                toppings: item_added.toppings,
                selected_toppings: [],
                total_price: item_added.item_price, //price with toppings included
                in_cart: 1
            };

            menu_store.commit('addToCart', new_item);
        },
        increaseItemQuantityHandler(index) {
            menu_store.commit("increaseItemQuantity", index);
        },
        decreaseItemQuantityHandler(index) {
            if (menu_store.state.cart[index].in_cart > 1) {
                menu_store.commit("decreaseItemQuantity", index);
            }
        },
        removeFromCartHandler(index) {
            menu_store.commit("removeFromCart", index);
        }
    },
    computed: {
        cart: () => {
            return menu_store.state.cart
        },
        total_money: () => {
            return menu_store.getters.getTotalMoney()
        },
        total_amount: () => {
            return menu_store.state.total_amount
        }
    },
    unmounted () {
        //remove all event listerners when the component is unmounted
        this.emitter.off('addToCart', this.addToCartHandler)
        this.emitter.off('increaseItemQuantity', this.increaseItemQuantityHandler)
        this.emitter.off('decreaseItemQuantity', this.decreaseItemQuantityHandler)
        this.emitter.off('removeFromCart', this.removeFromCartHandler)

        //remove the resize event listerner
        window.removeEventListener('resize', this.handleResize)
    }
}
</script>

<style scoped>
.close-cart {
    right: 20px;
    position: fixed;
    color: #FF0000;
    background-color: #ffffff;
    border: none;
    border-radius: 50%;
    height: 25px;
    width: 25px;
    justify-content: center;
    align-items: center;
    font-size: 30px
}
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
    padding-right: 25px;
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
    float: left;
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
    float: left;
    font-size: 18px;
}
.header-text-ssmall {
    float: left;
    font-size: 14px;
}
.cart-open {
    padding-left: 10px;
    padding-right: 10px;
    height: calc(100% - 150px);
    width: 30%;
    position: fixed;
    z-index: 1000;
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
@media only screen and (max-width: 767px){
    .close-cart {
        right: 0;
        font-size: inherit
    }
}
</style>