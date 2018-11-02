<template>
  <div id="app">
    <div class="upper">
      <p>239-348-8804</p>
      <a href="mailto:office@loutron.org">office@loutron.org</a>
    </div>
    <div class="blueTint"></div>
    <video id="bgvid" poster="./assets/bgFountain02.jpg" autoplay loop>
        <source src="./assets/video/fountain.mp4" type="video/mp4">
        <source src="./assets/video/fountain.ogg" type="video/ogg">
        <source src="./assets/video/fountain.webm" type="video/webm">
    </video>
    <div class="title"></div>
    <div class="content">
      <router-view/>
    </div>
    <Footer/>
    <div class="menu-icon toggleTopMenu" @click="showMenu = !showMenu, toggleMenu()">
      <div class="" v-if="!showMenu">
        <i class="fa fa-bars"></i>
      </div>
      <div class="menu-close" v-else>
        +
      </div>
    </div>
    
  </div>
</template>

<script>
  import Home from './components/Home.vue';
  import Services from './components/Services.vue';
  import Locations from './components/Locations.vue';
  import Contact from './components/Contact.vue';
  import Footer from './components/Footer.vue';
  export default {
    name: 'app',
    components: {
      Home,
      Services,
      Locations,
      Contact,
      Footer
    },
    data() {
        return{
            msg: "Our Services",
            showMenu: false,
        }
    },
    methods:{
            toggleMenu: function() {
              if(window.innerWidth <= 992){
                let nav = document.getElementById('nav');
                if(nav.classList.contains('show')){
                  nav.classList.remove('show');
                }else{
                  nav.classList.add('show');
                }
              }
            }
    },
    mounted(){
           // this.toggleMenu()
        }
  }
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans:300,400");
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

html,
body{
  height: auto;
  margin: 0;
  padding: 0;
  background: linear-gradient(rgba(0, 0, 50, 0.7), rgba(0, 0, 50, 0.7)), url("./assets/bgFountain02.jpg") center center fixed no-repeat;
  background-size:cover;
  font-size: 24px;
  color:#FFFFFF;
}

body.home{

  .blueTint{
    height:100%;
    width:100%;
    background: rgba(0, 0, 50, 0.7);
    position:fixed;
    z-index:1;
  }

  #bgvid{
      position: fixed; 
      min-width: 100%; 
      min-height: 100%;
      width: auto; 
      height: auto; 
      z-index: 0;
      background: url(./assets/bgFountain02.jpg) no-repeat;
      background-size: cover;
  }
}
body.services{
  background: linear-gradient(rgba(0, 0, 50, 0.7), rgba(0, 0, 50, 0.7)), url("./assets/bgRoom01.jpg") center center fixed no-repeat;
  background-size:cover;
}

body.services,
body.contact,
body.locations{
  #bgvid{
    display: none;
  }
}
body, p, a, h1, h2, h3, ul, li{
  font-family: 'Josefin Sans', sans-serif;
  font-weight:300;
}

#app {
  height: auto;
  width:100%;
  display: flex;
  flex-direction: column;
  //background: rgba(0,0,50,0.7);

  a,
  a:visited{
    text-decoration: none;
    color: white;
  }

  .upper{
    position: fixed;
    top:0;
    width: 100%;
    background-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    justify-content: space-between;
    display: flex;
    font-size: 18px;
    padding: 10px;
    z-index: 100;

    p,
    a,
    a:visited{
      margin: 15px 30px 0 15px;
    }
  }

  .title{
    top:80px;
    left:100px;
    height:200px;
    width:636px;
    background: url("./assets/loutronLogo.png") center left no-repeat;
    background-size:contain;
    position:relative;
    display:block;
    z-index:7;
  }

  @keyframes fadein {
      0%   {opacity: 0;}
      50%  {opacity: 0.7;}
      100% {opacity: 1;}
  }

  .content{
    flex: 1 1 auto;
    padding: 50px 100px 0 100px;
    z-index: 2;
    animation: fadein 0.2s ease-in 1s;
  }

  
  #nav{
    width: 100%;
    bottom: 0;
    position: fixed;
    align-self: flex-end;
    justify-items: center;
    z-index: 1000;
  }
}

body.locations #app .content{
  padding: 0;
}

.menu-icon{
    display: none;

    .menu-close{
      transform: rotate(45deg);
      font-size: 55px;
      font-weight: 400;
    }
}
@media (max-width:992px){
    .menu-icon{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        width: 60px;
        z-index: 1000;
        position: fixed;
        right: 20px;
        bottom: 20px;
        border-radius: 150px;
        background: rgba(255,0,0,0.9);
    }
    #app{
      .title{
        top: 50px;
        left: 50px;
        width:50vw;
        height: 15vh;
      }
      .content{
        padding: 50px;
      }
    }

    #nav{
      flex-direction: column;
      bottom: 90px!important;
      height: auto;
      max-height: 0;
      width: auto !important;
      overflow: hidden;
      animation: menu-slide 0.2s linear both;
    }

    #nav.show{
      max-height: 300px;
    }

    @keyframes menu-slide {
    0%   {bottom: 90px; max-height:0;}
    50%  {bottom: 100px; max-height:300px;}
    75%  {bottom: 80px; max-height:300px;}
    100% {bottom: 90px; max-height:300px;}
}
}

</style>
