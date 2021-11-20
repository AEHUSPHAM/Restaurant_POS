import { createStore } from 'vuex'


export default createStore({
    state: {
        confirmed_orders: {},     //list of confirmed orders
    },
    mutations: {
        addOrder(state, order){
            state.confirmed_orders[order.order_id] = order 
        },
        removeOrder(state, order_id){
            if (state.confirmed_orders[order_id] !== undefined){
                delete state.confirmed_orders[order_id]
            }
        }
    },
    getters: {
        getOrder: (state) => (order_id) => {
            return state.confirmed_orders[order_id]
        },
        isValidOrder: (state) => (order_id) => {
            //check if this order exists
            //TODO: double check with back-end
            return state.confirmed_orders[order_id] !== undefined
        } 
    }
})