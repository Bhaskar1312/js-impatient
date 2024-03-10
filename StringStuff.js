

// strings can contain arbitrary uni code(UTF-16)
// keep source files in ascii // else use emoticon
const greeting = 'Hello 🌐'
// const greeting = 'Hello \u{1F310}'
console.log(greeting)
console.log(greeting.length)
// unicode code points > U+FFFF require 2 code units
console.log(greeting[6]) // half of globe //?

//string literals
const destination = 'World'
let greet = `Hello ${destination.toUpperCase()}`
console.log(greet)
greet = `Hello ${destination.length > 0 ? `${destination[0]}`: ''}`
console.log(greet)

greet = `<div>Hello</div>
<div>${destination}</div>`
console.log(greet)

path=String.raw`C:\Windows\System` // only \ escapes, not ` $:
console.log(path)