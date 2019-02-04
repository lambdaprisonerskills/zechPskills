
function toggleMenu(){
    menu.classList.toggle('nav--open');
  }

const menuBttn = document.querySelector("header div a");
const menu = document.querySelector("nav");
const header = document.querySelector("header div");
const escape = document.getElementById("escape");

menuBttn.addEventListener("click", e => {
    toggleMenu();
    header.style.display = "none";
})

escape.addEventListener("click", e => {
    toggleMenu();
    header.style.display = "block";
})