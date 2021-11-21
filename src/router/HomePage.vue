<template>
    <!-- Navigation -->
    <nav style="display: block" class="navbar navbar-expand-lg bg-dark navbar-dark" id="bar">
        <div class="container">
            <router-link class="navbar-brand" to="/home" id="logo">
                <img :src="require('@/assets/logo.png')">
                <a>Home</a>
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
import swal from 'sweetalert'
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
                swal({
                    title: 'Sign out?',
                    text: 'Are you sure you want to sign out?',
                    buttons: true,
                    icon: 'info',
                })
                .then((option) => {
                    if (option){
                        signOut(auth).then(() => {
                            this.logged_in = false
                            swal({
                                title: 'Signed out successfully',
                                icon: 'success',
                            })
                        }).catch((error) => {
                            swal({
                                title: 'Error signing out: ' + error,
                                icon: 'error',
                            })
                        })
                    }
                })
               
            }
        }
    }
}
</script>


<style scoped>
#logo img{
    height: 3vw;
    width: 3vw;
    margin-right: 20%;
}
.nav-pills > li > a {
    font-size: 1.0rem;
}
.nav-pills > li > a:hover {
    background-color: #5a5858 !important;
    border-radius: 5px;
    padding: 7px 20px;
    color: #ffffff;
}
li{
    padding: 0 10px;
}
</style>
