let arr1=[5,1,2,7,8]
let arr2=arr1.sort(function(a,b){
   return a-b             //compare function 
})
console.log(arr2)


let arr3=arr1.sort(function(a,b){
  return b-a
})
console.log(arr3)



/*
The sort() method sorts the elements of an array.

The sort() method sorts the elements as strings in alphabetical and ascending order.

The sort() method overwrites the original array.
*/