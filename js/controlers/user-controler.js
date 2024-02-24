'use strict'




function onInit() {
    renderUser()
}

function renderUser() {
    var users = getUsers(gUser)
    userPref(users)
}

function onSubmit(ev, value) {
    ev.preventDefault()
    var userData = {
        email: document.getElementById('email').value,
        txtColor: document.getElementById('font-color').value,
        bgColor: document.getElementById('bg-color').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender-list').value,
        birthDate: document.getElementById('dob').value,
        birthTime: document.getElementById('time').value
    }
    console.log(userData);
    setUser(userData)
    
}

function showAge(newVal) {
    document.getElementById('sAge').innerHTML = newVal
}

function userPref(userData) {
  
    var { txtColor, bgColor} = userData

    var elBody = document.querySelector('body')
    elBody.style.backgroundColor = bgColor
    elBody.style.color = txtColor

}

