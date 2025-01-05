const apiURL = "https://feecq.github.io/api/users.json";

fetch(apiURL)
  .then((response) => {
    if (!response.ok) {
      return new Error(`Error has occured ${response.status}`);
    }
    return response.json();
  })
  .then((datas) => {
    datas.forEach((each) => {
      let p = document.createElement("p");
      p.innerHTML = `${each.name}`;
      document.body.appendChild(p);
    });
  })
  .catch((error) => console.error());

/*
In the provided fetch implementation using .then(), awaiting is not explicitly needed because .then() automatically chains asynchronous operations and ensures that the next step executes only when the promise resolves. The chaining mechanism of .then() inherently handles the asynchronous nature of the fetch request.

In contrast, when using async/await, explicit await statements are necessary to pause the execution until the promise resolves. Without await, the asynchronous operations would not complete before moving to the next line of code, potentially leading to unexpected behavior.

What Happens Behind the Scenes:
First .then(): The fetch() promise resolves with the response object. You then call response.json(), which returns a new promise.
Second .then(): This .then() doesn't execute immediately. It waits for the promise returned by response.json() to resolve. When it resolves, it provides the parsed JSON data to the callback in the second .then().


Why Use .then() for response.json() Separately?
The .json() method itself is asynchronous and returns a promise. If you try to handle the parsed data immediately within the same .then(), it can make the code harder to read, especially for more complex workflows.

Here’s the important part:

When you call response.json(), it returns a promise that resolves with the parsed JSON.
Handling that promise in a separate .then() ensures better organization.



*/
