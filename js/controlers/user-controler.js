'use strict'




function onInit() {
    renderUser()
}




function renderUser() {
    var users = getUsers(gUser)



}


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

    setUser(userData)


}


function showAge(newVal) {
    document.getElementById('sAge').innerHTML = newVal
}

// window.addEventListener('submit', (ev) => {
//     ev.preventDefault()
// })

