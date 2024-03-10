'use strict'
// Array = object with property names '0', '1', '2', ...(string indices)
const numbers = [1,2,3,'many']
console.log(numbers['2'])
console.log(numbers[2]) // also legal, conversion to int

const numbers2 = [1,2,3,, 5, ,7,] // undefined = empty elements
console.log(numbers2['3'])
//trailing commas doesnt indicate a undefined element

//arrays are objects
numbers.lucky = true
console.log(numbers)

console.log(Array.isArray(numbers))

const arrString = '' + numbers // '1,2,3,many'
console.log(arrString)
