let arr1=[1,2,3,4,5]
arr1.forEach(function(value,index,array){  //third parameter refer to the original array
  console.log(value,index,array)
})

//if we change the value then changes will be made in the original number 

//forEach cannot be broken
//it does not leave without completely iterating the whole array

 arr1.forEach((value,index,array)=>{  //runs till iterating all the elements
  array.pop()
  console.log(array)
  console.log("hello")
 })

let arr2=arr1.map(function(value,index,array){
  return value*2
})
console.log(arr2)
//map creates a length of the similar length 

let arr3=arr1.map(function(value,index,array){
  if(value%2==0){
    return value               
  }
})

console.log(arr3)

//in the new array arr3 space is declared but nothing is returned in odd index so it has undefined

let arr4=arr1.filter(function(value,index,array){
  if(value%2==0){
    return value
  }
})
console.log(arr4)



//for each is used when we just need to use the values in the array
//map is used to bring the same change to the every element of the original array
//filter is used to filter the elements from the orignal array according to the given conditions and make a new subarray


