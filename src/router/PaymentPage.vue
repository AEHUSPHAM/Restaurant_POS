<template>
    <nav class="navbar-light bg-white">
        <div class="container py-3">
            <div class="row">
                <!-- Back button -->
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 text-start">
                    <a 
                        class="navbar-brand" 
                        @click="$router.go(-1)"
                    >
                        <button type="button" class="home-button"><i class="fa fa-arrow-left home-icon"></i></button>
                    </a>
                </div>

                <!-- PAYMENT text -->
                <div class="col-lg-8 col-xl-8 col-md-6 col-sm-4 col-4">
                    <span class="home-text bold-text title">PAYMENT</span>
                </div>

                <!-- Home button -->
                <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-4 text-end">
                    <router-link class="navbar-brand" to="/home">
                        <button type="button" class="home-button" style="float: right;">
                            <i class="fa fa-home home-icon"></i>
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>

    <!-- Payment box -->
    <div class="container payment-wrapper">
        <!-- row 1 -->
        <div class="row">
            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9 text-start">
                <p class="home-text bold-text"> Your order </p>
                <a 
                    class="home-text view-order-link"
                    @click="showOrder"
                > 
                    {{ order.cart.length }} items (view order) 
                </a>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-end">
                <p class='bold-text home-text'> {{ formatMoney(order.total_money) }} </p>
                <p class='home-text'> Total Cost </p>
            </div>
        </div>

        <!-- row 2 -->
        <div class="row bg-white p-auto py-3 mt-4">
            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-6 text-start home-text m-auto">
                <span class='bold-text'> Credit card </span>
                <span class='d-sm-inline d-none '> - Credit or debit </span>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-4 text-end m-auto">
                <i class='fa fa-cc-visa'></i>
                <i class='fa fa-cc-mastercard'></i>
            </div>
        </div>
 
        <!-- row 3: form -->
        <div class = "row bg-white mt-5 mx-2 " >
            <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-2 py-2" >
                <i class="fa fa-2x fa-credit-card "></i>
            </div>
            <!-- Insert card number -->
            <div class="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-10 text-start">
                <div class="container">
                    <div class = "row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 home-text">
                            Card number
                        </div>
                    </div>
                    <div class = "row my-1">
                        <form class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <input type="text" class="payment-input" id="card-number">
                        </form>
                    </div>
                </div>
            </div>
        </div>



        <!-- row 4: insert MMYY - CVV -->
        <div class="row mt-4 mx-2">
            <!-- Insert MM/YY -->
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-start ps-sm-0 pe-sm-1">
                <div class="container-fluid py-1 bg-white">
                    <div class = "row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 home-text">
                            MM/YY
                        </div>
                    </div>
                    <div class = "row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-1">
                            <form>
                                <input type="text" class="payment-input" id="mm-yy">
                            </form>  
                        </div>
                    </div>
                </div>
            </div>
            <!-- Insert CVV -->
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-start ps-sm-1 pe-sm-0">
                <div class="container-fluid py-1 bg-white mt-3 mt-sm-0">
                    <div class = "row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 home-text">
                            CVV
                        </div>
                    </div>
                    <div class = "row mt-1 ">
                        <div class="col-xl-10 col-lg-10 col-md-10 col-sm-9 col-9 ">
                            <form>
                                <input type="text" class="payment-input" id="cvv">
                            </form>  
                        </div>
                        <button class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-3 question-button p-0">
                            <i class="fa fa-lg fa-question-circle"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Row 5: Confirm payment button -->
        <div class="row mt-3 mx-2 align-items-center" style="padding-top:5%;">
            <button 
                type="button" 
                class = "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 shadow-sm confirm-button"
                @click="confirmPayment"
            >
                <span class='home-text bold-text'>
                PAY {{ formatMoney(order.total_money) }}
                </span>
            </button>
        </div>
        <!-- Row 6: Cancel payment button -->
        <div class="row mt-4 mx-2 align-items-center">
            <button 
                type="button" 
                class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 shadow-sm home-text bold-text cancel-button"
                @click="cancelPayment"
            >
                <span class='home-text bold-text'>
                    Cancel Payment
                </span>
            </button>
        </div>
    </div>

    <OrderModal v-bind:order="order"/>
    <LoadingModal/>
</template>


<script>
import OrderModal from '@/components/payment/OrderModal.vue'
import LoadingModal from '@/components/LoadingModal.vue'
import order_store from '@/stores/order_store.js'
import swal from 'sweetalert'
import { formatMoney } from '@/mixins/menu.js'
import { confirmPayment, cancelPayment } from '@/mixins/order.js'


