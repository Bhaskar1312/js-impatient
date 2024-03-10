// .load ./functionArgs.js //in command line
function average(x, y) {
    return y === undefined? x : (x+y)/2
}
console.log(average(2))
function average2(x=0, y=x) { // default arg
    return (x+y)/2
}
console.log(average2(3))
console.log(average2())
console.log(average2(null)) //0?
console.log(average2(1,2,3))


// capture extra args in `rest` parameter(rest - take seq, gather them in array)
function average3(...args) {
    let sum = 0;
    for(x of args) sum +=x;
    return sum/Math.max(1, args.length);
}
console.log(average3(1,2,3,4))

// console.log(average3([1,2, 3])) // Error!

// use spread operator if arguments are already in an array or iterable(spread, take array, give sequence)
console.log(average3(...[1,2,3]))

//spread also works inside array literals
let numbers = [1,2,3,5]
const clone = [...numbers] // copy, change clone, numbers won't change
const chars = [...'Hello 🌐']
console.log(clone)
console.log(chars)


// simulating named arguments with destructuring
mkstring(numbers, {leftDelimiter:'{', rightDelimiter:'}'})
function mkstring(array, config={}) {
    //look up properties and set defaults
    if(config.separator===undefined) config.separator=','
    console.log(config.leftDelimiter)
    for(i of array) {
        console.log(i, config.separator)
    }
    console.log(config.rightDelimiter)
}

// neat trick: use destructuring
function mkstring2(array,
                   {leftDelimiter = '[', rightDelimiter = ']', separator = ','}={}) {
    let res = leftDelimiter;
    for(const ele of array) {
        if(res!==leftDelimiter) res+=separator;
        res += ele;
    }
    res += rightDelimiter;
    console.log(res);
// return res;
}
mkstring2(numbers);
mkstring2(numbers, {separator:" and "});
mkstring2(numbers, {leftDelimiter:'{', rightDelimiter:'}'})