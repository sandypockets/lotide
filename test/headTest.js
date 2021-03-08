const head = require('../head.js');
const assertEqual = require('../assertEqual');

// Debugging
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([10]), 5);