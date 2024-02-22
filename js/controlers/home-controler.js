'use strict'

function onInit() {
    renderUserData()

}

<<<<<<< HEAD
=======

>>>>>>> 15685a06a9ba8f644026e809b79184bcf536a5b2
function renderUserData() {
    var userData = getUser()
    createUserStyle(userData)


    document.querySelector('.email').innerText = userData.email
    document.querySelector('.date-of-birth').innerText = userData.birthDate
    document.querySelector('.time-of-birth').innerText = userData.birthTime
    document.querySelector('.age').innerText = userData.age



    console.log(userData);

}

function createUserStyle(userData) {

    var { email, txtColor, bgColor, birthDate, birthTime } = userData

    console.log(email, txtColor, bgColor, birthDate, birthTime);

    var elBody = document.querySelector('body')
    elBody.style.backgroundColor = bgColor
    elBody.style.color = txtColor
}

