const container=document.querySelector("#container")

const boxes=document.querySelectorAll(".box")

for(let box of boxes){
  if(checkPrime(Number(box.innerText))){
    box.style.backgroundColor="blue"
  }
  else if(box.innerText%2==0){
    box.style.backgroundColor="red"
  }
  else box.style.background="yellow"
}

function checkPrime(n){
  if(n<=1) return false 
  for(let i=2;i<=Math.sqrt(n);i++){
    if(n%i==0) return false
  }
  return true
}