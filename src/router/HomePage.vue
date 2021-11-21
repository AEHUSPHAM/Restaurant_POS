<template>
    <!-- Navigation -->
    <nav style="display: block" class="navbar navbar-expand-lg bg-dark navbar-dark" id="bar">
        <div class="container">
            <router-link class="navbar-brand" to="/home" id="link">
                Home Page
            </router-link>
            <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navmenu"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
        
        <div class="collapse navbar-collapse" id="navmenu">

            <ul class="nav nav-pills navbar-nav ms-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/menu">Menu</router-link>
                </li>
                <li class="nav-item" v-if="!logged_in">
                    <router-link class="nav-link" aria-current="page" to="/login">Log In</router-link>   
                </li>
                <li class="nav-item" v-if="logged_in">
                    <a class="nav-link" aria-current="page" @click="logOut">Log Out</a>   
                </li>
            </ul>
        </div>
        
        </div>
    </nav>

    <!-- Banner -->
    <Banner/>
    
</template>


<script>
import Banner from '@/components/home/Banner.vue'
import { getAuth, signOut } from 'firebase/auth'


export default {
    name: 'HomePage',
    components: {
        Banner,
    },
    data() {
        return {
            logged_in: getAuth().currentUser? true: false,
        }
    },
    methods: {
        logOut: function(){
            const auth = getAuth()

            if (auth.currentUser){
                signOut(auth).then(() => {
                    this.logged_in = false
                })
            }
        }
    }
}
</script>


<style scoped>
@media only screen and (min-width: 320px) and (max-width: 500px){
#link{
        font-size: 1.1rem;
    }
}
.nav-pills > li > a:hover {
    background-color: #5a5858 !important;
    border-radius: 5px;
    padding: 7px 20px;
}
li{
    padding: 0 10px;
}
</style>
