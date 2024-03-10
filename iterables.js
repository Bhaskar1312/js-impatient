// A value that appears in for-of loop must be iterable
for(let element of [1,2,3]) console.log(element)
for(let ch of 'Hello ') console.log(ch)

// A value is iterable if it has a property with key Symbol.iterator
console.log('Hello'[Symbol.iterator]) // [Function: [Symbol.iterator]]

const helloIter = 'Hello'[Symbol.iterator]()
console.log(helloIter.next())
console.log(helloIter.next())
console.log(helloIter.next())
console.log(helloIter.next())
console.log(helloIter.next())
console.log(helloIter.next())

// Array spread [...iterable]
// Array destructuring: [first, second, third] = iterable
// Array.from(iterable)
// Set and Map constructor: new Set(iterable)
// yield*
// Any place where a programmer makes use of the iterator constructed by [Symbol.iterable]

// Arrays, Strings, sets and maps,
// objects returned by keys/values/entries methods of arrays,typed arrays,sets&maps(but not Object)
// DOM data structures (run [...document.querySelectorAll('div') in the console