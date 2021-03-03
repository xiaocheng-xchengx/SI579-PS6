// Note: the last function uses Moment.js to represent the dates in different
// formats. Please click the shuffle icon next to "Important Timelines" to see
// what the function does.
import moment from 'moment';

let darkModeButton = document.getElementsByClassName("darkMode");
let lightModeButton = document.getElementsByClassName("lightMode");
let sections = document.getElementsByTagName("section");
let shuffle = document.getElementsByClassName("shuffle")[0];
let themeNum = 0;
let counter = 0;

window.addEventListener('load', (event) => {
  lightModeButton[0].classList.add("colorful");
  themeNum = 1;
});

lightModeButton[0].addEventListener('click', (event) => {
  document.body.removeAttribute("class");
  lightModeButton[0].classList.add("colorful");
  darkModeButton[0].classList.remove("colorful");
  themeNum = 1;
});

darkModeButton[0].addEventListener('click', (event) => {
  document.body.setAttribute("class", "dark");
  document.getElementsByTagName("footer")[0].getElementsByTagName("p")[0].style.color = "black";
  darkModeButton[0].classList.add("colorful");
  lightModeButton[0].classList.remove("colorful");
  themeNum = 2;
});

shuffle.addEventListener('click', (event) => {
  var currentDate = moment();
  var bornDate = moment("05-23-1997", "MM-DD-YYYY");
  var collegeDate = moment("08-20-2015", "MM-DD-YYYY");
  var graduateDate = moment("05-20-2019", "MM-DD-YYYY");
  if(counter === 0){
    document.getElementsByClassName('born')[0].innerHTML = (bornDate.diff(currentDate, 'days'))*-1 + " days ago from today"
    document.getElementsByClassName('college')[0].innerHTML = (collegeDate.diff(currentDate, 'days'))*-1 + " days ago from today"
    document.getElementsByClassName('graduate')[0].innerHTML = (graduateDate.diff(currentDate, 'days'))*-1 + " days ago from today"
    counter = 1;
  }else if (counter === 1){
    document.getElementsByClassName('born')[0].innerHTML = (bornDate.diff(currentDate, 'months'))*-1 + " months ago from today"
    document.getElementsByClassName('college')[0].innerHTML = (collegeDate.diff(currentDate, 'months'))*-1 + " months ago from today"
    document.getElementsByClassName('graduate')[0].innerHTML = (graduateDate.diff(currentDate, 'months'))*-1 + " months ago from today"
    counter = 2;
  }else if (counter === 2){
    document.getElementsByClassName('born')[0].innerHTML = (bornDate.diff(currentDate, 'years'))*-1 + " years ago from today"
    document.getElementsByClassName('college')[0].innerHTML = (collegeDate.diff(currentDate, 'years'))*-1 + " years ago from today"
    document.getElementsByClassName('graduate')[0].innerHTML = (graduateDate.diff(currentDate, 'years'))*-1 + " year ago from today"
    counter = 3;
  }else if (counter === 3){
    document.getElementsByClassName('born')[0].innerHTML = "05-23-1997";
    document.getElementsByClassName('college')[0].innerHTML = "08-20-2015";
    document.getElementsByClassName('graduate')[0].innerHTML = "05-20-2019";
    counter = 0;
  }
})
