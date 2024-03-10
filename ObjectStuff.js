'use strict';

const harry = { name: 'Bhaskar', age: 26}
harry.name = 'harry'
harry.salary = 100
console.log(harry)
delete harry.age
console.log(harry)

console.log(harry.supervisor) // undefined
const field = 'Salary'
const harrysSalary = harry[field.toLowerCase()]
console.log(harrysSalary)

const age = 42
const barry = {name: 'Barry allen', age}
console.log(barry)

// use string literals for property names that aren't identifiers
const cherry = { name: 'Cherry', 'favorite beer': 'IPA'}
console.log(cherry['favorite beer'])

// use [] to compute property names
const darry = {name: 'Darryl Smith', [field.toLowerCase()] : 42, }
// also ok to have trailing commas
console.log(darry)
console.log(darry.salary)

// sometimes a {} is interpreted by parser as an empty statement, not an object literal
// {} -1 is empty statement; 1-{}=NaN is empty object
