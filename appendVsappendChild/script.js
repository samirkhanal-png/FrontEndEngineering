//append
const parent = document.getElementById('parent');
const child = document.createElement('div');
child.textContent = 'Hello, World!';
parent.appendChild(child);


//appendChild
const child1 = document.createElement('div');
child1.textContent = 'Hello, ';
const child2 = document.createElement('div');
child2.textContent = 'World!';
parent.append(child1, child2, ' This is a string.');


/*
Summary of Differences
Arguments:

appendChild: Accepts only a single node.If you pass a non-node object (like a string), it will throw an error.

append: Accepts multiple nodes and/or strings.If you pass a string, it will be added as a text node.


Return Value:

appendChild: Returns the appended child node.
append: Returns undefined.
Flexibility:

appendChild: Less flexible, as it only works with nodes.
append: More flexible, as it can handle both nodes and strings.


By using cloneNode(true)=>deep copy of node we can append text by using appendChild

*/