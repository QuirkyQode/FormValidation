function validname(username) {
    return String(username).match(/^[0-9a-zA-Z]+$/)
}
function validemail(email) {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
function validpass(password, confirmpass) {
    return  (password.match(/[a-z]/g) && password.match(
        /[A-Z]/g) && password.match(
        /[0-9]/g) && password.match(
        /[^a-zA-Z\d]/g) && password.length >= 8)
}

function validconfirmpass(password, confirmpass) {
    return (password == confirmpass)
}

function signup() {
    let errmsg = '';
    let username = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirmpass = document.getElementById("confirmpass").value
    let status = document.getElementById("status")
    console.log(username, email, password, confirmpass)
    if(!validname(username)) {
        errmsg = "Invalid Username"
    }
    if(!validemail(email)) {
        errmsg = errmsg + "\n" + "Invalid Email"
    }
    if (!validpass(password)) {
        errmsg = errmsg + "\n" + "A password is correct if it contains:\n \
        At least 1 uppercase character.\n \
        At least 1 lowercase character.\n \
        At least 1 digit.\n \
        At least 1 special character.\n \
        Minimum 8 characters."
    }
    if (!validconfirmpass(password, confirmpass)) {
        errmsg = errmsg + "\n" + "Confirm password does not match"
    }

    if (errmsg != '') {
        alert(errmsg)
    }
    else {
        alert ("Successfully Signed up")
    }
}