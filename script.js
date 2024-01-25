//your JS code here. If required.
// Function to update window size
function updateWindowSize() {
  // Get the width and height of the window
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Display the width and height
  console.log(`Window Width: ${width}, Window Height: ${height}`);
}

// Initial call to set window size on page load
updateWindowSize();

// Attach an event listener for window resize
window.addEventListener('resize', updateWindowSize);
