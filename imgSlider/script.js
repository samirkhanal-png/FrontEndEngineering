const slides = document.querySelectorAll(".img");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const wrapper = document.querySelector("#wrapper-container");

let Index=0
let intervalId=null

function initializeSlider(){
   slides[Index].classList.add("displaySlide")
   intervalId=setInterval(nextSlide,3000)
}

document.addEventListener("DOMContentLoaded",initializeSlider)


function showSlider(Index){ //This is different Index since this is call by value
  // if(Index>=slides.length){
  //   Index=0 //Index is updated locally here only so the global Index is increasing more than 5 every time and is reset to 0 and shows the same image so we need to update it in that function only
  // }
  // else if(Index<0){
  //   Index=slides.length-1
  // }
  console.log(Index)

 slides.forEach(slide=>{
  slide.classList.remove("displaySlide")})
  slides[Index].classList.add("displaySlide")
}

function prevSlide(){
 Index--
 if(Index<0){
  Index=slides.length-1
}
 showSlider(Index)
}

function nextSlide(){
 Index++
 if(Index>=slides.length){
  Index=0 
}
 console.log(Index)
 showSlider(Index)
}

previous.addEventListener("click",prevSlide)
next.addEventListener("click",nextSlide)