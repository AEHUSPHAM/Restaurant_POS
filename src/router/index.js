import { createRouter, createWebHistory } from 'vue-router'
import MenuPage from '@/router/MenuPage.vue'
import HomePage from '@/router/HomePage.vue'


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

export default router;