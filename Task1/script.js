const container=document.querySelector("#colorBox")
const colors=document.querySelector(".color")

window.addEventListener("click",(e)=>{
  container.style.background=`${e.target.innerText}`
})

