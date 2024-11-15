const h1Text=document.querySelectorAll("h1.test")
const pText=document.querySelectorAll("p.test")

for(let value of h1Text){
  if(value.innerText=="D_O_M"){
    value.innerText="Document Object Model"
    value.style.backgroundColor="red"
  }
}

for(let value of pText){
  if(value.innerText=="DOM"){
    value.innerText="Document Object Model"
    value.style.backgroundColor="blue"
  }
}
