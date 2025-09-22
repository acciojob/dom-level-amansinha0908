//your JS code here. If required.
const element = document.getElementById("level");

let level = 0;
let current = element;

// Traverse up through all parent nodes until reaching <html>
while (current) {
  level++;
  current = current.parentElement;
}

// Show the result
alert("The level of the element is: " + level);