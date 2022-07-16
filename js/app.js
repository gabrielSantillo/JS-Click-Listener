function changeColor(details) {
    details[`target`][`style`][`color`] = `gray`
}
let header = document.getElementById(`header-h2`);
header.addEventListener(`mouseover`, changeColor);

function changeFontSize(details) {
    details[`target`][`style`][`backgroundColor`] = `green`
    details[`target`][`style`][`fontSize`] = `2rem`
}
let p_tags = document.querySelector(`p`)
p_tags.addEventListener(`click`, changeFontSize);

/**keyup */

function footerBigger(details) {
    details[`target`][`style`][`fontSize`] = `4rem`
}
let footerTag = document.querySelector(`body`);
footerTag.addEventListener(`keyup`, footerBigger);