'use strict'

var gMarkers = []
var gMap

var gLat
var gLng
var gZoom

function onInit() {
    initMap(29.550360, 34.952278, 12)
    renderPlaces()
    renderMarkers()
}

function renderPlaces() {
    const places = getPlaces()
    const strHTMLs = places.map(place => `
    
    <div class="names">${place.name}
    <button class="delete-btn" onclick="onRemovePlace('${place.id}')">X</button>
    <button class="go-btn" onclick="onGoToPlace('${place.id}')">Go!</button>
    </div>
    `)
    document.querySelector('.place-container').innerHTML = strHTMLs.join('')

    var userData = getUser()
    createUserStyle(userData)
}

function onRemovePlace(placeId) {
    removePlace(placeId)
    renderPlaces()
    renderMarkers()
}

function onGoToPlace(placeId) {

    var currplace = getPlaceById(placeId)

    var { lat, lng, zoom } = currplace

    initMap(lat, lng, zoom)

    renderMarkers()
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

function initMap(lat = 31, lng = 31, zoom = 10) {
    var elMap = document.querySelector('.map')
    const mapOptions = {
        center: { lat, lng },
        zoom,
    }

    var map = new google.maps.Map(elMap, mapOptions)
    gMap = map

    const centerControlDiv = document.createElement('div')
    const centerControl = createCenterControl(map)

    centerControlDiv.appendChild(centerControl);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv)


    const markerOptions = {
        position: { lat, lng },
        map,
        title: 'Hello World!'
    }


    const marker = new google.maps.Marker(markerOptions)
    map.addListener('click', ev => {

        // onAddPlace()
        // var name = gName
        gLat = ev.latLng.lat()
        gLng = ev.latLng.lng()
        gZoom = map.getZoom()
        // const name = prompt('Place name?', 'Place 1')
        console.log(ev, name, lat, lng);
        onAddPlace()
    })
}

function onAddPlace() {

    const elModal = document.querySelector('.modal')
    const elHeading = document.querySelector('h2')
    elHeading.innerText = 'add place'
    elModal.showModal()

}

function onSubmit(ev) {
    ev.preventDefault()
    const elModal = document.querySelector('.modal')
    const elForm = document.querySelector('form')
    var elInput = elForm.querySelector('input')


    addPlace(elInput.value, gLat, gLng, gZoom)
    renderPlaces()
    renderMarkers()
    elModal.close()
    elForm.reset()
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
        map.setCenter(getPosition());
    });
    renderMarkers()

    return controlButton;
}

function renderMarkers() {
    const places = getPlaces()
    // remove previous markers 
    gMarkers.forEach(marker => marker.setMap(null))
    // every place is creating a marker 
    gMarkers = places.map(place => {
        return new google.maps.Marker({
            position: place,
            map: gMap,
            title: place.name
        })
    })
}

function downloadCSV(elLink) {
    const csvContent = getAsCSV()
    elLink.href = 'data:text/csv;charset=utf-8,' + csvContent
}

function onCloseModal() {
    document.querySelector('.modal').close()
}

function createUserStyle(userData) {

    var { txtColor, bgColor } = userData



    var elBody = document.querySelector('body')
    elBody.style.backgroundColor = bgColor
    elBody.style.color = txtColor
}