// dates measured in ms(adjusted for leap seconds) since epoch
// valid range +-100_000_000 days from epoch
// caution: dates are converted to numbers in arithmetic expressions
console.log(new Date())
const d = new Date(10**12)
console.log(d)
console.log(d+0)//str concat - arcane rules
console.log(d*d)

// new Date(year, zeroBasedMonth, day, hours, minutes, seconds, milliseconds)
// everything from day is optional, since new Date(milliseconds) hence month is not optional
console.log(new Date(2019, 13, -2)) // caution: they silently roll
// caution: Date(..) without new -> string in non-standard format
const firstMillennialNoon = new Date('2000-01-01T12:00:00.000Z') // other formats supported but non-standard
console.log(firstMillennialNoon)

console.log(Date().constructor)

// static UTC dates
// Date.UTC(year, zeroBasedMonth, day, hours, minutes, seconds, milliseconds) // everything after year is optional
console.log(Date.parse('2024-03-03T17:14:02.890Z')) // guaranteed support for YYYY-MM-DDTHH:mm:ss.sssZ format
// gives milliseconds, not Date object

// Date -> getters getFullYear, getMonth(0-11), getDate(1-31), getHours(0-23), getMinutes, getSeconds, getMilliSeconds
// setters setFullYear, setMonth ...
// getYear, setYear are obsolete
// UTC variants getUTCFullYear, getUTCMonth, ...
// setUTCFullYear, setUTCMonth, ...

console.log(new Date().toLocaleString('en-US')) // internationalization
console.log(new Date().toLocaleString('de'))
