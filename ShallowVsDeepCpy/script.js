const original1 = { a: 1, b: { c: 2 } };
const shallowCopy1 = Object.assign({}, original1);

shallowCopy1.a = 10; // This will not affect original
console.log(original1)

shallowCopy1.b.c = 20; // This will affect original

console.log(original1); // Output: { a: 1, b: { c: 20 } }

const original2 = { a: 1, b: { c: 2 } };
const shallowCopy2 = { ...original2 };

shallowCopy2.a = 10; // This will not affect original
console.log(original2)

shallowCopy2.b.c = 20; // This will affect original

console.log(original2); // Output: { a: 1, b: { c: 20 } }

/*
A shallow copy creates a new object that is a copy of the original object, but it only copies the references to the nested objects. This means that if the original object contains nested objects, changes to those nested objects in the copied object will also affect the original object.
*/

/*
A deep copy creates a new object and recursively copies all properties and nested objects from the original object. This means that changes to the nested objects in the copied object do not affect the original object.

*/
//Deep Copy
const original3 = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original3));

deepCopy.a = 10; // This will not affect original
deepCopy.b.c = 20; // This will not affect original

console.log(original3); // Output: { a: 1, b: { c: 2 } }