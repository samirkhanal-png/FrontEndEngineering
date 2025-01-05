/*
Language independent data-represenation method

Use:For data exchange between different technologies

JSON objects are similar to JS objects.

In JS objects key could be written with double quotes or without but here should be written inside double quotes.

Wow JSON cannot store functions.

This structure cannot be made in JS file.

Plain javascript cannot read or write files itself.

In front end, we can read and write file through these methods:

One way: We can read through server.

Second way: Web Storage
            Fetch api

*/
const inputField=document.querySelector('#inp')
const btn=document.querySelector('#btn')

//Retrieving the task when refreshed in form of array
const fetchedData=localStorage.getItem("task")


let tasks

if(fetchedData){
 tasks=JSON.parse(fetchedData)
console.log("Fetched"+tasks)
}
else tasks=[] 
//at the end we have to run forEach so that there is no error

//Iterating all the array items and creating a logic
tasks.forEach((task)=>{
  const para=document.createElement('p')
  para.innerText=task
  document.body.appendChild(para)
})

let taskArray=[]

btn.addEventListener('click',(e)=>{
   let userInput=inputField.value
   console.log(userInput)

   //Storing the task in the data structure
  taskArray.push(userInput)
  console.log(taskArray)

  //Stringified array
  const stringifiedArray=JSON.stringify(taskArray)
  console.log("stringified"+stringifiedArray)

  //Parse into normal form
  const parsedArray=JSON.parse(stringifiedArray)
  console.log("Parsed Array"+parsedArray)

  //setting data into localStorage
  localStorage.setItem("task",stringifiedArray)

   const para=document.createElement('p')
   para.innerText=userInput
   console.log(para)
   document.body.appendChild(para)

   //Clearing the inputField after completing all the tasks 
   inputField.value=""
})

/*
JavaScript cookies are utilized by websites to store small data fragments on a user's browser. These fragments serve the purpose of retaining user-related information or monitoring their browsing behavior.

When we open the website for the website then the request goes to the server first. Then cookies are also transmitted to the server and responses are produced according to this.

It is also used for storing credentials and authentication.

Local Storage
In local storage data is stored in the form of JSON but represented in the table in the form of key value pair.

Session storage
The structure of the local storage and session storage is same but the data is maintained only in the particular session(i.e according to the timer,until the tab is open)

Before local storage
We push all the data into a single data structure i.e array so that we do not have to make multiple variables.

LocalStorage is JSON file

So when we keep any data into localStorage we need to convert it into JSON string encoding

Convert data from other formats into JSON string format.

Again while retrieving the data from the localStorage we may need to convert it into the normal form

JSON.parse(stringifiedItems in localStorage)

We can store without stringifying but while retrieving we may not get the data in the data structure which we passed into localStorage

Debug
Cannot read properties of null
for Each

If there is no data in the localStorage and we fetch it we get null

and if we iterate using forEach here then it will not be iterated

*/
