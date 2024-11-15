function sum(n){
  let sum=0
  while(n){
    let digit=n%10
    sum+=digit
    n=Math.floor(n/10)
  }
   return sum
  }

  console.log(sum(1234))