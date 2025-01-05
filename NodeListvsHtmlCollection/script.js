// NodeList vs HTMLCollection


const htmlCollection = document.getElementsByClassName('example-class');

const nodeList = document.querySelectorAll('div'); // static NodeList

nodeList.forEach(node => console.log(node)); 


Array.from(htmlCollection).forEach(element => console.log(element)); 

const liveNodeList = document.body.childNodes;
console.log(liveNodeList); 

const staticNodeList = document.querySelectorAll('p');
console.log(staticNodeList);

const liveHTMLCollection = document.getElementsByTagName('div');
console.log(liveHTMLCollection); // This will update as more <div> elements are added or removed


// Summary of Differences:
// NodeList:
// - Can contain all types of nodes (elements, text, comments).
// - Can be static or live, depending on how it's obtained.
// - Supports forEach() for static NodeLists.

// HTMLCollection:
// - Contains only HTML elements.
//Can iterate with traditional for loop.
// - Always live (updates automatically with DOM changes).
// - Does not directly support forEach(), needs conversion to an array.
