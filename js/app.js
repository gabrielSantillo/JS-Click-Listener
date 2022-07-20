/*This function changes the color of the element to gray. */
function changeColor(details) {
    details[`target`][`style`][`color`] = `gray`
}
/*By getting my h2 tag by its id and adding an Event Listener to when the mouse hover it, I call the function that will change the color of the h2 tag. */
let header = document.getElementById(`header-h2`);
header.addEventListener(`mouseover`, changeColor);

/*This function changes the sixe and background color of the element. */
function changeFontSize(details) {
    details[`target`][`style`][`backgroundColor`] = `green`
    details[`target`][`style`][`fontSize`] = `2rem`
}
/* By getting the first p tag of the page and clicking on it, I call this function that will change the size and background color. */
let p_tags = document.querySelector(`p`)
p_tags.addEventListener(`click`, changeFontSize);

/*This function changes the background color of the element.  */
function changeColorKeyUp(details) {
    details[`target`][`style`][`backgroundColor`] = `black`;
}
/*By getting the body tag when the user press the space key, Icall the function that will change the background color of the body */
let footerTag = document.querySelector(`body`);
footerTag.addEventListener(`keyup`, changeColorKeyUp);

/*This function changes the background color of the body with ramdonly colours.  */
function changeBgColor() {
    
    /*These 3 lines of code gets ramdomly numbers that represents a colour on the rgb */
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    /*in these 2 lines of code I'm getting the whole body of the page and changing its color */
    let target = document.body;
    target.style.background = `rgb(`+r+`, `+g+`, `+b+`)`;
}
/*By using the function setTimeOut, I call the function that will change the background color and after 15s will change the color of the body. */
setTimeout(changeBgColor, 15000);

/*This function changes the posistion of the element in the axis X and Y ramdonly. */
function changePosition() {
    /*These 2 lines of code gets a ramdonly number */
    let x = Math.floor(Math.random()*100);
    let y = Math.floor(Math.random()*100);
    /*in these 2 lines of code I'm getting the button on the page and making it change the position ramdomly */
    let button = document.querySelector(`button`);
    button.style.transform = `translateX(${x}%) translateY(${y}%)`;
  }
  /*By calling the function setInterval it will changes its position every 3s */
  setInterval(changePosition, 3000);

  
   /*trying to solve the last bonus question*/
    let anagrams = [];

    /*This function return the anagram of a word*/
    function genAnagrams(word, anagram = ``) {
       /* checks if the word is empty. When empty, add the anagram to the anagrams array */
        if (!word) {
            anagrams.push(anagram);
          return;
      }
      for (let counter = 0; counter < word.length; counter++) {
        /* Concatenate the recurring letter to the anagram variable */
        anagram += word[counter];
        /* Recover over the function to pass the anagram without the letter that it's being used */
        genAnagrams(word.slice(0, counter) + word.slice(counter + 1), anagram);
          anagram = anagram.slice(0, anagram.length - 1);
          }
    }
    genAnagrams(`secret`);