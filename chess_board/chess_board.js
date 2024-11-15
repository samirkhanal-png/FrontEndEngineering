for(let i=0;i<8;i++){
  let str=""
  for(let j=0;j<8;j++){
    if((i+j)%2==0){
      str+="*"
    }
    else{
      str+="#"
    }
  }
console.log(str)
}