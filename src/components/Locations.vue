<template>
    <div class="locations">
        <div class="takeOverPage">
            <div id="map_canvas_1"></div>
            <div id="map_wrapper">
                <div id="map_canvas" class="mapping"></div>
            </div>   
        </div>
        <div class="overMap"></div>
        <div class="addresses">
            <h1>{{ msg }}</h1>
            <p>We currently operate in both Physicians Regional Pine Ridge Road<br>
            and Collier Boulevard locations.</p>
            <div class="pineridgeBg"></div>
            <h2>Physicians Regional Medical Center</h2>
            <p>6101 Pine Ridge Rd<br>
            Naples, FL, 34119</p>
            <div class="collierBg"></div>
            <h2>Physicians Regional Medical Center</h2>
            <p>8300 Collier Blvd<br>
            Naples, FL, 34114</p>
        </div>
    </div>
</template>

<script>
    export default {
        beforeCreate: function() {
            document.body.className = 'locations';
        },
        name: 'Locations',
        data() {
            return{
                msg: "Locations"
            }
        },
        methods:{
            initialize: function() {
                var bounds = new google.maps.LatLngBounds();
                var myOptions = {
                    zoom: 11,
                    mapTypeId: 'satellite',
                    center: new google.maps.LatLng(26.243114, -81.959881),
                    disableDefaultUI: true
                };
                var map = new google.maps.Map(document.getElementById("map_canvas_1"), myOptions);
                map.setTilt(45);

                var markers = [
                    ['Physicians Regional, Pine Ridge', 26.213832,-81.732588],
                    ['Physicians Regional, Collier', 26.105195,-81.685474]
                ];

                // Display multiple markers on a map
                var infoWindow = new google.maps.InfoWindow(), marker, i;

                // Loop through our array of markers & place each one on the map  
                for( i = 0; i < markers.length; i++ ) {
                    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
                    var center = new google.maps.LatLng(26.243114, -81.959881);
                    //bounds.extend(center);
                    marker = new google.maps.Marker({
                        position: position,
                        map: map,
                        title: markers[i][0]
                    });
                    
                    // Allow each marker to have an info window    
                    google.maps.event.addListener(marker, 'click', (function(marker, i) {
                        return function() {
                            infoWindow.setContent(infoWindowContent[i][0]);
                            infoWindow.open(map, marker);
                        }
                    })(marker, i));

                    // Automatically center the map fitting all markers on the screen
                    //map.fitBounds(bounds);
                }
            }
        },
        mounted(){
            this.initialize()
        }
    };
</script>

<style lang="scss" scoped>
    .takeOverPage{
        height:90%;
        width:100%;
        left:0;
        top: 0;
        position:fixed;  
        z-index:1;

        #map_canvas_1{
            height: 100%;
        }
    }

    .overMap {
        height: 90%;
        border-width: 1000px 100px 0 0;
        border-style: solid;
        border-color: #000011 transparent;
        opacity: 0.5;
        filter: alpha(opacity=50);
        width: 60%;
        overflow-y: hidden;
        z-index: 3;
        position: fixed;
        top: 0;
    }

    .addresses{
        height: 100vh;
        left: 15%;
        margin: 50px 0 200px 0;
        position: absolute;
        z-index: 4;
    }

    .pineridgeBg, .collierBg{
        width:100%;
        height:50px;
        margin-bottom: 5px;
        background: url(../assets/hospitalTitle.jpg) center 0 no-repeat;
        background-size:cover;
        padding-top:25%;
        float:left;
        position:relative;
        overflow:hidden;
    }

    .collierBg{
        background: url(../assets/collierTitle.jpg) center 0 no-repeat;
        background-size:cover;
}
</style>