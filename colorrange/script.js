let box=document.querySelector("#box")
let redSlider=document.querySelector("#red")
let blueSlider=document.querySelector("#blue")
let greenSlider=document.querySelector("#green")

let red=0
let blue=0
let green=0

redSlider.addEventListener("input",()=>{
  red=redSlider.value
  createUi()
})

blueSlider.addEventListener("input",()=>{
  blue=blueSlider.value 
  createUi()
})

greenSlider.addEventListener("input",()=>{
  green=greenSlider.value
  createUi()
})


function createUi(){
  box.style.background=`rgb(${red},${green},${blue})`
}


