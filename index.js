let startdiv = document.getElementById("div2");
let communitydivEl = document.getElementById("Communitydiv");
let signupdivEl = document.getElementById("signupDiv");
let backdivEl = document.getElementById("backDiv");

communitydivEl.addEventListener("click", display);

function display() {
    startdiv.classList.add("d-none")
    signupdivEl.classList.remove("d-none")
}

backdivEl.addEventListener("click", display1)

function display1() {
    signupdivEl.classList.add("d-none")
    startdiv.classList.remove("d-none")
}