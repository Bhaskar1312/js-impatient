'use strict';
// customizing Object.toString()
// Object.toString() returns [object, Object] without overriding toString, novel way is below
class Employee {
    get [Symbol.toStringTag]() {
        return this.constructor.name; //'Employee'
    }

}
const e = new Employee();
console.log(e.toString())

// Controlling primitive collection
class Percent {
    constructor(rate) {
        this.rate = rate
    }
    toString() {
        return `${this.rate}%`
    }
    valueOf() {
        return this.rate*0.01;
    }

    [Symbol.toPrimitive](hint) {
        if(hint === 'number') return this.rate = 0.01
        else return `${this.rate}%`
    }
}
const percent = new Percent(25)
console.log(percent, percent.toString(), 150*percent)

console.log(''+new Percent(99.44)) // 0.9944, why not 99.44%
// The + operator uses the valueOf method when it is available. The remedy is to add a method with key Symbol.toPrimitive


// species
class MyArray extends Array {}
let myValues = new MyArray(1, 2, 7, 9)
console.log(myValues.map(x => x * x)) // Yields a MyArray

class Range extends Array {
    constructor(start, end) {
        super()
        for (let i = 0; i < end - start; i++)
            this[i] = start + i
    }
    static get [Symbol.species]() { return Array }
}
const myRange = new Range(10, 15)
console.log(myRange.map(x => x * x)) // Shouldn't be range, but should be an array
// So override Symbol.species

// Symbol.hasInstance, Symbol.isConcatSpreadable
// Symbol. match, replace, search, split are called from String methods with the same name
// For matching against something other than a regex e.g: a glob
