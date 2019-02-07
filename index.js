

//Menu functionality
function toggleMenu(){
    menu.classList.toggle("nav--open");
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

// -------------------------------------------------------------------
const span = document.querySelector("span");
const arrowOver = document.querySelector("span .fa");
const topBttn = document.querySelector(".topInfo button");

topBttn.addEventListener("mouseover", e => {
    arrowOver.style.color = "transparent";
    arrowOver.style.transform = "translateX(167px)"
    arrowOver.style.transition ="1.5s"
});

topBttn.addEventListener("mouseout", e => {
    arrowOver.style.color = "white";
    arrowOver.style.transform = "translateX(0px)"
    arrowOver.style.transition ="1.5s"
})



const bttmBttn = document.querySelector(".lastSection button");
const arrowUp = document.querySelector(".lastSection .fa");

bttmBttn.addEventListener("mouseover", e => {
    arrowUp.style.transform = "translateY(-500px)"
    arrowUp.style.transition = "1.5s";
    arrowUp.style.color ="transparent";
});

bttmBttn.addEventListener("mouseout", e => {
    arrowUp.style.transform = "translateY(0px)"
    arrowUp.style.transition = "1.5s";
    arrowUp.style.color ="white";
});

bttmBttn.addEventListener("click", e => {

    if (window.innerWidth <= 999 ){
    arrowOver.style.transform = "translateX(-160px)";
    window.scrollTo({top:0, behavior: "smooth"});
    } else {
        arrowOver.style.transform = "translateX(-200px)";
        window.scrollTo({top:0, behavior: "smooth"});
    }
})

//------creating a CLASS -------------------------------

class Box {
    constructor(element){
        this.element = element;
        this.clicker = element.querySelector("h2");
        this.clicker.addEventListener("click", ()=> this.updateBright());
    }

    updateBright(){
        this.element.classList.toggle("toggle--bright");
    }
}

let boxChanges = document.querySelectorAll('.box');
boxChanges.forEach(box => new Box(box));