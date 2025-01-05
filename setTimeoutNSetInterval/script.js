//Schedule function execution after fixed amount of time
let loggedIn=false
let id=NULL
if(loggedIn){
 clearTimeout(id)
}
else{
  id=setTimeout(function(){
    console.log("Hello")
  },1000)
}

//We want to cancel the scheduled function
// For example: We had setTimeout after 5 minutes the user has visited but the user is already logged in so in this condition we cancel the scheduled function

const button=document.querySelector("#btn")
let count=1
button.addEventListener("click",()=>{
 //repeatedly execute any task after 1s 
rEvent=setInterval(()=>{
  let h2=document.createElement("h2")
  h2.innerText=`${count} seconds has passed`
  document.body.appendChild(h2)
  count+=1
},1000)
if(count==60){clearInterval(rEvent)}
 //6 times in a minute
})

