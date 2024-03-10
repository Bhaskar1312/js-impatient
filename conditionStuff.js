// x===y, x!===y
// if x and y dont have same type, then x!==y
// numbers, boolean values, strings compared by value
// undefined and null only equal to themselves
// object and array references are strictly equal if they refer to the same object

const harry ={name: 'harry', age:42}
const harry2 = harry
console.log(harry == harry2) // true
const harry3 ={name: 'harry', age:42}
console.log(harry == harry3) // false
harry2.age= 43
console.log(harry == harry2) // true
harry['salary'] = '50000'
console.log(harry == harry2) // true


console.log("('42' < 5)", ('42' < 5)) // 42 converted to int
console.log(" '' < 5 ", ( '' < 5 )) // '' converted to 0
console.log(" 'Hello' < 5 ", 'Hello' < 5 ) // 'Hello' is converted to NaN

console.log("[42] < 5", [42] < 5) // [42] is converted to number 42
console.log("[1,2,3]<{}", [1,2,3]<{}) // true, [] is converted to '1,2,3', {} to String '[Object, Object]'

// loose equality
console.log("''==0", ''==0) // '' is converted to 0
console.log("'0'==0", '0'==0) // '0' is converted to 0
console.log("'0'== false", '0'== false) // both are converted to 0
console.log("null==false",null==false) // null is only equal to itself and undefined
console.log("null==undefined", null==undefined) //
console.log("''=='0'", ''=='0') // no conversion, both are strings

// if(...) 0, NaN,null,undefined, '' are falsish, others are truish
console.log("0 && Harry", 0&&"Harry")
console.log("0 || Harry", 0||"Harry")


// const result1 = arg && arg.someMethod() // this is not working
// const result2 = arg2.someMethod || 0
// console.log("result", result1, result2)
