import { createStore } from 'vuex'


//The VueX store object used for MenuPage
export default createStore({
    state: {
        menu_items: null,
        tag_list: null
    },
    mutations: {
        setMenu (state, menu_items) {
            state.menu_items = menu_items
        },
        setTags (state, tag_list) {
            state.tag_list = tag_list
        }
    },
    getters: {
        getMenu: (state) => () => {
            return state.menu_items
        },
        getTags: (state) => () => {
            return state.tag_list
        }
    }

})