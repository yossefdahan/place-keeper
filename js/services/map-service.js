'use strict'

var gPlaces
<<<<<<< HEAD
const PLACE_DB = 'place_DB'
_createPlaces()


function getPlaces() {
    return gPlaces
}

function removePlace(placeId) {
    const placeIdx = gPlaces.findIndex(place => place.id === placeId)
    gPlaces.splice(placeIdx, 1)
}

function addPlace(name, lat, lng, zoom) {

    var place = {
        id: makeId(),
        name,
        lat,
        lng,
        zoom,
    }
    gPlaces.unshift(place)
    console.log(gPlaces);
    _saveUserPref()

}

function getPlaceById(placeId) {
    const placeIdx = gPlaces.findIndex(place => place.id === placeId)
    var position = gPlaces[placeIdx]

    return position
=======

_createPlaces()



function getPlaces() {
    console.log(gPlaces);
    return gPlaces

}
function removePlace(placeId) {
    const placeIdx = gPlaces.findIndex(place => place.id === placeId)
    gPlaces.splice(placeIdx, 1)

}
function addPlace(name, lat, lng, zoom) {


}
function getPlaceById(placeId) {

>>>>>>> 15685a06a9ba8f644026e809b79184bcf536a5b2

}
function _createPlace(name, lat, lng, zoom) {

    return {
        id: makeId(),
        name,
        lat,
        lng,
        zoom,
    }

}
<<<<<<< HEAD

=======
>>>>>>> 15685a06a9ba8f644026e809b79184bcf536a5b2
function _createPlaces() {

    gPlaces = [
        _createPlace('Eden house', 32.1416, 34.831213, 16),
<<<<<<< HEAD
        _createPlace('Yossef house', 32.467940, 35.043360, 15),
    ]

    console.log('gPlaces', gPlaces)
}

function _saveUserPref() {
    saveToStorage(PLACE_DB, gPlaces)
=======
        _createPlace('Yossef house', 32, 32.83, 12),
    ]

    console.log(gPlaces);

>>>>>>> 15685a06a9ba8f644026e809b79184bcf536a5b2
}