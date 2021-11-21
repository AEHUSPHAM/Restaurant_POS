<template>
    <nav class="navbar-light bg-white">
        <div class="container py-3">
            <div class="row">
                <!-- Back button -->
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 text-start">
                    <a 
                        class="navbar-brand" 
                        @click="$router.go(-1)"
                    >
                        <button type="button" class="home-button">
                            <i class="fa fa-arrow-left home-icon"></i>
                        </button>
                        <span class="home-text">
                            &nbsp;&nbsp;Back
                        </span>
                    </a>
                </div>

                <!-- Home button -->
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 text-end">
                    <span class="home-text" style="text-align:right;">
                        Home
                    </span>
                    <router-link class="navbar-brand" to="/home">
                        <button type="button" class="home-button" style="float: right;">
                            <i class="fa fa-home home-icon"></i>
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>

    <div>
        <div class="modal-mask"
            :style="{
                'background-image': 'url(' + require('@/assets/misc/register_background.jpg') + ')',
            }"
        >
            <div class="modal-wrapper">
                <div class="modal-dialog" role="document">
                    <div class="modal-content rounded">
                        <!-- hedaer -->
                        <div class="modal-header">
                            <h2>Sign Up</h2>
                        </div>

                        <!-- body -->
                        <div class="modal-body">
                            <transition name="fade">
                                <div 
                                    v-if="alert_message" 
                                    class="alert"
                                    :class="alert_type"
                                    role="alert"
                                >
                                    {{ alert_message }}
                                </div>
                            </transition>
                            <form>
                                <div class="form-group ">
                                    <label for="email">Email address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        class="form-control"
                                        placeholder="Enter your email"
                                        v-model="email"
                                    />
                                </div>

                                <div class="form-group pwd">
                                    <label for="password">Password</label>
                                    <input 
                                        type="password"
                                        id="password"
                                        class="form-control"
                                        placeholder="Enter your password"
                                        v-model="password"
                                    />
                                </div>

                                 <div class="form-group pwd">
                                    <label for="password2">Confirm Password</label>
                                    <input 
                                        type="password"
                                        id="password2"
                                        class="form-control"
                                        placeholder="Re-enter your password"
                                        v-model="password2"
                                    />
                                </div>


                            </form>
                        </div>


                        <!-- footer -->
                        <div class="modal-footer">
                            <div class="container p-0">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <button 
                                            type="button"
                                            class="btn"
                                            @click="registerProcess"
                                        >
                                            <h5>Sign Up</h5>
                                        </button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-12 text-start">
                                        <router-link to="/login" class="login-link">
                                            Already have an account? Log in
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default {
    name: 'RegisterPage',
    data () {
        return {
            email: "",
            password: "",
            password2: "",
            alert_message: null,
            alert_type: null,
        }
    },
    methods: {
        registerProcess: function() {
            if (this.password.length < 6){
                this.showAlert('Password must contain at least 6 characters.', 'alert-warning')
                return
            }

            if (this.password !== this.password2){
                this.showAlert('The passwords you typed do not match', 'alert-warning')
                return
            }

            const auth = getAuth()

            createUserWithEmailAndPassword(auth, this.email, this.password) // need .value because ref()
            .then(() => {
                this.$router.push('/home') // redirect to home
            })
            .catch((error) => {
                this.showAlert('Error creating user: ' + error.message, 'alert-danger');
            });
        },
        showAlert: function(message, alert_type) {
            this.alert_type = alert_type
            this.alert_message = message

            const sleep = new Promise(resolve => setTimeout(resolve, 2000))
            sleep.then(() => {
                this.alert_type = null
                this.alert_message = null
            })
        },
    },
}
</script>



