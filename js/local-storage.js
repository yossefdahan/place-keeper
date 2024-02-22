'use strict'


<<<<<<< HEAD
=======

>>>>>>> 15685a06a9ba8f644026e809b79184bcf536a5b2
function saveToStorage(key, value) {
    const valueStr = JSON.stringify(value)
    localStorage.setItem(key, valueStr)
}

function loadFromStorage(key) {
    const valueStr = localStorage.getItem(key)
    return JSON.parse(valueStr)
}