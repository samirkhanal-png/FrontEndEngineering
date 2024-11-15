console.log(window); //window object is created by browser and is the object for current tab of the browser

console.log(window.document); //whole html page is displayed in language of html

console.dir(window.document); //all the information related to html page is displayed in form of object

//Javascript can manipulate objects only so browser converts html page in the form of object which is called Document Object Model

//All the information related to html tags and methods to manipulate are stored in the document object

//Accessing html element /task
let head = document.querySelector("h1");

console.dir(head); //heading tag is converted in form of object with the help of browser

//HTML page is still untouched changes is just done in the Document Object Model
head.innerText = "Document Object Model";

//query selector only returns the first occurence of the element

//If we want to select multiple elements then use querySelectorAll

let heading = document.querySelectorAll("h1");
//returns an array like data structure i.e Nodelist which contains all the nodes that is matched

console.dir(heading);

//select element on the basis of id
let headId = document.getElementById("heading");
console.dir(headId);

//select element on the basis of class
let headCl = document.getElementsByClassName("head");
console.dir(headCl);

//select the element on the basis of tagName document.getElementByTagName("h1")
let container = document.getElementById("container");

//Textual Content + Tags
console.log(container.innerHTML);

//Textual Content Only No tags all the tags are removed

console.log(container.innerText);

//container.innerHTML="<button>CLick Me</button>" Overrides the previous HTML tags

container.innerHTML += "<button>Click Me</button>";
//adds new HTML tag to this new one tag

//container.innerText+="<button>My name is Samir </button>"

/****  Changing or adding attributes  *******/
//setting the values of the attribute of the html tags
container.setAttribute("class", "box");

/*** All the styles inside the container are stored in its object in form of object only We just have to set its values *****/
container.style.color = "blue";
container.style.backgroundColor = "ghostwhite";

//Inline styles has the highest priority so if the styles are made inline then the changes made by javascript may not appear

/*** Solving the question ****/
let numbers = document.querySelectorAll("p.num");
let sum = 0;
for (let number of numbers) {
  sum += Number(number.innerText); //can also user parseINt
  console.log(sum);
}
let ans = document.getElementById("ans");
ans.innerText = sum;
