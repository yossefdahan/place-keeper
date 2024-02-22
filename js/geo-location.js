'use strict'

function getPosition() {

    if (!navigator.geolocation) {
        alert('HTML5 Geolocation is not supported in your browser')
        return
    }

<<<<<<< HEAD
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)


=======
    // One shot position retrieval...
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)
    
    // ...or continous watch
>>>>>>> 15685a06a9ba8f644026e809b79184bcf536a5b2
    // navigator.geolocation.watchPosition(showLocation, handleLocationError)
}

function showLocation(position) {
<<<<<<< HEAD

=======
    
    console.log(position)
>>>>>>> 15685a06a9ba8f644026e809b79184bcf536a5b2
    const { latitude: lat, longitude: lng, accuracy } = position.coords

    // document.getElementById("latitude").innerHTML = lat
    // document.getElementById("longitude").innerHTML = lng
    // document.getElementById("accuracy").innerHTML = accuracy

    // var date = new Date(position.timestamp)
    // document.getElementById("timestamp").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
<<<<<<< HEAD

    initMap(29.557669, 34.951923)
}

function initMap(lat, lng) {
=======
    
    initMap(lat, lng)
}

function initMap(lat = 31, lng = 31) {
>>>>>>> 15685a06a9ba8f644026e809b79184bcf536a5b2

    const elMap = document.querySelector('.map')
    const mapOptions = {
        center: { lat, lng },
        zoom: 10
    }
    const map = new google.maps.Map(elMap, mapOptions)

    const markerOptions = {
        position: { lat, lng },
        map,
        title: 'Hello World!'
    }
    const marker = new google.maps.Marker(markerOptions)
}

function handleLocationError(error) {
    var locationError = document.getElementById("locationError")

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message
            break
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location."
            break
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message
            break
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location."
            break
    }
<<<<<<< HEAD
}


=======
}
>>>>>>> 15685a06a9ba8f644026e809b79184bcf536a5b2
