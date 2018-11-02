<template>
    <div id="nav">
      <router-link class="router-link navHome" to="/">Home</router-link>
      <router-link class="router-link navServices" to="/our-services">Our Services</router-link>
      <router-link class="router-link navLocations" to="/locations">Location</router-link>
      <router-link class="router-link navContact" to="/contact">Contact</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
    };
</script>

<style lang="scss" scoped>
    #nav{
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
        height:10%;
        background: linear-gradient(rgba(0,0,90,0.5),rgba(0,0,90,0.5)), url("../assets/navbarBgRain.jpg") center center no-repeat;
        background-size:cover;
        justify-content: center;
        //border-top:solid thin #FFFFFF;

        .router-link{
            width: 40%;
            height: 40%;
            text-decoration: none;
            color: white;

            &:visited{
                color: white;
            }
        }

         .navHome, .navLocations, .navServices, .navContact{
            padding:20px 0 0 0;
            margin:0;
            height:100%;
            width:25%;
            border-top:solid thin #FFFFFF;
            float: left;
            font-size: 32px;
            text-align:center;
            vertical-align:middle;
            position:relative;
            -webkit-transform: translate(0px, 0px);
                -moz-transform: translate(0px, 0px);
                -o-transform: translate(0px, 0px);
                -ms-transform: translate(0px, 0px);
                transform: translate(0px, 0px);
                -webkit-transition: 0.15s ease;
                -moz-transition: 0.15s ease;
                -o-transition: 0.15s ease;
                transition: 0.15s ease;
            z-index:100;
        }

         .navHome:hover, .navServices:hover, .navLocations:hover, .navContact:hover{
            height:300%;
            bottom:1px;
                transform: translate(0px, -50px);

                @media (max-width:992px){
                    height: 100%;
                    bottom: 0;
                    transform: translate(0px, 0);
                }
            
        }

        .navHome:hover{
            background: linear-gradient(rgba(0,0,255,0.5),rgba(255,255,255,0.5)), url("../assets/signThumb.jpg") 0 -50px no-repeat;
            background-size:cover;
            display:block;
        }

        .navServices:hover{
            background: linear-gradient(rgba(0,0,255,0.5),rgba(255,255,255,0.5)), url("../assets/stethoscopeThumb.jpg") 0 -55px no-repeat;
            background-size:cover;
            display:block;
        } 

        .navLocations:hover{
            background: linear-gradient(rgba(0,0,255,0.5),rgba(255,255,255,0.5)), url("../assets/mapThumb.jpg") no-repeat;
            background-size:cover;
            display:block;
        } 
        
        .navContact:hover{
            background: linear-gradient(rgba(0,0,255,0.5),rgba(255,255,255,0.5)), url("../assets/keyboardThumb.jpg") no-repeat;
            background-size:cover;
            display:block;
            
        }
    }

    @media (max-width:992px){
        #nav{
            flex-direction: column;
            bottom: 60px;
            height: auto;
            width: auto;
            display: none;

            .navHome, .navLocations, .navServices, .navContact{
                width: 100%;
            }
        }
        #nav.show{
            display: flex;
        }

        
    }
</style>