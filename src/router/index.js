import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from 'firebase/auth'
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
            meta: {title: 'Home', requiresAuth: false},               //meta data 
            component: HomePage     //component corresponding to this page
        },
        {
            path: '/menu',
            name: 'Menu',
            meta: {title: 'Menu', requiresAuth: true},
            component: MenuPage
        },
        {
            path: '/payment/:order_id',
            name: 'Payment',
            meta: {title: 'Payment', requiresAuth: true},
            component: PaymentPage
        },
        {
            path: '/login',
            name: 'Login',
            meta: {title: 'Login', requiresAuth: false},
            component: LoginPage
        },
        {
            path: '/register',
            name: 'Register',
            meta: {title: 'Register', requiresAuth: false},
            component: RegisterPage
        }
    ]
});


//redirect user if user is not logged in and attempts to access the routes that require logging in
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const user = getAuth().currentUser //to check if user is logged in or not

    if (requiresAuth) {
        if (user){
            document.title = to.meta.title
            next()
        }else{
            next('/login')
        }
    } else {
        document.title = to.meta.title
        next()
    }
});


export default router;