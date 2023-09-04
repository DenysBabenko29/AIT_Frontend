const titleLink = document.getElementById("title");
let flag = true;

function changeTitle() {
    const clicked = "You clicked button";
    const unClicked = "Welcome ty my page!";

    if (flag) {
        titleLink.textContent = clicked;
        flag = !flag;
    } else {
        titleLink.textContent = unClicked;
        flag = !flag;
    }
}

const images = [
    "./Images/Rouen_Cathedral_1.jpg",
    "./Images/Rouen_Cathedral_2.jpg",
    "./Images/Rouen_Cathedral_3.jpg",
    "./Images/Rouen_Cathedral_4.jpg",
    "./Images/Rouen_Cathedral_5.jpg",
    "./Images/Rouen_Cathedral_6.jpg"
];

const btnPrev = document.getElementById("prev");
const elemPictures = document.getElementById("picture");
const btnNext = document.getElementById("next");
let index = 0;

btnPrev.onclick = prevHandler;
btnNext.onclick = nextHandler;

function prevHandler() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    elemPictures.src = images[index];
}

function nextHandler() {
    index++;
    if(index > images.length - 1){
        index = 0;
    }
    elemPictures.src = images[index];
}