<style scoped>
/* alert transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.rounded {
    border-radius: 0.8em!important;
}

.modal-mask {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  background-size: cover;
  background-blend-mode: darken;
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-content {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 3%;
    padding-right: 3%;
}

.home-button {
    height: 100%;
    width: auto;
    margin-right: 1%;
    color: #ffffff;
    font-size: 150%;
    background: #2c3a57;
    border: none;
    border-radius:.70rem!important;
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;    
}

.home-text {
    font-weight: bold;
}

.modal-header {
    margin-top: 5%;
    padding-bottom: 0;
}

.modal-header h2 {
    font-weight: bold;
}

.modal-body .form-group {
    margin-top: 5%;
}

.modal-body label {
    float: left;
    font-weight: bold;
    margin-bottom: 2%;
}

.modal-footer {
    border: none;
    margin-top: 3%;
    margin-bottom: 8%;
}

.modal-footer button {
    width: 100%;
    margin-bottom: 5%;
    background-color: #ff0909;
    color: #ffffff;
    font-weight: bold;
    border-radius: .5em;
}

.modal-footer button h5 {
    margin-top: 2%;
    margin-bottom: 2%;
}

.login-link {
    text-decoration: none;
}

@media only screen and (max-width: 420px){
    .home-text {
        font-size: 14px;
        position: relative;
        bottom: 1px;
        margin-bottom: 0%;
    }
    .home-button {
        height: 29px;
        width: 29px;
        border-radius:.58rem!important;
    }
    .home-icon {
        font-size: 20px;
    }
    h2 {
        font-size: 22px;
    }
    label, .login-link  {
        font-size: 12px;
    }
    .modal-footer button h5 {
        font-size: 15px;
    }
}
@media only screen and (min-width: 421px) and (max-width: 575px){
    .home-text {
        font-size: 15px;
        position: relative;
        top: 1px;
        margin-bottom: 0%
    }
    .home-button {
        height: 32px;
        width: 32px;
        border-radius:.64rem!important;
    }
    .home-icon {
        font-size: 21px;
    }
    h2 {
        font-size: 24px;
    }
    label, .login-link  {
        font-size: 14px;
    }
    .modal-footer button h5 {
        font-size: 17px;
    }
}
@media only screen and (min-width: 576px) and (max-width: 767px){
    .home-text {
        font-size: 15px;
        position: relative;
        bottom: 1px;
        margin-bottom: 0%
    }
    .home-button {
        height: 29px;
        width: 29px;
        border-radius:.58rem!important;
    }
    .home-icon {
        font-size: 21px;
    }
    h2 {
        font-size: 26px;
    }
    label, .login-link  {
        font-size: 16px;
    }
    .modal-footer button h5 {
        font-size: 19px;
    }
}
@media only screen and (min-width: 768px) and (max-width: 991px){
    .home-text {
        font-size: 15px;
        position: relative;
        bottom: 1px;
        margin-bottom: 0%
    }
    .home-button {
        height: 29px;
        width: 29px;
        border-radius:.58rem!important;
    }
    .home-icon {
        font-size: 21px;
    }
    h2 {
        font-size: 26px;
    }
    label, .login-link  {
        font-size: 16px;
    }
    .modal-footer button h5 {
        font-size: 19px;
    }
}

@media only screen and (min-width: 992px) and (max-width: 1199px){
    .home-text {
        font-size: 17px;
        position: relative;
        top: 1px;
        margin-bottom: 0%
    }
    .home-button {
        height: 32px;
        width: 32px;
        border-radius:.64rem!important;
    }
    .home-icon {
        font-size: 23px;
    }
    h2 {
        font-size: 28px;
    }
    label, .login-link  {
        font-size: 16px;
    }
    .modal-footer button h5 {
        font-size: 21px;
    }
}
@media only screen and (min-width: 1200px){
    .home-text {
        font-size: 19px;
        position: relative;
        top: 4px;
        margin-bottom: 0%
    }
    .home-button {
        height: 35px;
        width: 35px;
        border-radius:.70rem!important;
    }
    .home-icon {
        font-size: 25px;
    }
     h2 {
        font-size: 30px;
    }
    label, .login-link  {
        font-size: 18px;
    }
    .modal-footer button h5 {
        font-size: 21px;
    }
}
</style>