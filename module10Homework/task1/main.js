const btn = document.querySelector(".btn");
const btnIcon = document.querySelector(".btn-icon svg");
let isClicked = false;

const iconBefore = ' <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5.904-2.854a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768z"/>';
const iconAfter = '<path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768z"/>';

btn.addEventListener("click", function(){
    if(isClicked){
        btnIcon.innerHTML = iconBefore;
        isClicked = false;
    } else{
        btnIcon.innerHTML = iconAfter;
        isClicked = true;
    }
});