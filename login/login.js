var login = document.getElementById("signin");
var reg = document.getElementById("signup");
var btn = document.getElementById("btn");

function signin() {
    login.style.left = "10px";
    reg.style.left = "450px";
    btn.style.left = "0px";
}

function signup() {
    login.style.left = "-400px";
    reg.style.left = "10px";
    btn.style.left = "110px";
}