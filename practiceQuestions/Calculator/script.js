const answerScreen=document.querySelector("#answerBox")
const calculatorBody=document.querySelector("#calculatorBody")
const operatorBody=document.querySelector("#operators")



for(let i=0;i<=9;i++){
 let NumButtons=`<button class="num" id=${i}>${i}</button>`
 calculatorBody.innerHTML+=NumButtons
}


 let plusBtn=`<button class="operatorBtn plusBtn" >+</button>`
 let minusBtn=`<button class=" operatorBtn minusBtn" >-</button>`
 let mulBtn=`<button class="operatorBtn mulBtn" >*</button>`
 let divBtn=`<button class="operatorBtn divBtn" >/</button>`
 let delBtn=`<button class="operatorBtn delBtn" >X</button>`
 let equalBtn=`<button class="operatorBtn equalBtn" >=</button>`


 
 let acBtn=`<button class="operatorBtn AC" >AC</button>`

 operatorBody.innerHTML+=(plusBtn+minusBtn+divBtn+delBtn+equalBtn+acBtn)

 equalBtn.addEventListener("click",()=>{
  console.log("Clicked")
})


 //handling click operations
 const buttons=document.querySelectorAll("button")
 buttons.forEach((button)=>{
  button.addEventListener("click",(e)=>{
    console.log(e)
    answerScreen.innerText+=e.target.innerText
  })
 })