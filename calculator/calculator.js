var sum=(a,b)=>(a+b)
var sub=(a,b)=>(a-b)
var mul=(a,b)=>(a*b)
var div=(a,b)=>(a/b)

// function calculate(n1,operator,n2){
//   switch(operator){
//     case "+":
//       return sum(n1,n2)
//     case "-":
//       return sub(n1,n2)
//     case "*":
//       return mul(n1,n2)
//     case "/":
//       return div(n1,n2)
//   }
// }
// console.log(calculate)
// console.log(calculate(10,"+",20))
// console.log(calculate(10,"-",20))

//Lets do it using callback function 
//makes the code shorter yippee 
function calculate(n1,n2,opFunction){
  return opFunction(n1,n2);
}

console.log(calculate(20,30,sub))