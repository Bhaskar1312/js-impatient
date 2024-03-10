'use strict'
// name of function; for anonymous variable name
function multiply(x, y) { return x*y}
// bind lets you curry a function by specifying its initial arguments
const double = multiply.bind(null, 2);
console.log(double(42)) // 84
console.log(double.name) // bound multiply

// The first argument is bound to this
const isPet = Array.prototype.includes.bind(['cat', 'dog', 'fish'])
// same as x => ['cat', 'dog', 'fish'].includes(x)

// Bind this in callback to another method of the same class:
// button.onclick = this.onclick.bind(this) or button.onClick = (...args) => this.handleClick(...args)

// `call` and `apply` invoke functions and methods programmatically
// why not just call f(args) or obj.f(args)
// call calls a method with a different this
const spacedOut = Array.prototype.join.call('Hello', ' ')
console.log(spacedOut)
// console.log('Hello'.join(' ')) // error because join is not a method of the String class. It is a method of the Array class that happens to work with strings.

//The call method is similar to bind. However, all arguments are supplied, and the function or method is invoked.
console.log(multiply.call(null, 6, 7)) // multiply(6, 7)]

// apply is like call, but the arguments other than this are in an array (or array-like object)
console.log(String.prototype.substring.apply('Hello', [1, 4]))

// If you need to apply an arbitrary function, stored in a variable f, to arbitrary arguments,
// it is simpler to use the expression f(...args) instead of f.apply(null, args).
// But if the variable f holds a method, then you have no choice. You cannot call obj.f(...args) and must use f.apply(obj, args).


// Before JavaScript had the super keyword, you had to use bind, call, or apply to invoke a superclass constructor