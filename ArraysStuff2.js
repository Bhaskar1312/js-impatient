// Array(len) or new Array(len)
// Array with at least two elements [ele1, ele2];Array(ele1, ele2);new Array(ele1, ele2)
// Array.of(ele1, ...) works with single integer ele
// Array.from(iterable) like [...iterable]
// Array.from(iterable, mapFun, thisArg) transforms single source elements

let arr = Array.from('Hello', x=>x.toUpperCase())
console.log(arr)
console.log(arr.pop()) // remove last ele
console.log(arr.push('W')) // add ele to last
console.log(arr)
console.log("shift",arr.shift()) // removes first ele
console.log(arr.unshift('O')) // adds ele at first
console.log(arr)

// deleted = arr.splice(start, deleteCount, x1, x2, ...)
// if deleteCount > 0, elements are deleted at start
// if x1, x2, ... are present, they are inserted at start
// if deleteCount is absent, all elements from start on are deleted

arr = ['H', 'e', 'l', 'l', 'o', ..."world"]
start = 5; end = 7; target=2; //target is offset 0+ve from start, -ve from end [5,7) will be copied from offset 2
console.log(arr)
console.log(arr.copyWithin(target, start, end));

arr = [1,4,9,16,25]
console.log(arr.copyWithin(1)) // [ 1, 1, 4, 9, 16 ]
console.log(arr.copyWithin(0,1))// [ 1, 4, 9, 16, 16 ]

// length property is resizable in js
arr.length=10
console.log(arr) // [ 1, 4, 9, 16, 16, <5 empty items> ]

arr.length=5
arr.reverse();
console.log(arr)
arr.sort((x, y)=>x-y)
console.log(arr)

// if comparison func is not provided, elements are converted to strings, and then sorted by UTF-16 codePoints(bad even for strings)
arr.sort()
console.log(arr)

console.log(arr.includes(target=16, fromIndex=1));
console.log(arr.indexOf(target=16, fromIndex=0))
console.log(arr.lastIndexOf(target=16, fromIndex=-1))
console.log(arr)

// arr.slice(begin, end) // shallow copy
// arr.slice == [...arr]

// arr.concat(val1, val2); any array values are spread, shallow copy

console.log(arr.concat(1, {age:5}, [2,3,4], [[5], [6]]));
// [ 1, 16, 16, 4, 9, 1,{age:5}, 2, 3, 4, [ 5 ], [ 6 ]]

console.log(arr.join("-"))

//ES2019
arr = [[1,2], [3,4]]
console.log(arr.flat()) // new array
arr = arr.flat()
console.log(...arr.entries())

// arr.forEach(f)
arr = [1,4,9,16,25]
arr.forEach((element, index)=>console.log(`Hello ${element} at ${index}`))
//arr.map(f)
console.log(arr.map(x=>x+1))
// ES2019
console.log(['Hello', 'World'].map(x => [...x])) // [ 2 arrays]
console.log(['Hello', 'World'].flatMap(x => [...x]))

// arr.filter(f)
// arr.every(f)
console.log(arr.every(x=>Math.sqrt(x)*Math.sqrt(x)))
console.log(arr.every(x=>x%2===1)   )
console.log(arr.some(x=>x%2===1))
// arr.some(f)

console.log(arr.filter(x=>x%2===1))

// arr.find(f), arr.findIndex(f) finds the first element, or its index, for which f(element, index, arr) is true
console.log(arr.find(x=>x%2===0))
console.log(arr.findIndex(x=>x%2===0))


// arr.reduce(f)
console.log([1,2,3,4,5].reduce((x, y)=>x+y))
console.log([1,2,3,4,5].reduce((x, y)=>10*x+y)) // 12345
console.log([1,2,3,4,5].reduce((x, y)=>x-y)) // 1-2-3-4-5=-13
console.log([1,2,3,4,5].reduce((x, y)=>x-y, 0)) // 0-1-2-3-4-5=-15 initial val
console.log([1,2,3,4,5].reduceRight((x,y)=>x-y)) // f[n-1],f[n-2] 5-4-3-2-1=-5