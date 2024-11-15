var value1=10;
var value2="20";
console.log(value1+value2); //addition operator "string"+"number"=>concatenates and converts it into string 

//but every other operators converts numbers inserted as string into actual numbers
console.log(value1*value2)

// value2++
// console.log(value2)

var result=value2++ //first assign then increase
console.log(result)

var a=10;
var b=10;
console.log(a>b);

var c=10;
var d="10"
console.log(c==d) //returns true since it only checks the values
//loose equality does not check the datatype


console.log(c===d) //returns false since it checks the values as well as the data type