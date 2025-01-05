/*
Object.freeze
Purpose: Prevents any modifications to an object.
Effects:
The object cannot be modified: properties cannot be added, removed, or changed.
The object is made immutable.
Existing properties cannot be reconfigured (i.e., their descriptors cannot be changed).
Usage: Use Object.freeze when you want to ensure that an object remains constant and cannot be altered in any way.

*/
const obj = { name: 'Alice' };
Object.freeze(obj);

obj.name = 'Bob'; // This will not change the name property
console.log(obj.name); // Output: 'Alice'

obj.age = 25; // This will not add a new property
console.log(obj.age); // Output: undefined


/*
Object.seal
Purpose: Prevents the addition or removal of properties from an object but allows modification of existing properties.
Effects:
The object cannot have new properties added or existing properties removed.
Existing properties can still be modified (i.e., their values can be changed).
The property descriptors of existing properties can be changed, but not to make them configurable or non-writable.
Usage: Use Object.seal when you want to prevent the structure of an object from changing but still allow the values of its properties to be modified.

*/

const obj2 = { name: 'Alice' };
Object.seal(obj);

obj2.name = 'Bob'; // This will change the name property
console.log(obj2.name); // Output: 'Bob'

obj2.age = 25; // This will not add a new property
console.log(obj2.age); // Output: undefined

delete obj2.name; // This will not remove the name property

console.log(obj2.name); // Output: 'Bob'

/*
If we freeze then we cannot change anything without destroying anything in it

Suppose we have a question paper inside a seal we can change some content in it but cannot change the whole content
*/