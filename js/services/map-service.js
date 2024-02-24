'use strict'

var gPlaces
const USER_DB = 'user_DB'

var gUser

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
        _createPlace('Yossef house', 32.467940, 35.043360, 15),
    ]
}

function _saveUserPref() {
    saveToStorage(PLACE_DB, gPlaces)
}

function getAsCSV() {
    let csvStr = `Id, Name, lat, lng, zoom`
    gPlaces.forEach(place => {
        // if (!toy.isSelected) return
        const date = new Date(place.createdAt).toDateString()
        const csvLine = `\n${place.id}, ${place.name}, ${place.lat}, ${place.lng}, ${place.zoom}`
        csvStr += csvLine
    })
    return csvStr
}

function getUser() {

    gUser = loadFromStorage(USER_DB, gUser)

    return gUser
}