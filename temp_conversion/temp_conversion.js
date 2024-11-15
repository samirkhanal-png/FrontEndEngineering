var cTof=(a)=>((9/5)*a+32)
var fToc=(b)=>((b-32)*(5/9))
function tempConversion(a,cbFunc){
  return cbFunc(a);
}

console.log(tempConversion(40,cTof));
console.log(tempConversion(120,fToc));
