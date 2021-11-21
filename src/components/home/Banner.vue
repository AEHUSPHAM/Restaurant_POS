<template>
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="7000">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="dark-overlay">
                    <img class="d-block w-100" src="@/assets/banner/banner1..jpg" alt="Slide 1">
                </div>
                
                <div class="container">
                    <div class="jumbotron" id="caption">
                        <h1 class="display-4">Welcome !</h1>
                        <hr>
                        <h4>Life is sweeter with a little cake.</h4>
                        <router-link class="btn btn-primary btn-lg shadow-sm" to="/menu" role="button">
                            <h5>Order now</h5>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="dark-overlay">
                    <img class="d-block w-100" src="@/assets/banner/banner2.jpg" alt="Slide 2">
                </div>
                    
                <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

                <div class="container">
                    <div class="jumbotron" id="caption">
                        <h1>Box of pleasure</h1>
                        <hr>
                        <h4>Sweet, Fun For The Whole Family.</h4>
                        <router-link class="btn btn-primary btn-lg" to="/menu" role="button">
                            <h5>Order now</h5>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="dark-overlay">
                    <img class="d-block w-100" src="@/assets/banner/banner3.jpg" alt="Slide 3">
                </div>
                    
                <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

                <div class="container">
                    <div class="jumbotron" id="caption">
                        <h1>Merry Christmas</h1>
                        <hr>
                        <h4>
                            We hope you have a wonderful holiday season with our desserts.
                        </h4>
                        <router-link class="btn btn-primary btn-lg" to="/menu" role="button">
                            <h5>Order now</h5>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner',
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Karla:wght@200;300&family=Mali:wght@300&family=Ubuntu+Mono&display=swap');
    
    .carousel-item{
        height:100vh;
        background-repeat: no-repeat;
        background-size: 100%, 100%;
        position: relative;
        color: rgb(253, 253, 253);
    }

    .container{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding-bottom: 30vh;
    }

    h1{
        font-family: 'Dancing Script', cursive;
    }
    h4 {
        margin-bottom: 0;
        font-family: 'Karla', sans-serif;
    }
    h5 {
        margin-bottom: 0;
        font-family: 'Karla', sans-serif;
        font-weight: bold;
    }
    .carousel-inner{
        background-color: white;
    }

    #caption{
        line-height: 15vh;
        position: relative;
        padding-top: 75%;
    }
    .dark-overlay{
        width: 100vw;
        height: 100vh;
    }
    .btn {
        background-color: #ff0909;
        border-color: #ff0909;
    }
    .dark-overlay:after {
        content:"";
        display:block;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background:rgba(0,0,0,0.5);
    }
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    @media only screen and (max-width: 420px){
        h1 {
            font-size: 15vw;
        }
        h4 {
            font-size: 5vw;
        }
        h5 {
            font-size: 6vw;
        }
       
    }
    @media only screen and (min-width: 421px) and (max-width: 575px){
        h1 {
            font-size: 16vw;
        }
        h4 {
            font-size: 4vw;
        }
        h5 {
            font-size: 5vw;
        }
    }
    @media only screen and (min-width: 576px) and (max-width: 767px){
       h1 {
            font-size: 15vw;
        }
        h4 {
            font-size: 3vw;
        }
        h5 {
            font-size: 4vw;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 991px){
       h1 {
            font-size: 12vw;
        }
        h4 {
            font-size: 2vw;
        }
        h5 {
            font-size: 2.5vw;
        }
    }
    @media only screen and (min-width: 992px) and (max-width: 1199px){
       h1 {
            font-size: 12vw;
        }
        h4 {
            font-size: 2vw;
        }
        h5 {
            font-size: 2.5vw;
        }
    }
    @media only screen and (min-width: 1200px){
        h1 {
            font-size: 12vw;
        }
        h4 {
            font-size: 2vw;
        }
        h5 {
            font-size: 2vw;
        }
    }
</style>