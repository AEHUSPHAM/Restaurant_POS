<template>
  
    <div id="myCarousel" class="carousel slide" data-ride="carousel" data-pause="">
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
          
          <!-- <div class="carousel-caption d-md-block" id="caption">
              <h1>Example headline.</h1>
            <p>Some content for the first slide of the carousel.</p>
            <p><router-link class="btn btn-lg btn-dark" to="#" id="button">Sign up today</router-link></p>

            
          </div> -->
          <div class="jumbotron" id="caption">
            <h1 class="display-4">Welcome !</h1>
            <hr class="my-4">
            <p>Life is sweeter with a little cake.</p>
            <p class="lead">
              <a class="btn btn-primary btn-lg" href="#" role="button">Order now</a>
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
              <a class="btn btn-primary btn-lg" href="#" role="button">Order now</a>
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
        height: 44.05rem;
        position: relative;
        color: rgb(253, 253, 253)
    }

    .container{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding-bottom: 50px;
    }

    h1{
      font-size: 9.5rem;
      font-family: 'Dancing Script', cursive;
    }

    p{
      font-size: 2rem;
      font-family: 'Karla', sans-serif;
    }
    
    .carousel-inner{
      background-color: white;
    }

    #caption{
      line-height: 7rem;
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
    @media only screen and (min-width: 320px) and (max-width: 360px){
      h1{
        font-size: 1.1rem;
      }
      p{
        font-size: 0.75rem;
      }
      
      .container{
        position: relative;
        bottom: 0;
        left: 0;
        right: 0;
        padding-bottom: 40px;
      }
      
      #button{
        line-height: 0.75rem;
        font-size: 0.75rem;
      }
      .carousel-item{
        height: 11rem;
        background: white;
        position: relative;
        color: rgb(253, 253, 253)
      }
      #caption{
        line-height: 5rem;
        height: 11rem;
      }
    }
    /* .carousel-item:after {
      content:"";
      display:block;
      position:absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
      background:rgba(0,0,0,0.3);
    } */
    @media only screen and (min-width: 360px) and (max-width: 415px){
      h1{
        font-size: 1.1rem;
      }
      p{
        font-size: 0.75rem;
      }
      .text{
      margin-left: 15px;
      margin-right: 15px;
      }
      .container{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding-bottom: 40px;
      }
      .carousel-item >img{
        background: rgba(0,0,0,0.5)
      }
      #button{
        line-height: 0.75rem;
        font-size: 0.75rem;
      }
      .carousel-item{
        height: 12.5rem;
        background: white;
        position: relative;
        color: rgb(253, 253, 253)
      }
      #caption{
        line-height: 5rem;
        height: 12.5rem;
      }
    }
    @media only screen and (min-width: 415px) and (max-width: 420px){
        .carousel-item{
        height: 15rem;
        background: #777;
        position: relative;
        color: rgb(253, 253, 253)
        }
        #caption{
        line-height: 1rem;
        padding-top: 20px;
        }
        h1{
        font-size: 3rem;
        }
        p{
          font-size: 1rem;
        }
    }
    @media only screen and (min-width: 421px) and (max-width: 575px){
       .carousel-item{
        height: 15rem;
        background: #777;
        position: relative;
        color: rgb(253, 253, 253)
      }
      #caption{
        line-height: 1.75rem;
        padding-top: 30px;
      }
        h1{
        font-size: 2.5rem;
        }
        p{
          font-size: 1rem;
        }
       .btn{
        padding:4px 9px;
        font-size:90%;
        } 
    }
    @media only screen and (min-width: 576px) and (max-width: 767px){
        .carousel-item{
        height: 20rem;
        background: #777;
        position: relative;
        color: rgb(253, 253, 253)
    }
    #caption{
        line-height: 1.5rem;
        padding-top: 25px;
      }
      h1{
        font-size: 4.5rem;
        }
        p{
          font-size: 1.25rem;
        }
        .btn{
        padding:4px 9px;
        font-size:80%;
        } 
    }
    @media only screen and (min-width: 768px) and (max-width: 991px){
        .carousel-item{
        height: 27rem;
        background: #777;
        position: relative;
        color: rgb(253, 253, 253)
    }
    #caption{
        line-height: 5rem;
        height: 27rem;
        padding-top: 100px;
      }
      h1{
        font-size: 6rem;
        }
        p{
          font-size: 1.25rem;
        }
    }
    @media only screen and (min-width: 992px) and (max-width: 1199px){
        .carousel-item{
        height: 30rem;
        background: #777;
        position: relative;
        color: rgb(253, 253, 253)
    }
    #caption{
        line-height: 4.5rem;
        height: 30rem;
        padding-top: 150px;
      }
      h1{
        font-size: 7rem;
        }
        p{
          font-size: 1.5rem;
        }
    }
    @media only screen and (min-width: 1200px) and (max-width: 1300px){
        .carousel-item{
        height: 42rem;
        background: #777;
        position: relative;
        color: rgb(253, 253, 253)
    }
    #caption{
        line-height: 2rem;
        height: 42rem;
        padding-top: 250px;
      }
      h1{
        font-size: 7rem;
        }
        p{
          font-size: 1.5rem;
        }
    }
</style>