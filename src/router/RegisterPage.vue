<template>
    <div class="big-boss">

        <div class="inner-block bodyy box vertical-center" >
            <form>
                <h1>Sign Up</h1>
                <div class="form-group ">
                    <label>First name</label>
                    <input type="text" class="form-control " />
                </div>

                <div class="form-group ">
                    <label>Last name</label>
                    <input type="text" class="form-control " />
                </div>

                <div class="form-group ">
                    <label>Email address</label>
                    <input type="email" class="form-control " v-model="email" />
                </div>

                <div class="form-group pwd">
                    <label>Password</label>
                    <input type="password" class="form-control" v-model="password" autocomplete="on"/>

                </div>

                <button type="button" class="btn btn-lg btn-block log" @click="login">Log In</button>
                <button type="button" class="signup btn btn-lg btn-block log" @click="register">Sign Up</button>
<!--                <div v-if="error" class="alert alert-danger">{{error}}</div>-->
            </form>
        </div>

    </div>
</template>

<script>

export default {
    name: 'register',
    data() {
        return {
            email: "",
            password: "",
            error: "val"
        }
    },
    method:{
        // alertt(tmp){
        //         this.error=tmp;
        // }
    }
}
</script>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router' // import router
const email = ref('')
const password = ref('')
email.value="huy";
console.log(email.value);
const router = useRouter()// get a reference to our vue router
const auth = getAuth();
const login = ()=>{
    router.push('/login');
}
// eslint-disable-next-line no-unused-vars
const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value) // need .value because ref()
            .then((data) => {
                console.log('Successfully registered!');
                router.push('/menu') // redirect to the feed
            })
            .catch(error => {
                console.log(error.code);
                alert(error.message);
            });
}
</script>

<style scoped>
.signup{
    margin-left: 10px;
}
.bodyy{
//background-image:    !important; min-height: 50vh;
    display: flex;
    font-weight: 800;
    background: hsla(0, 0%, 15%, 0.50);
//z-index: -1;
//opacity: 0.2;
}

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
        height: 250px;
        margin: auto;


        box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
        padding: 0px 30px 0px 30px;
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
    input{
        height:30px;
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
