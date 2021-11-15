import { createRouter, createWebHistory } from 'vue-router'
import MenuPage from '@/router/MenuPage.vue'
import HomePage from '@/router/HomePage.vue'
import menu_store from '@/stores/menu_store.js';
import { fetchMenu, fetchTags } from '@/mixins/menu.js';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',          //path of the page
            alias: ['/home'],   //alternative paths
            name: 'Home',       //name of the page 
            meta: {title: 'Home'},  //tab title displayed
            component: HomePage     //component corresponding to this page
        },
        {
            path: '/menu',
            name: 'Menu',
            meta: {title: 'Menu'},
            component: MenuPage
        }
    ]
});


//navigation guard
router.beforeEach((to, from, next) => {
    //fetch the data before entering the Menu page
    if (to.name === "Menu"){
        const menu = fetchMenu()
        const tags = fetchTags()

        Promise.allSettled([menu, tags]).then((values) => {
            menu_store.commit("setMenu", values[0])
            menu_store.commit("setTags", values[1])
            next()
        })
    }else{
        next()
    }
})


export default router;