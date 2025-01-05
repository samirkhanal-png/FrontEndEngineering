document.querySelector('.cloneButton').addEventListener('click', function() {
  // Get the original node using class
  const originalNode = document.querySelector('.original');

  // Number of times to clone the original node
  const numberOfClones = 5; // Change this number to clone more or fewer times

  // Get the target div using class
  const targetDiv = document.querySelector('.target');

  // Loop to clone and append the original node
  for (let i = 0; i < numberOfClones; i++) {
      // Clone the original node deeply
      const clonedNode = originalNode.cloneNode(true);
      
      // Optionally, you can modify the cloned node's content or attributes here
      clonedNode.querySelector('h2').textContent = `Cloned Box ${i + 1}`; // Change the heading for each clone

      // Append the cloned node to the target div
      targetDiv.appendChild(clonedNode);
  }
});