// write your JS code here
function totalStringElement(arr){
  let count=0
  for(let i=0;i<arr.length;i++){
    if(typeof(arr[i])==="string"){
      count++
    }
  }
  return count
}

console.log(totalStringElement([1,2,"Nepal","India",3,4]))