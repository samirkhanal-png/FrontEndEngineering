let arr3=[1,2,3,4,5]
function customFilter(arr,callback){
  let newArr=[]
  let j = 0
  for(let i=0;i<arr.length;i++){
    if(callback(arr[i],i)){
      newArr[j++]=arr[i]
    }
  }
  return newArr
}

let filterArr=customFilter(arr3,function(value,index){
   if(value%2==0){
    return true
   }
})

console.log(filterArr)


