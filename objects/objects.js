//Object is used to store the multiple attributes of single entity

//Declaring object
let obj = {
  name: "John",
  id: 1,
  rollNo: 2311981627,
  arr: [1, 2, 3, 4],
  obj1: {
    firstName: "Samir",
    lastName: "Khanal",
    "friend Name": "Krishnesh", //if we want to write key in invalid way like in multiple words having space between words
    func: function () {
      console.log("Hello World");
    },
  },
};

//Do not forget comma after key value pair

let arr = [1, 2, 4];
/*
Note:array is also an object 
It contains keys in form of number
*/
console.log(arr);

//See in the console we have similar structure as object

//Accessing the object's key values
console.log(obj.name);

//Accessing the element inside the array in object
console.log(obj.arr[2]);

//Accessing the object's element inside the nested object

console.log(obj.obj1.firstName);

//Accessing the key-value pair having key as string
console.log(obj.obj1["friend Name"]);

//If we are using [] to access a key_value pair we need to keep it inside "
//While using dot to access the key_value pair we do not pass key inside string it is invalid

//gives the object's function definition
console.log(obj.obj1.func);

//calling the function inside the object using .operator
obj.obj1.func();

//Adding new key value pair inside the object
obj.obj1.address = "Chitkara";

//Iterating an object by for of is wrong
/*for(let value of obj){
  console.log(obj);
}*/

//for of is applied only in array as it works with the help of index no so this gives error
//we iterate an object using for in loop
for (let key in obj) {
  //key variable is bringing keys in form of string so no need to apply []] //dot operator cannot access the string keys
  console.log(obj[key]); //Now we have key so we can access the obj properties value
}

//Object is made for single user

//What to do for multiple user?
/*
Make an array of objects
or
Maybe make an object of object
*/
