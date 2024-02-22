'use strict'


const USER_DB = 'user_DB'

var gUser = {
    email: '',
    txtColor: '',
    bgColor: '',
    age: '',
    birthDate: '',
    birthTime: ''
}

function getUsers(gUser) {
    return gUser = loadFromStorage(USER_DB, gUser)
}

<<<<<<< HEAD
=======

>>>>>>> 15685a06a9ba8f644026e809b79184bcf536a5b2
function setUser(userData) {
    gUser = userData

    _saveUserPref(USER_DB, gUser)
}

<<<<<<< HEAD
=======



>>>>>>> 15685a06a9ba8f644026e809b79184bcf536a5b2
function _saveUserPref() {
    saveToStorage(USER_DB, gUser)
}