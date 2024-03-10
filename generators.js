// tedious to write iterators that yield one value with each call to next
// function(*) is suspended after each yielded value
'use strict';

function* rangeGenerator(from, to) {
    for(let i=from; i < to; i++)
        yield i;
}

const rangeIter= rangeGenerator(1, 10)
console.log(rangeIter.next())
console.log(rangeIter.next())
rangeIter.return(undefined)

// const myObject = { * myGenerator(. . .) { . . . }, . . . }
// Syntactic sugar for myGenerator: function* (. . .) { . . . }

function* arrayGen(arr) {
    for(let ele of arr) yield ele;
}
let arr = [1,2,[1,[2]]]
let arrayIter = arrayGen(arr);
console.log(arrayIter.next())
console.log(arrayIter.next())
console.log(arrayIter.next())
console.log(arrayIter.next())

function* flatArrGenerator(arr) {
    for(let ele of arr) {
        if(Array.isArray(ele)) {
            // yield* ele;
            yield* flatArrGenerator(ele); // yield* means give iterable of ...
        } else {
            yield ele;
        }
    }
}
console.log('FlatArray')
arrayIter = flatArrGenerator(arr);
console.log(arrayIter.next())
console.log(arrayIter.next())
console.log(arrayIter.next())
console.log(arrayIter.next())
console.log(arrayIter.next())


// Generators as consumers
console.log('consumers')
function* sumAccum() {
    let sum =0;
    // let i=0;
    while (true){
        // console.log(i++)
        let nextVal = yield sum;
        sum += nextVal
    }
}

let accum = sumAccum()
console.log(accum.next()) // advance to the first yield
console.log(accum.next(1))
console.log(accum.next(2))
console.log(accum.next(3))
accum.return()