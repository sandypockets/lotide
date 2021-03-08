const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Debugging
// Ensuring array is not modified.
console.log(result); 
const words = ["Yo Yo", "This is Lighthouse", "Labs"];
tail(words);

assertEqual(words.length, 3); // Original array still has 3 elements.

// Check if empty array returns expected result.
const moreDubugging = [];
tail(moreDubugging);
assertEqual(moreDubugging.length, 0);