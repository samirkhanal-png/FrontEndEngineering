var circle=(r)=>(2*3.14*r);
var rectangle=(l,b)=>(2*(l+b));
var triangle=(a,b,c)=>(a+b+c);
function perimeter(cbFunc,l,b,h){
 return cbFunc(l,b,h);
}

console.log(perimeter(circle,4));
console.log(perimeter(rectangle,4,5));
console.log(perimeter(triangle,4,5,6));

//always call the callback function first at the left and then call other things