// NodeList vs HTMLCollection

// 1. Type of Elements:
// NodeList can contain any type of node (e.g., element nodes, text nodes, comment nodes).
// HTMLCollection contains only element nodes.

// Example:

// HTMLCollection: Only contains HTML elements
const htmlCollection = document.getElementsByClassName('example-class');

// NodeList: Can contain any node type, such as elements, text nodes, and comment nodes
const nodeList = document.querySelectorAll('div'); // static NodeList

// 2. Access Methods:
// NodeList can be accessed by index and also supports `forEach()` (for static NodeLists)
nodeList.forEach(node => console.log(node)); // This works directly with NodeList

// HTMLCollection does not directly support `forEach()`, but it can be converted into an array.
Array.from(htmlCollection).forEach(element => console.log(element)); // Convert HTMLCollection to Array to use forEach

// 3. Live vs Static:
// NodeList can be live or static, depending on how it's obtained.
// For example:
// `childNodes` returns a live NodeList (updates automatically if DOM changes)
const liveNodeList = document.body.childNodes;
console.log(liveNodeList); // This will update as DOM changes

// `querySelectorAll` returns a static NodeList (does not update after DOM changes)
const staticNodeList = document.querySelectorAll('p');
console.log(staticNodeList); // This will not update if DOM changes later

// HTMLCollection is always live, meaning it automatically updates when the DOM changes.
// For example:
const liveHTMLCollection = document.getElementsByTagName('div');
console.log(liveHTMLCollection); // This will update as more <div> elements are added or removed

// 4. Performance Consideration:
// Since HTMLCollection is live, accessing elements can have performance implications in large DOMs,
// as it tracks the DOM changes in real-time.

// NodeList can be more efficient (especially static ones) because they don’t need to track changes.

// Summary of Differences:
// NodeList:
// - Can contain all types of nodes (elements, text, comments).
// - Can be static or live, depending on how it's obtained.
// - Supports forEach() for static NodeLists.

// HTMLCollection:
// - Contains only HTML elements.
// - Always live (updates automatically with DOM changes).
// - Does not directly support forEach(), needs conversion to an array.
