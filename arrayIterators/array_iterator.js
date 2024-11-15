let arr=[1,2,3,4,5,6,7]

function iterator(arr){
  for(let i=0;i<arr.length;i++){
    console.log(arr[i]) //hard coded cannot make any extra changes
  }
}

iterator(arr)

let arr1=[1,2,3,4,5]

function customIterator(arr1,callback){
  for(let i=0;i<arr1.length;i++){
    callback(arr1[i],i,arr1)
  }
}

// let operationOnArray=function(value,index,array){
//      console.log(value)
// }

customIterator(arr1,function(value,index,array){
  console.log("Value"+value)
  console.log("Index"+index)      //we can do any changes in the array
}
)


//custom iterator for map and filter 
let arr2=[1,2,3,4,5]
function customMapIterator(arr,callback){
  let newArr=[]
  newArr.length=arr.length
  for(let i=0;i<arr.length;i++){
   newArr[i]=callback(arr[i],i)
  }
  return newArr
}

customMapIterator(arr2,function(value,index){
   return value*2;      //returning the condition here
})



//custom filter made by myself

let arr3=[1,2,3,4,5]
function customFilter(arr,callback){
  let newArr=[]
  let newIndex=0
  for(let i=0;i<arr.length;i++){
    if(callback(arr[i],i)!=0){
      newArr[newIndex++]=callback(arr[i],i)
    }
  }
  return newArr;
}

let filterArr=customFilter(arr3,function(value,index){
   if(value%2==0){
    return value
   }
   else return 0;
})

console.log(filterArr)