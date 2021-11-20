import { createRouter, createWebHistory } from 'vue-router'
import MenuPage from '@/router/MenuPage.vue'
import HomePage from '@/router/HomePage.vue'
import PaymentPage from '@/router/PaymentPage.vue'
import LoginPage from '@/router/LoginPage.vue'
import RegisterPage from '@/router/RegisterPage.vue'


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
        },
        {
            path: '/payment/:order_id/',
            name: 'Payment',
            meta: {title: 'Payment'},
            component: PaymentPage
        },
        {
            path: 'login/',
            name: 'Login',
            meta: {title: 'Login'},
            component: LoginPage
        },
        {
            path: 'register/',
            name: 'Register',
            meta: {title: 'Register'},
            component: RegisterPage
        }
    ]
});


export default router;