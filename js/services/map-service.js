'use strict'

var gPlaces

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
function _createPlaces() {

    gPlaces = [
        _createPlace('Eden house', 32.1416, 34.831213, 16),
        _createPlace('Yossef house', 32, 32.83, 12),
    ]

    console.log(gPlaces);

}