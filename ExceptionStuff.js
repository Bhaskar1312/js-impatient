// throw value to throw an exception
// can throw a value of any type
// customary to throw an object produced by Error function

function indexOf(arr, value) {
    if(!Array.isArray(arr)) throw Error('indexOf: arr not an array')
    for(const i in arr) {
        if(arr[i] === value) return i;
    }
    return undefined;
}
// indexOf('string', 1);
console.log(indexOf([1,2,3], 1))

/*
try {

    return true;
} finally {
// caution: Avoid return/break/throw in finally
    return false; // this will mask return true in try
}
 */

try {

// } catch (e) { // not use any specific error, can also be value
} catch {
    // not bothering to see what the error is
}