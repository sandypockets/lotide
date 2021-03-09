# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sandypockets/lotide`

**Require it:**

`const _ = require('@sandypockets/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: Checks if the contents of two arrays are equal, and return an assertion message.
* `assertEqual(...)`: Returns assertion message.
* `assertObjectsEqual(...)`: Checks if two objects contain equal contents, and returns an assertion message.
* `countLetters(...)`: Checks the number of occurrences of each letter in a string.
* `countOnly(...)`: Checks the number of occurrences a string (in this case a name) occurs in an array.
* `eqArrays(...)`: Checks if two arrays are equal.
* `eqObjects(...)`: Checks if two objects are equal. 
* `findKey(...)`: Scans the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(...)`: // Scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `flatten(...)`: Takes an array of nested arrays, and returns a single array, without any nesting.
* `head(...)`: Returns the first element of an array.
* `letterPositions(...)`: Returns the position of a particular letter/character.
* `map(...)`: Vanilla JS map function. Creates a new array populated with the results of calling the function on every element in the array it is called on. 
* `middle(...)`: Returns the middle element of an array. Arrays with odd numbers return one element, while arrays with even numbers return two elements. 
* `reverse(...)`: Reverses a word.
* `tail(...)`: Removes the head (first element) of an array, and returns the remainder of the array as is. 
* `takeUntil(...)`: The function will return a slice of the array with elements taken from the start of the array. It runs until the callback returns a truthy value.
* `without(...)`: Removes an element (supplied by you) to remove from the array, then returns the entire array without that specific element. 