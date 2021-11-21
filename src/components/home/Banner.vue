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
                        <hr class="my-4">
                        <p>Life is sweeter with a little cake.</p>
                        <p class="lead">
                            <router-link class="btn btn-primary btn-lg" to="/menu" role="button">
                                Order now
                            </router-link>
                         </p>
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
                        
                        <h1 class="display-4">Box of pleasure</h1>
                        <hr class="my-4">
                        <p>Sweet, Fun For The Whole Family.</p>
                        <p class="lead">
                            <router-link class="btn btn-primary btn-lg" to="/menu" role="button">
                                Order now
                            </router-link>
                         </p>
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
                    
                        <h1 class="display-4">Merry Christmas</h1>
                        <p class="lead">We hope you have a wonderful holiday season with our desserts.</p>
                        <hr class="my-4">
                        <p class="lead">
                            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                         </p>
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
        padding-bottom: 20vh;
    }

    h1{
        font-size: 8vw;
        font-family: 'Dancing Script', cursive;
    }

    p{
        font-size: 2vw;
        font-family: 'Karla', sans-serif;
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
</style>