import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { initializeApp } from "firebase/app";


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA3Eyvit23DrPwlHcPuEWBhde1tXN4OC28",
    authDomain: "restaurant-pos-group6.firebaseapp.com",
    projectId: "restaurant-pos-group6",
    storageBucket: "restaurant-pos-group6.appspot.com",
    messagingSenderId: "304246336895",
    appId: "1:304246336895:web:76f4c1b299c989cdd17e4a",
    measurementId: "G-QEY883R4DX"
};
initializeApp(firebaseConfig);


createApp(App).use(router).mount('#app')




