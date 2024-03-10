//decimal 42, 0, 0.42
//exponential notation 6.023e23
// octal 0o52
// binary 0b101010
// old style 052 invalid in strict mode

// parseInt, toString have optional base argument (b/w 2 and 36)
console.log((1000).toString(16)) // 3E8
console.log(parseInt('3E8', 16)) // 1000

// 0, -0 are considered different by a few functions (Objects.is)
// Infinity, -Infinity, NaN

// static Number functions isFinite, isNaN
// Global Functions convert other types to Number First, so dont use them. isNaN('Fred'), isFinite([0]) are true
// static Number functions isInteger, IsSafeInteger
// Number instance methods for floating-point formatting toFixed, toExponential, toPrecision
console.log(Math.sqrt(2).toPrecision(6))//1.41421

console.log(
Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MIN_VALUE, Number.MAX_VALUE, Number.EPSILON, Number.NaN,
    Math.E, Math.PI, Math.SQRT2, Math.SQRT1_2, Math.LN2, Math.LN10, Math.LOG2E, Math.LOG10E
)

console.log(Math.imul(10, 20))
console.log(Math.clz32(1<<16)) // cnt of leading zeros
// other trig, math functions, ceil,trunc,

// BigInt - suffix n indicates BigInt
let n = 123456789098765432222222222221n
let offset =1;
// n + offset // Error cant mix bigInt and other types
console.log(n + BigInt(offset))

console.log(0===-0)// true
console.log(Object.is(0, -0)) // false