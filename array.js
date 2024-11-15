let arr=[1,2,"string",[3,4,5],function(){console.log()}]
console.log(arr)


//we can insert an array as an element in the array(ie subarray)

//accessing the subarray from the main array
console.log(arr[3][0])

console.log(arr[4]())

//sparse array
//if something in the array is not initialized then it is considered as a sparse array since it contains empty slots in between
arr[6]="Tharki Subash"

console.log(arr)

//pushing an element at the last of the array
// arr[arr.length]="last element"

arr.push("last element")


//unshift inserts from beginning 
for(var i=arr.length-1;i>=0;i--){
  arr[i+1]=arr[i];
}
arr[0]="first element"
console.log(arr)

arr.unshift("first element") //shift in <- direction unshift in ->direction
console.log(arr)

//pop deletes the element from the end and returns that last element only 
var returned=arr.pop()
console.log(returned)


//shift deletes from beginning 
//logic for shift
// for(let i=1;i<arr.length-1;i++){
//   arr[i]=arr[i+1]
// }
// arr.length=arr.length-1; //decreasing the size

arr.shift(4)

//unshift adds new element to the beginning 

//splice insert and delete from any position
let arr1=[1,2,3,4,5]
//arguments(starting point,no of elements to delete,insert the element)
let returned1=arr1.splice(3,1) //returns the array of deleted elements
let index=arr1.indexOf(5) //useful in splicing helps to find the index from where we can delete or insert (very useful)
console.log(arr1)  //does the changes in the original Array
console.log(returned1)
console.log(index)


//slice returns the subarray of the array
// (includes the first index,excludes the third index)
let arr2=[1,2,3,4,5]
let subarr=arr2.slice(1,3)
console.log(arr2)
console.log(subarr)


//for of is used for accessing each and every element of the array
for(let value of arr){
  console.log(value)
}

//for in loop is used to access every index of the array
//this is useful when the index is not the number but the string for eg in object
for(let index in arr){
  console.log(index)
}


//initializing array using constructor
let arr3=new Array(5,4,3,2,1) //single argument determines the length of the array and multiple arguments store the elements
  console.log(arr3)

  //adding methods for array object
Array.prototype.iterate=function(){
  for(let i=0;i<this.length;i++){
    console.log(this[i])
  }
}

arr3.iterate()

