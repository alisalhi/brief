// storing input from register-form
function stock() {
    var nom = document.getElementById('nom');
    var mdp = document.getElementById('mdp');

    if (nom.value == "" || mdp.value == "") {
        alert("les champs vides");
    } else {

        localStorage.setItem('nom', nom.value);
        localStorage.setItem('mdp', mdp.value);
        window.location.replace("brf1.html")
    }
}

// check if stored data from register-form is equal to entered data in the   login-form
function verifier() {

    // stored data from the register-form
    var storedName = localStorage.getItem('nom');
    var storedPw = localStorage.getItem('mdp');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPsw');

    // // check if stored data from register-form is equal to data from login form
    if (userName.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
        window.location.replace("livecoding.html")

    } else {
        alert('ERROR.');
    }
}