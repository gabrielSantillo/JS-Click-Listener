/*This function changes the color of the element to gray. By getting my h2 tag by its id and adding an Event Listener to when the mouse hover it, I call the function that will change the color of the h2 tag.*/
function changeColor(details) {
    details[`target`][`style`][`color`] = `gray`
}
let header = document.getElementById(`header-h2`);
header.addEventListener(`mouseover`, changeColor);

/*This function changes the sixe and background color of the element. By getting the first p tag of the page and clicking on it, I call this function that will change the size and background color */
function changeFontSize(details) {
    details[`target`][`style`][`backgroundColor`] = `green`
    details[`target`][`style`][`fontSize`] = `2rem`
}
let p_tags = document.querySelector(`p`)
p_tags.addEventListener(`click`, changeFontSize);

/*This function changes the background color of the element. By getting the body tag when the user press the space key, Icall the function that will change the background color of the body */
function changeColorKeyUp(details) {
    details[`target`][`style`][`backgroundColor`] = `black`;
}
let footerTag = document.querySelector(`body`);
footerTag.addEventListener(`keyup`, changeColorKeyUp);

/*This function changes the backgroud color of the body. By using the function setTimeOut, I call the function that will change the background color and after 15s will change the color of the body. */
function changeBgColor() {
    let target = document.body;
    target.style.background = `red`;
}
setTimeout(changeBgColor, 15000);