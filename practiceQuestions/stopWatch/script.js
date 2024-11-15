const start=document.querySelector("#start")
const stop=document.querySelector("#stop")
const reset=document.querySelector("#reset")
const timerBody=document.querySelector("#timer")

let hour=0
let  minute=0
let second=0
let id=null 

function updateTimer(){
  let hourStr=hour.toString().padStart(2,"0")
  let minuteStr=minute.toString().padStart(2,"0")
  let secondStr=second.toString().padStart(2,"0")

  timerBody.innerText=`${hourStr}:${minuteStr}:${secondStr}`
}

start.addEventListener("click",()=>{
  if(!id){
  id=setInterval(()=>{
    if(second<60){
      second++
    }
    else{
      second=0
      minute++
      if(minute==60){
        hour++
        second=0
        minute=0
      }
    }
    updateTimer()
  },1000)
}
})

stop.addEventListener("click",()=>{
  clearInterval(id)
  id=null
})

reset.addEventListener("click",()=>{
  second=0
  minute=0
  hour=0
  updateTimer()
  clearInterval(id)
  id=null 
})