export default {
    name: 'PaymentPage',
    components: {
        OrderModal,
        LoadingModal,
    },
    data () {
        return {
            order: order_store.getters.getOrder(this.$route.params.order_id),
            resolved: false,
        }
    },
    methods: {
        confirmPayment: function() {
            //send confimration to back-end
            this.emitter.emit("startLoading")
            
            confirmPayment(this.order.order_id).then((response) => {
                this.emitter.emit("endLoading")
                const data = response.data

                if (data.status === 'success'){
                    //the payment succeeded
                    order_store.commit("removeOrder", this.order.order_id)
                    swal({
                        title: 'Payment confirmed successfully!',
                        icon: 'success',
                    }).then(() => {
                        this.resolved = true
                        this.$router.push('/menu')
                    })
                }else{
                    swal({
                        title: 'Error confirming payment: ' + data.message,
                        icon: 'error',
                    })
                }
            })
        },
        cancelPayment: function() {
            swal({
                title: 'Are you sure you want to cancel this order?',
                text: 'If you click OK, this order will be discarded.',
                icon: 'warning',
                buttons: true,
                dangerMode: true,
            })
            .then((option) => {
                if (option){
                    this.emitter.emit("startLoading")

                    cancelPayment(this.order.order_id).then((response) => {
                        this.emitter.emit("endLoading")
                        const data = response.data

                        if (data.status === 'success'){
                            //order is cancelled successfully
                            order_store.commit("removeOrder", this.order.order_id)
                            swal({
                                title: 'Order cancelled successfully!',
                                icon: 'success'
                            }).then(() => {
                                this.resolved = true
                                this.$router.push('/menu')
                            })
                        }else{
                            swal({
                                title: 'Error cancelling the order: ' + data.message,
                                icon: 'error',
                            })
                        }
                    })
                }
            })
        },
        showOrder: function() {
            this.emitter.emit("showOrder")
        },
        formatMoney,
    },
    beforeRouteUpdate(to, from, next) {
        //check if the order id is valid before proceeding
        const order_id = to.params.order_id

        if (order_store.getters.isValidOrder(order_id)){
            next()
        }else{
            next('/home')
        }
    },
    beforeRouteEnter(to, from, next) {
        //check if the order id is valid before proceeding
        const order_id = to.params.order_id

        if (order_store.getters.isValidOrder(order_id)){
            next()
        }else{
            next('/home')
        }
    },
    beforeRouteLeave(to, from, next) {
        //warn user if they want to leave when order is not resolved
        if (this.resolved){
            next()
        }else{
            swal({
                title: 'Are you sure you want to leave?',
                text: 'If you leave now, your order will be cancelled.',
                icon: 'warning',
                buttons: true,
                dangerMode: true
            })
            .then((option) => {
                if (option){
                    //cancel the order and leave this page
                    this.emitter.emit("startLoading")
                    cancelPayment(this.order.order_id).then((response) => {
                        this.emitter.emit("endLoading")
                        const data = response.data

                        if (data.status === 'success'){
                            //order is cancelled successfully
                            order_store.commit("removeOrder", this.order.order_id)
                            swal({
                                title: 'Order cancelled successfully!',
                                icon: 'success'
                            }).then(() => {
                                next()
                            })
                        }else{
                            swal({
                                title: 'Error cancelling the order: ' + data.message,
                                icon: 'error'
                            }).then(
                                next(false)
                            )
                        }
                    })
                }else{
                    //continue to stay on this page
                    next(false)
                }
            })
        }
    }
}
</script>

<style scoped>
.title {
    font-weight: bold;
    font-size: 20px;
}
.view-order-link {
    color: #4ed185;
    text-decoration: none;
}
.view-order-link:hover {
    text-decoration: underline;
}
.payment-input {
   border: none; 
   width:100%; 
   outline: none;
}
.cancel-button {
    height: 50px;
    border: none;
    background: #ffffff;
}
.question-button {
    background: none;
    color: none;
    border: none;
}
.question-button i {
    float: right;
}
.confirm-button {
    padding-bottom: 2%;
    height: 50px;
    border: none;
    background:#2ECC71;
}
.bold-text {
    font-weight: bold;
    color: #2c3a57;
}
.gray-text {
    font-weight: bold;
    color: rgb(112, 107, 107);
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

@media only screen and (max-width: 420px){
    .payment-wrapper {
        margin: 10% 10% 20% 10%;
        height: 100px;
        width: 80%;
    }
    .home-text {
        font-size: 12px;
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
        font-size: 21px;
    }
    .title {
        font-size: 17px;
        position:relative;
        top:5px;
    }
}
@media only screen and (min-width: 421px) and (max-width: 575px){
    .payment-wrapper {
        margin: 10% 10% 20% 10%;
        height: 200px;
        width: 80%;
    }
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
        font-size: 23px;
    }
    .title {
        font-size: 19px;
        position:relative;
        top:5px;
    }
}
@media only screen and (min-width: 576px) and (max-width: 767px){
    .payment-wrapper {
        margin: 10% 20% 20% 20%;
        height: 200px;
        width: 60%;
    }
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
    .title {
        font-size: 19px;
        position:relative;
        top:5px;
    }
}
@media only screen and (min-width: 768px) and (max-width: 991px){
    .payment-wrapper {
        margin: 10% 25% 20% 25%;
        height: 200px;
        width: 50%;
    }
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
    .title {
        font-size: 19px;
        position:relative;
        top:5px;
    }
}

@media only screen and (min-width: 992px) and (max-width: 1199px){
    .payment-wrapper {
        margin: 10% 30% 20% 30%;
        height: 200px;
        width: 40%;
    }
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
    .title {
        font-size: 23px;
        position:relative;
        top:2px;
    }
}
@media only screen and (min-width: 1200px){
    .payment-wrapper {
        margin: 5% 33% 20% 33%;
        height: 200px;
        width: 34%;
    }
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
    .title {
        font-size: 25px;
    }
}
</style>
