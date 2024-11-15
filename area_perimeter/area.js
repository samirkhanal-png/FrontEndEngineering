var circle=(r)=>{
  return `area:${3.14*r*r}\nperimeter:${2*3.14*r}`
}
var rectangle=(l,b)=>{
  return `area:${l*b}\nperimeter:${2*(l+b)}`
}
var triangle=(b,h)=>{
  return `area:${0.5*b*h}\nperimeter:${b+b+h}`
}
function area(cbFunc,l,b){
  return cbFunc(l,b)
}

console.log(area(circle,5))
console.log(area(rectangle,4,5))
console.log(area(triangle,4,5))

//From left to right the parameters are passed okay remember this 
//can also use rest parameter to pass variable number of arguments