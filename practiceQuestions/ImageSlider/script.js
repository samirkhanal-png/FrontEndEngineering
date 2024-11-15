const images=document.querySelectorAll("img")
const prevBtn=document.querySelector("#prevBtn")
const nextBtn=document.querySelector("#nextBtn")

console.log(images)

let index=0
let intervalId=null 


function initializeSlider(){
  images[index].classList.add("displaySlide")
  intervalId=setInterval(nextSlide,4000)
}

function showSlider(index){
 images.forEach((image)=>{
  image.classList.remove("displaySlide")
 })
 images[index].classList.add("displaySlide")
}

window.addEventListener("load",()=>{
  initializeSlider()
})

prevBtn.addEventListener("click",()=>{
 prevSlide()
})

nextBtn.addEventListener("click",()=>{
 nextSlide()
})

function nextSlide(){
  index++
  if(index>images.length){
    index=0
  }
  showSlider(index)
}

function prevSlide(){
  index--
  if(index<0){
    index=images.length
  }
  showSlider(index)
}