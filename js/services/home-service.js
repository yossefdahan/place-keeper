'use strict'

const USER_DB = 'user_DB'

var gUser




function getUser() {

    gUser = loadFromStorage(USER_DB, gUser)

    return gUser
}
