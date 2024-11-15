//forEach,map and filter are available only in the array prototype so we cannot use it for strings 

let str="string in Javascript"

let arr=Array.from(str) //converts string into array by placing each char in each index

console.log(arr)

//split is used to split the string word wise
let arr1=str.split(" ") //separate strings based on delimeter and keep it inside the array 
console.log(arr1)

let str2=arr1.join("-")
console.log(str2)
//join is used to join the different elements of an array and convert it into a single string 

//slice returns substring
let a=str.slice(1,3) //goes upto less than 3 that is upto 2
console.log(a)

console.log(str.charAt(2))