import { createStore } from 'vuex'
import { formatMoney } from '@/mixins/menu.js'


//The VueX store object used for MenuPage
export default createStore({
    state: {
        menu_items: null,
        tag_list: null,
        ids: [],
        cart: [],    //array of selected items
        total_amount: 0,    //amount of items (an item can be ordered many times)
        total_money: 0,
        cart_active: false,
        show_loading: false,
    },
    //changes made to the store state should be committed to ensure reactivity
    mutations: {
        resetCart (state) {
            state.ids = []
            state.cart = []
            state.total_amount = 0
            state.total_money = 0
        },
        setMenu (state, menu_items) {
            state.menu_items = menu_items
        },
        setTags (state, tag_list) {
            state.tag_list = tag_list
        },  
        addToCart(state, new_item) {
            const item_index = state.ids.indexOf(new_item.id)
            if (item_index === -1){
                //item has not been added
                state.cart.push(new_item)
                state.ids.push(new_item.id)
            }else{
                //item has been added
                state.cart[item_index].in_cart += 1
            }

            state.total_amount += 1
            state.total_money += new_item.item_price
        },
        removeFromCart(state, index) {
            state.total_money -= state.cart[index].total_price * state.cart[index].in_cart
            state.total_amount -= state.cart[index].in_cart
            state.cart.splice(index, 1)
            state.ids.splice(index, 1)
        },
        increaseItemQuantity(state, index) {
            state.cart[index].in_cart += 1
            state.total_amount += 1
            state.total_money += state.cart[index].total_price
        },
        decreaseItemQuantity(state, index) {
            state.cart[index].in_cart -= 1
            state.total_amount -= 1
            state.total_money -= state.cart[index].total_price
        },
        toggleTopping(state, payload) {
            const item_index = payload.item_index
            const topping_name = payload.topping_name
            const item = state.cart[item_index]
            const index = item.selected_toppings.indexOf(topping_name)

            if (index === -1){
                //add topping
                const topping_price = item.toppings[topping_name]
                item.selected_toppings.push(topping_name)
                item.total_price += topping_price
                state.total_money += topping_price * item.in_cart
            }else{
                //remove topping
                const topping_price = item.toppings[topping_name]
                item.selected_toppings.splice(index, 1)
                item.total_price -= topping_price
                state.total_money -= topping_price * item.in_cart
            }
        },
        toggleCart(state) {
            state.cart_active = !state.cart_active
        },
        startLoading(state) {
            //display the loading modal
            state.show_loading = true
        },
        endLoading(state) {
            //stop showing loading modal
            state.show_loading = false
        }
    },
    getters: {
        getMenu: (state) => () => {
            return state.menu_items
        },
        getTags: (state) => () => {
            return state.tag_list
        },
        getTotalMoney: (state) => () => {
            //return the total amount of money in form of VND
            return formatMoney(state.total_money)
        },
        getOrder: (state) => () => {
            const cart = []
            state.cart.forEach((item) => {
                cart.push({
                    id: item.id,
                    in_cart: item.in_cart,
                    selected_toppings: item.selected_toppings.slice()
                })
            })
            return {
                cart: cart
            }
        }
    }
})