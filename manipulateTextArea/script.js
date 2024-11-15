const textBox=document.querySelector("textarea")
const select=document.querySelector("select")
const bold=document.querySelector("#Bold")
const italic=document.querySelector("#Italic")
const underline=document.querySelector("#Underline")

textBox.addEventListener("focus",()=>{
  let fontSize=select.value
  textBox.style.fontSize=fontSize+"px"
  if(bold.checked){
    textBox.style.fontWeight="bold"
  }
  else{
    textBox.style.fontWeight="normal"

  }

  if(italic.checked){
    textBox.style.fontStyle="italic"
  }
  else{
    textBox.style.fontStyle="normal"

  }
  if(underline.checked){
    textBox.style.textDecoration="underline"
  }
  else{
    textBox.style.textDecoration="none"
  }

})

