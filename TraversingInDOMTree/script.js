//Traversing the DOM node downwards with the help of children

const div=document.querySelector(".main")
const children=div.children 
//returns an HTMLCollection of all the element nodes (HTML tags) that are the direct children of the specified element.

const children1=div.childNodes
console.log(children1) //returns nodelist (array like structure) of direct children as well as also returns text nodes(empty space)

//new line after every children is considered as text node

console.log(children)  //returns direct children not the subchildren and returns only html tags

//children is preferred over childNodes 

console.log(children[1].children[3].children[0])

const head=document.getElementById("nesting")
//const parent=head.parentNode
const parent=head.parentElement.parentElement
console.log(parent)

console.log(head.parentNode.parentNode)

//Both parent element and parentNode works similarly except of the below case.


//Difference between parent element and parent node
const html=document.querySelector('html')
console.log(html.parentElement) //null 
console.log(html.parentNode) //document object

//we prefer parentElement over parentNode

//Getting the first child of the element as container.children[0] may return error
const container=document.getElementById("container")
console.log(container.firstElementChild)//only considers html element as child and not text node
console.log(container.firstChild) //may also return text node as it considers text node as child

//Access img 2 from the nesting node
const nesting=document.getElementById("nesting")
console.log(nesting.parentElement.parentElement.children[1])

//Access img 3 from 
const img=document.querySelector(".img2")
console.log(img.nextElementSibling)
console.log(img.previousElementSibling)

//Why traverse DOM?
/*
Instead of creating multiple variables and assigning them the elements which takes up the memory 

we can traverse the DOM with the help of single element in the DOM and apply logic in that which does not take up memory
*/

nesting.addEventListener("click",function(event){
  console.log(event.target.parentElement.parentElement.children[0])
  //We can stop the extra traversing
  console.log(event.target.parentElement.previousElementSibling.children[0])
})

//append appends multiple child whereas appendChild appends a single child

