

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


//These next two eventListeners cause the top button arrow to move.
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

//-------------------------------------------------------------
const bttmBttn = document.querySelector(".lastSection button");
const arrowUp = document.querySelector(".lastSection .fa");

//These next two eventListeners cause the bottom button arrow to move up.
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
//-----------------------------------------------------------------
//This conditional if statement makes it so that the top arrow doesnt go off page in mobile view.
bttmBttn.addEventListener("click", e => {

    if (window.innerWidth <= 999 ){
    arrowOver.style.transform = "translateX(-17rem)";
    window.scrollTo({top:0, behavior: "smooth"});
    } else {
        arrowOver.style.transform = "translateX(-20rem)";
        window.scrollTo({top:0, behavior: "smooth"});
    }
})

//This Class causes the Text in the center content area to turn bright if a paragraph is clicked

class BoxEffect {
    constructor(element){
        this.element = element;
        this.clicker = element.querySelector("p");
        this.clicker.addEventListener("click", ()=> this.updateBright());
    }

    updateBright(){
        this.element.classList.toggle("toggle--bright");
    }
}

let boxChanges = document.querySelectorAll('.box');
boxChanges.forEach(box => new BoxEffect(box));

//This object was used to update text on the bottom section using querySelectors

let lastSectionUpdate = {
    "sectionTitle": {
        "title": "Ready To Sign Up?",
        "paragraph": "That's a rhetorical question. Just sign up already. Follow the steps below..."
    },
    
    "spans": {
       "span-1": "Create an account at the top of the page. The button below will take you there!!!",
       "span-2": "Find a prison of your choice!",
       "span-3": "Search through the inmate profiles until you find a match."
}
}      

const lastParagraph = document.querySelector(".lastSection p");
let lastSpans = document.querySelectorAll(".lastSection span");
const lastH2 = document.querySelector(".lastSection h2");
const lastBttn = document.querySelector(".lastSection button");

lastH2.addEventListener("dblclick", e => {
    lastH2.textContent = lastSectionUpdate["sectionTitle"]["title"];
    
    lastParagraph.innerHTML = lastSectionUpdate["sectionTitle"]["paragraph"] +`<br><br>`+ '<>'+lastSectionUpdate["spans"]["span-3"] +`<br><br>`+ '<>'+lastSectionUpdate["spans"]["span-2"] +`<br><br>`+ '<>'+lastSectionUpdate["spans"]["span-1"] +`<br><br>`;

    lastH2.style.textShadow = "rgb(90, 0, 253) 0px 0px 5px";
    lastParagraph.style.textShadow = "rgb(90, 0, 253) 0px 0px 5px";
    lastBttn.textContent = "up, UP and AWAY!"
    lastBttn.style.textShadow = "rgb(90, 0, 253) 0px 0px 5px";
    lastBttn.style.boxShadow = "rgb(90, 0, 253) 0px 0px 5px";

    // lastSpans.forEach((span) => {span.style.textShadow = "rgb(253, 0, 253) 0px 0px 5px" }
    //);
})

lastH2.addEventListener("mouseover", e => {
    lastSpans.forEach(arr => arr.style.textShadow = "rgb(90, 0, 253) 0px 0px 5px");
});


lastH2.addEventListener("mouseout", e => {
    lastSpans = Array.from(lastSpans).map(arr => arr.style.textDecoration = "underline");
});


// lastSpans = Array.from(lastSpans).map(arr => arr.style.textShadow = "rgb(253, 0, 253) 0px 0px 5px");

