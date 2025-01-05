//AJAX Asynchronous JavaScript and XML
/*
XMLHTTP Request(XHR) is a browser API that allows us to make HTTP requests
fetch
axios is used in nodejs
*/
let request=new XMLHttpRequest() //created a request object 
//can request and send limited amount of data with the help of  this request object
console.log(request)


request.open("GET","https://feecq.github.io/api/users.json") //get to fetch the data from the server post to send the data to the server
//this is just setting the request object headers


request.send() //request is sent

//at the moment in the response properties of the request object there is any value appearing then load event occurs

// request.addEventListener("load",()=>{
//   console.log(request.response)
//   let data=JSON.parse(request.response)
//   data.forEach(value=>{
//     let para=document.createElement("p")
//     para.innerText=value.name
//     document.body.appendChild(para)
//   })
// })

//console.log(request.response)   //before the response is loaded the response is undefined since this is a simple task it gets executed soon

//from less amount of data we can manipulate the whole page we do not need to send the entire html page

const button=document.querySelector("button")
button.addEventListener("click",()=>{
  request.open("GET","https://feecq.github.io/api/users.json") 

  request.onprogess=function(event){
    console.log("On progress events"+event.loaded,event.total)
  }
  //It’s important to attach the onprogress event before the send() method is called so that it can track the progress as the request is being processed.
  
  request.onerror=function(){
    console.log("Error has occured")
  }

request.send() 

request.addEventListener("load",()=>{
  console.log(request.response)
  let data=JSON.parse(request.response)
  data.forEach(value=>{
    let para=document.createElement("p")
    para.innerText=value.name
    document.body.appendChild(para)
  })
})
})

//Data gets loaded in chunks 
//onprogress event gets triggered after every amount of chunks get loaded
//onload gets trigerred when all the data is loaded

