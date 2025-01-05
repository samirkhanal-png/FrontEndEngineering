// function doSomething(){
//   const head=document.querySelector("h1")
//   head.innerText="Document Object Model"
//   head.style.color="red"
//   head.setAttribute("id","heading")
// }

//It is better not to use attributes for handling events
//It is better to handle all the functionalities in javascript files

const head=document.querySelector("h1")

//Binding function to the html tag attribute on the basis of particular event in js
// head.onclick=function(){
//   const head=document.querySelector("h1")
//   head.innerText="Document Object Model"
//   head.style.color="red"
//   head.setAttribute("id","heading")
// }

//addEventListener listens to the events applied to the particular instance and runs the callback function
head.addEventListener("mouseenter",function(){
  const head=document.querySelector("h1")
  head.innerText="Document Object Model"
  head.style.color="red"
  head.setAttribute("id","heading")
  console.log('mouseenter')

})

//Callback function takes event object as the parameter
//Event object contains information about the event like:which key is pressed
//For eg we want to submit the form when enter key is pressed
const input=document.querySelector("input")
input.addEventListener("keypress",function(event){
   //console.log(event)
   console.log(event.target) //gives the element on which event is applied
   console.log(event.key)
   if((event.key)=="A"){
    console.log("A key is pressed")
   }
   else console.log("A key is not pressed")
})

//creating elements dynamically
// const para=document.createElement("p")
// para.innerText="Document Object Model"
// para.setAttribute("class","para")
// para.style.color="red"

//this tag is created but not visible in the html page now we need to append it inside the DOM as a children of body
/*
           HTML

Head                   Body

                     h1      input    append in the body
*/

// document.body.appendChild(para)

// head.addEventListener("click",(event)=>{
// const para=document.createElement("p")
// para.innerText="Document Object Model"
// para.setAttribute("class","para")
// para.style.color="red"
// document.body.appendChild(para)
// })

const para=document.createElement("p")

head.addEventListener("click",(event)=>{

  para.innerText="Document Object Model"
  para.setAttribute("class","para")
  para.style.color="red"
  div.appendChild(para) //element selected by query selector and appending the child in that 
  })

/*
append(): Can insert multiple nodes and text strings as its arguments. It inserts nodes or text at the end of the element.

appendChild(): Inserts only a single node as its argument, and it must be a node object (cannot insert text directly).
*/

let count=0
let sumCount=0
const sum=document.querySelector("div.sum>h1")
head.addEventListener("click",(e)=>{
  const div=document.querySelector("div.question")
  const para=document.createElement("p")
  para.innerText=`${count+=10}`
  sumCount+=count
  sum.innerText=`Sum:${sumCount}`

  div.appendChild(para)
})


/*
When creating and appending elements dynamically (like your para), if you need to attach event listeners to these new elements, you should either:
Add the event listener after the element is created and appended.
Use event delegation to handle events on dynamically added elements.

If you dynamically create elements and attach event listeners to them, be mindful of memory leaks. When elements are removed from the DOM but their event listeners remain in memory, this can cause a leak. To avoid this, make sure to remove event listeners when the elements are no longer needed:


With the onclick attribute or head.onclick, only one function can be attached to handle the event, and assigning a new function will overwrite the previous one. But with addEventListener(), you can attach multiple event handlers to the same element for the same event without overwriting each other. This means each event handler will run independently when the event occurs.

*/