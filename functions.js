
function average(x, y) {
    return (x + y)/2
}

let result = average(6, 7);
console.log(result) // 6.5
console.log(average('6', '7')); // str 67 -> 33.5


function indexOf(arr, val) {
    for(const i in arr) {
        if(arr[i] === val) return i;
    }
}
console.log(indexOf([1, 2, 3, 4], 3)) // 2 as string
console.log(indexOf([1, 2, 3, 4], -3)) // undefined

    //In js, can store functions in values; (...) invokes function; can return fns to fns
let f = average
const res = f(6, 7);
console.log(res)

f=Math.max
console.log(f(5,6))//6

// map takes fn param
console.log([0,1,2,3,4].map(Math.sqrt)) // [ 0, 1, 1.4142135623730951, 1.7320508075688772, 2 ]


function multiplyBy10(x) { return x*10}
console.log([0,1,2,3,4].map(multiplyBy10))

console.log([0,1,2,4].map(function (x){return 10*x}))

// arrow functions
console.log([0,2,4].map(x => 10*x))
average=(x, y)=>(x+y)/2
multiplyBy5 = x =>x*5

const dieToss = ()=>Math.trunc(Math.random()*6 +1)
console.log(dieToss())

indexOf=(arr, val) =>{
    for(const i in arr) {
        if(arr[i] === val) return i;
    }
    return undefined
}

// caution: use parenthesis when returning object literal, otherwise interpreted as block
const stats = (x, y) =>({
    average: (x+y)/2,
    max: Math.max(x, y)
})
console.log(stats(4, 6))
console.log([0,1,2, 4].map(Math.sqrt).map(x => x*x).map(x =>{id: x})) // [ undefined, undefined, undefined, undefined ]
console.log([0,1,2, 4].map(Math.sqrt).map(x => x*x).map(x =>({id: x}))) // id - label [ { id: 0 }, { id: 1 }, { id: 2.0000000000000004 }, { id: 4 } ]
