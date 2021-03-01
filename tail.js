const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let tailArr = [];
  for (let i = 1; i < arr.length; i++) {
    tailArr.push(arr[i]);
  }
  return tailArr;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Debugging
console.log(result); // Ensuring array is not modified.
const words = ["Yo Yo", "This is Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // Original array still has 3 elements.
// Confirming that an empty array returns the expected result.
const moreDubugging = [];
tail(moreDubugging);
assertEqual(moreDubugging.length, 0);