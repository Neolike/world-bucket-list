let map;
let panorama;
const resetMapButton = document.querySelector('#reset-map');
const backToMapButton = document.querySelector('#back-to-map');
const panoramaElement = document.querySelector('#panorama');

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 7.676227, lng: 98.767226},
        zoom: 3,
        streetViewControl: false
    });
    panorama = new google.maps.StreetViewPanorama(document.getElementById('panorama'), {
        position: {lat: 7.676227, lng: 98.767226},
        pov: {
          heading: 34,
          pitch: 10
          
        }
    });
    addMapListeners();
    panoramaElement.style.display = "none";
    backToMapButton.style.display = "none";  

}
function addMapListeners(){
    resetMapButton.addEventListener("click", resetMap);
    backToMapButton.addEventListener("click", backToMap);
}




function addMarkerOnMap(dream){
    const marker = new google.maps.Marker({
        position:  dream.coordinates,
        map: map,
        icon: dream.done ? "images/marker-done.png" : "images/marker.png"
    });  
    marker.addListener('click', function() {
        zoomOn(marker.getPosition());
    });
    

    
}
function zoomOn(position) {
    map.setZoom(17.5);
    map.setCenter(position);
    map.setMapTypeId("satellite")
}
function resetMap(){
    map.setZoom(2.5);
    map.setCenter({lat: 7.676227, lng: 98.767226});
    map.setMapTypeId("roadmap")
}
function backToMap(){
    panoramaElement.style.display = "none";
    backToMapButton.style.display = "none";
    resetMapButton.style.display = "block";  
}

function visitDreamOnMap(position){
    panorama.setPosition(position);
    panoramaElement.style.display = "block";
    backToMapButton.style.display = "block";
    resetMapButton.style.display = "none";
}


export {initMap,addMarkerOnMap,visitDreamOnMap};
