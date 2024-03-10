// for-of - iterable
const arr = [1,2, , 5, undefined]
arr[15] = 400
for(const ele of arr) {
    console.log(ele)
}

const greeting = "Hello 🌐"
for(const c of greeting) {
    console.log(c)
}

// for in loop - keys rather than values
const obj = {name:'harry Smith', age:42}
for(const key in obj) {
    console.log(key, obj[key])
}

// for in can also be used for arrays
for(const key in arr) {
    console.log(key)
}

// for-in is not great for visiting characters in a string, visits both code units of 🌐 separately
for(const c in greeting) {
    console.log(c, greeting[c])
}

// for-of doesn't work with objects, obj is not iterable
