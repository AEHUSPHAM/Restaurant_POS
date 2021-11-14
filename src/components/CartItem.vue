<template>

    <div class='cart-item'>
        <img v-bind:src="img_src" v-bind:alt="img_alt">
        <b style="margin-top: 20px;">
            <p style="float: left; color: #FF0000;"> {{id}}.</p>
            <p style="float: left">   {{text}}</p>
        </b>
        <br>
        <br>
        <div style="float: left; display: flex;">
            <button class="minus"><i class="fa fa-minus"></i></button>
            <p>{{in_cart}}</p>
            <button class="plus"><i class="fa fa-plus"></i></button>
        </div>
        <div class="price">
            <b><p>{{price}}</p></b>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    props: {
        text: {
            type: String,
            default: ""
        },
        id: {
            type: Number,
            default: -1
        },
        img_src: {
            type: String,
            default: ""
        },
        img_alt: {
            type: String,
            default: ""
        },
        in_cart: {
            type: Number,
            default: 1
        },
        price: {
            type: String, 
            default: "Unknown"
        },
    },
}
</script>

<style scoped>
img {
    float: left;
    margin-left: 3%;
    margin-top: 1%;
    height: 80%;
    width: 20%;
    border-radius: 10px;
    margin-right: 3%;

}

.minus {
    float: left;
    display: flex;
    color: #000000;
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius:.45rem!important;
    height: 30px;
    width: 30px;
    justify-content: center;
    align-items: center;
    margin-top:-3px;
    margin-right: 25px; 
}

.plus {
    float: left;
    display: flex;
    color: #ff0000;
    background-color: #ffffff;
    border: 1px solid #ff0000;
    border-radius:.45rem!important;
    height: 30px;
    width: 30px;
    justify-content: center;
    align-items: center;
    margin-top:-3px;
    margin-left: 25px; 
}

.price {
    color: #ff0000;
    float: right;
    margin-right: 2%
}
.cart-item {
    border: 1px solid #dbd2d2;
    border-radius: 10px;
    margin-left: 2.5%;
    margin-bottom: 5px;
    padding-top: 2%;
    width: 95%;
    height: 100px;
    float: left;
}
</style>