'use strict'


function onInit() {
    renderPlaces()
    getPosition()
}

function renderPlaces() {
    const places = getPlaces()
    const strHTMLs = places.map(place => `
    <div>${place.name}</div>
    <button class="delete-btn" onclick="onRemovePlace('${place.id}')">X</button>
    <button class="delete-btn" onclick="onGoToPlace('${place.id}')">Go!</button>
    
    `)
    document.querySelector('.place-container').innerHTML = strHTMLs.join('')
}

function onRemovePlace(placeId) {
    removePlace(placeId)
    renderPlaces()
}

function onGoToPlace(placeId) {
    onPanToPlace(placeId)
    // getPlaceById(placeId)
}

function getPosition() {
    if (!navigator.geolocation) {
        alert('HTML5 Geolocation is not supported in your browser')
        return
    }
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)
}

function showLocation(position) {
    console.log(position)
    const { latitude: lat, longitude: lng, accuracy } = position.coords
    initMap(lat, lng, accuracy)
}

function initMap(lat = 31, lng = 31, zoom) {
    var elMap = document.querySelector('.map')
    const mapOptions = {
        center: { lat, lng },
        zoom,
    }

    const centerControlDiv = document.querySelector(".map-btn")
    const centerControl = createCenterControl(map)

    centerControlDiv.appendChild(centerControl);
    var map = new google.maps.Map(elMap, mapOptions)
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv)



    const markerOptions = {
        position: { lat, lng },
        map,
        title: 'Hello World!'
    }
    const marker = new google.maps.Marker(markerOptions)
    map.addListener('click', ev => {
        const name = prompt('Place name?', 'Place 1')
        const lat = ev.latLng.lat()
        const lng = ev.latLng.lng()
        console.log(ev, name, lat, lng);
        addPlace(name, lat, lng, map.getZoom())
        renderPlaces()
    })
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
}

function onPanToPlace(placeId) {
    var elMap = document.querySelector('.map')
    const place = getPlaceById(placeId)
    var { lat, lng, zoom } = place

    const mapOptions = {
        center: { lat, lng },
        zoom,
    }
    var map = new google.maps.Map(elMap, mapOptions)
    map.setCenter({ lat: place.lat, lng: place.lng })
    map.setZoom(place.zoom)
}


function createCenterControl(map) {
    const controlButton = document.createElement("button");

    // Set CSS for the control.
    controlButton.style.backgroundColor = "#fff";
    controlButton.style.border = "2px solid #fff";
    controlButton.style.borderRadius = "3px";
    controlButton.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    controlButton.style.color = "rgb(25,25,25)";
    controlButton.style.cursor = "pointer";
    controlButton.style.fontFamily = "Roboto,Arial,sans-serif";
    controlButton.style.fontSize = "16px";
    controlButton.style.lineHeight = "38px";
    controlButton.style.margin = "8px 0 22px";
    controlButton.style.padding = "0 5px";
    controlButton.style.textAlign = "center";
    controlButton.textContent = "Center Map";
    controlButton.title = "Click to recenter the map";
    controlButton.type = "button";
    // Setup the click event listeners: simply set the map to Chicago.
    controlButton.addEventListener("click", () => {
        map.setCenter(chicago);
    });
    return controlButton;
}