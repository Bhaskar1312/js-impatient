//destructuring arrays


const numbers = [1,2,3,4,5]
let [first, second, ...remaining] = numbers
// short for first=numbers[0], second=numbers[1]
console.log(first, second); // destructuring prior statement without semi-colon,giving error

[second, first] = [first, second]
console.log(first, second);

[f,s,others] = [3]
console.log(f)
console.log(s)
console.log(others)

const harry = {name: 'Harry', age:42}
let {name: harrysName, age: harrysAge} = harry //syntactic sugar
console.log(harrysName, harrysAge)
let {name, age} = harry
// common to use variable name = property name
console.log(name, age);

const harry2= {name2: 'harry', age:43}
let {name2, ...rest} = harry2
console.log("name>>",name2)
console.log("rest",rest);

//default is used when there is no matching property or its value is undefined
let {name3 = 'None', age3=age , ...rest3 } = harry2
console.log(name3)
console.log(age3) // here age is using default of previously defined val
console.log(rest3)

const config = {separator: ";"}
const {separator= ',', leftDelimiter= '[', rightDelimiter= ']'} = config
console.log("separator",separator)
console.log("leftDelimiter", leftDelimiter)
console.log("rightDelimiter", rightDelimiter);

// if you destructure into existing variables, use parenthesis
const sally = {name: 'sally', age: 32};
// ({name, age}) = sally // is giving invalid left-hand side in assignment error
({name, age} = sally)
console.log(name, age)

//destructure nested objects
const alan = {name: 'alan', birthday: {day: '07', month: '06', year: '1954'}}
const {birthday: {year: alansBirthyear}} = alan
console.log("alan", alansBirthyear)


// expressions and statements
// certain statements are terminated by semicolons: expressions, variable declarations, non-linear control flow(break,continue, return, throw)
// semicolons are automatically inserted if they are not supplied
// basic rule: semicolon inserted before "offending token" - sth that could be part of stmt;preceded by line terminator;or } at the end of the stmt
const a = 1
+ parseInt(alansBirthyear) // not offending, so ; is not placed after x
const b = a-1; // const is offending - semicolon is placed before const b
console.log(a, b)

// more obscure rules -semicolons inserted (very dangerous)
// before ++, --, or => immediately preceded by line terminator
// after break, continue, return , throw, or yield immediately followed by a line terminator
/*
return
parseInt(alansBirthyear) //dont break lines like this
 */



