import { createStore } from 'vuex'


//The VueX store object used for MenuPage
export default createStore({
    state: {
        menu_items: null,
        tag_list: null,
        cart: [],    //array of selected items
        total_money: 0
    },
    //changes made to the store state should be committed to ensure reactivity
    mutations: {
        setMenu (state, menu_items) {
            state.menu_items = menu_items
        },
        setTags (state, tag_list) {
            state.tag_list = tag_list
        },
        addToCart(state, new_item) {
            state.cart.push(new_item)
        },
        removeFromCart(state, index) {
            state.total_money -= state.cart[index].item_price * state.cart[index].in_cart
            state.cart.splice(index, 1)
        },
        increaseItemQuantity(state, index) {
            state.cart[index].in_cart += 1
            state.total_money += state.cart[index].item_price
        },
        decreaseItemQuantity(state, index) {
            state.cart[index].in_cart -= 1
            state.total_money -= state.cart[index].item_price
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
            return state.total_money.toLocaleString(
                'en-VN', 
                {
                    style: 'currency',
                    currency: 'VND',
                    minimumFractionDigits: 0
                }
            )
        }
    }

})