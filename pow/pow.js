function power(a,b){
  let ans = 1;
  for(let i=1;i<=b;i++){
    ans = ans * a
  }
  return ans
}

console.log(power(2,3))