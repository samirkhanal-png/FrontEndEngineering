function isPrime(n){
  var prime=true
  if(n==1) return "Not Prime"
  for(var i=2;i*i<=n;i++){
    if(n%i==0){
      prime=false
      break
    }
  }
if(prime){
  return "Prime"
}
else return "Not Prime"
}

console.log(isPrime(9))