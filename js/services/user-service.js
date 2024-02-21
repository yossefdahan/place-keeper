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


function setUser(userData) {
    gUser = userData

    _saveUserPref(USER_DB, gUser)
}




function _saveUserPref() {
    saveToStorage(USER_DB, gUser)
}