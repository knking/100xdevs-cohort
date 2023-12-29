let counterValue = 0;
function incrementCounter() {
  counterValue++;
  console.log(counterValue)

  // Schedule the next increment after 1000 milliseconds (1 second)
  setTimeout(incrementCounter, 1000);
}

// Start the counter
incrementCounter();