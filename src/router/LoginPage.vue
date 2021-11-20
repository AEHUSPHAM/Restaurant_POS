<template>
    <div class="big-boss">

        <div class="inner-block bodyy box vertical-center" >
            <form>
                <h1>Sign In</h1>

                <div class="form-group ">
                    <label>Email address</label>
                    <input type="email" class="form-control " v-model="email" />
                </div>

                <div class="form-group pwd">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model="password" autocomplete="on"/>
                </div>
                <button type="button" class=" btn btn-lg btn-block log" @click="loginProcess">Log In</button>
                <button type="button" class="signup btn btn-lg btn-block log" @click="registerRedirect">Register</button>

            </form>
        </div>

    </div>
</template>

<script>
export default {
    name: 'LogIn',
    data() {
        return {
            email: "",
            password: ""
        }
    },
}
</script>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router' // import router


const email = ref('')
const password = ref('')
const router = useRouter()// get a reference to our vue router
const auth = getAuth();
const register = () => {
    router.push('/register');
}
// eslint-disable-next-line no-unused-vars
const login = () => {
    
}
</script>


<style scoped>
.big-boss{
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("https://p4.wallpaperbetter.com/wallpaper/375/903/748/dessert-4k-download-wallpaper-preview.jpg");
    min-height: 100vh;
    display: flex;
    font-weight: 800;

}
.vertical-center {
    display: flex;
    text-align: left;
    justify-content: center;
    flex-direction: column;
}
@media only screen and (min-width: 300px) and (max-width: 500px) {
    .inner-block {
        width: 300px;
        height: 100px;
        margin: auto;


        box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
        padding: 40px 55px 45px 55px;
        border-radius: 15px;
        transition: all .3s;
    }
    .btn{
        margin-top:20px;
        background: wheat;
        width: 100px;
        height: 40px;
        font-size: medium;
    }
    .signup{
        width:100px
    }
    label{
        font-size: smaller;
    }
}
@media only screen and (min-width: 500px) and (max-width: 800px) {
    .inner-block {
        width: 400px;
        height: 100px;
        margin: auto;
        box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
        padding: 40px 55px 45px 55px;
        border-radius: 15px;
        transition: all .3s;
    }
    .btn{
        margin-top:20px;
        background: wheat;
        width: 100px;
        height: 50px;
    }
    .signup{
        width:110px;
        margin-left: 10px;
    }
}
@media only screen and (min-width: 800px)and (max-width: 2000px) {
    .inner-block {
        width: 450px;
        height: 100px;
        margin: auto;

        box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
        padding: 40px 55px 45px 55px;
        border-radius: 15px;
        transition: all .3s;
    }
    .btn{
        margin-top:20px;
        background: wheat;
        width: 100px;
        height: 50px;
    }
    .signup{
        margin-left: 10px;
        width: 125px;
    }
}
h1{
    color: wheat;
    font-weight: bold;
}
.btn{
    margin-top:20px;
    background: wheat;
}
.pwd{
    margin-top: 10px
}
label{
    color:wheat;
}
.log{
    color: dimgrey;
    font-weight: bold;
}

</style>
