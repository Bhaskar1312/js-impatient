// provide an instance method
// [Symbol.iterator]() {
// ...
// return {
//   next: ()=> {value:..., done: true/false}\
// // done: false, value: undefined - no need explicitly return
// }
// }

'use strict'
class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    [Symbol.iterator]() {
        let current = this.from;
        return {
            next: () => {
                if(current < this.to) {
                    const result = {value: current};
                    current++;
                    return result;
                } else {
                    return { done: true }
                }
            }
        }
    }
}

for(let i of new Range(1, 5)) {console.log(i)}

// closeable iterators
// If an iterator has a method called return(!), it is closeable.
// The return method is called when the iteration is terminated even though it hasn't reached the end
// for(let line in lines(fileName)) {
//     if(line.contains(target)) {
//         return line; //iterator.return() is called
//     }
// }

// ['return']: () => {
// ... // close the file
// return {done: true}// must return an object
// }
// If you use an iterator and manually call next on it, and if you abandon it before having received done: true, then you should call iterator.return().

