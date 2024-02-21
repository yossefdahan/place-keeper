'use strict'


function onInit() {
    renderPlaces()
    getPosition()
}


function renderPlaces() {
    const places = getPlaces()
    console.log(places);
    const strHTMLs = places.map(place => `
    <div>${place.name}</div>
    <button class="delete-btn" onclick="onRemovePlace('${place.id}')">X</button>
    
    `)
    document.querySelector('.place-container').innerHTML = strHTMLs.join('')
    
    
    

}


function onRemovePlace(placeId) {
    removePlace(placeId)
    renderPlaces()
}




// gMap.addListener('click', ev => { 
//     const name = prompt('Place name?', 'Place 1') 
//     const lat = ev.latLng.lat()
//      const lng = ev.latLng.lng() 
//      addPlace(name, lat, lng, gMap.getZoom()) 
//      renderPlaces() 
// })


// function getPosition() {

//     if (!navigator.geolocation) {
//         alert('HTML5 Geolocation is not supported in your browser')
//         return
//     }
//     navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)
// }


// function showLocation(position) {
    
    
//     const { latitude: lat, longitude: lng, accuracy } = position.coords

//     // document.getElementById("latitude").innerHTML = lat
//     // document.getElementById("longitude").innerHTML = lng
//     // document.getElementById("accuracy").innerHTML = accuracy

//     // var date = new Date(position.timestamp)
//     // document.getElementById("timestamp").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    
//     initMap(lat, lng)
// }


// function initMap(lat = 31, lng = 31) {

//     const elMap = document.querySelector('.map')
//     const mapOptions = {
//         center: { lat, lng },
//         zoom: 10
//     }
//     const map = new google.maps.Map(elMap, mapOptions)

//     const markerOptions = {
//         position: { lat, lng },
//         map,
//         title: 'Hello World!'
//     }
//     const marker = new google.maps.Marker(markerOptions)
// }