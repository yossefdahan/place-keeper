'use strict'




function onInit() {
    renderUser()
}

<<<<<<< HEAD
function renderUser() {
    var users = getUsers(gUser)
}

=======



function renderUser() {
    var users = getUsers(gUser)



}


>>>>>>> 15685a06a9ba8f644026e809b79184bcf536a5b2
function onSubmit(ev, value) {
    ev.preventDefault()
    var userData = {
        email: document.getElementById('email').value,
        txtColor: document.getElementById('font-color').value,
        bgColor: document.getElementById('bg-color').value,
        age: document.getElementById('age').value,
        birthDate: document.getElementById('dob').value,
        birthTime: document.getElementById('time').value
    }
<<<<<<< HEAD
    setUser(userData)
}

=======

    setUser(userData)


}


>>>>>>> 15685a06a9ba8f644026e809b79184bcf536a5b2
function showAge(newVal) {
    document.getElementById('sAge').innerHTML = newVal
}

// window.addEventListener('submit', (ev) => {
//     ev.preventDefault()
// })

