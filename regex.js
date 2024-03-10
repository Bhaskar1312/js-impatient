// i ignorecase, g global, m multiline, s dotAll . match new line character, u unicode(not code units),
// y sticky matches must start at regex.lastIndex
// /[a-z]+\.com/i
// const regex = RegExp(/[a-z]+\.com/i)
// regex.source -> [a-z]+\\.com
// regex.flags -> 'i'
// regex.ignoreCase -> true


console.log(/[0-9]+/.test('agent 007'))
console.log(/[0-9]+/.exec('agent 007')) // [ '007', index: 6, input: 'agent 007', groups: undefined ] use .input to get input

let digits = /[0-9]+/g
let res = digits.exec('555-1212')
console.log(res) // [ '555', index: 0, input: '555-1212', groups: undefined ]
console.log(digits.lastIndex) // at after 555, so index=3
res = digits.exec('555-1212')
console.log(res) // [ '1212', index: 4, input: '555-1212', groups: undefined ]
res = digits.exec('555-1212')
console.log(res) // null

// with sticky flag y, you start at the last index
digits2 = /[0-9]+/y
digits2.lastIndex = 3;
console.log(">>"+digits2.exec('555-1212'))//null
digits2.lastIndex = 5;
console.log(">>"+digits2.exec('555-1212'))//null

let time = /([1-9]|1[0-2]):([0-5][0-9])([ap]m)/
let result = time.exec('Lunch at 12:15pm')
console.log(result) //[ '12:15pm', '12', '15', 'pm', index: 9, input: 'Lunch at 12:15pm', groups: undefined]


time = /(?<hours>[1-9]|1[0-2]):(?<minutes>[0-5][0-9])([ap]m)/
result = time.exec('Lunch at 12:15pm')
console.log(result)  // ['12:15pm','12','15','pm',index: 9,input: 'Lunch at 12:15pm',groups: [Object: null prototype] { hours: '12', minutes: '15' }]

// Non-capturing (?:http|ftp)
// Match previous group \1
console.log(/(['"]).*\1/.exec("\"Fred\"")) // matches 'Fred' or "Fred" but not "Fred'
console.log(/(?<quote>["']).*\k<quote>/.exec('\'Fred\'')) // use \k to refer to named group

// str.match(regex)
console.log('555-1212'.match(/[0-9]+/)) // [ '555', index: 0, input: '555-1212', groups: undefined ]

console.log('555-1212'.match(/[0-9]+/g)) // [ '555', '1212' ] you get all matches with /g, no index/input...

// str.matchAll(regex) // returns lazy iterable of all match data, useful for patterns with groups
// str.search(regex) returns index of first match or -1
// str.replace(regex, replacementString) replaces first (or, with g flag, every) match
console.log('555-1212'.replace(/[0-9]/g, '#'))

// replacementString can contain special symbols
// $`, $' -  the portion before or after the matched string
// $& - matched string
// $n - the nth group
// $$ - dollar sign
console.log('hello'.replace(/[aeiou]/g, '$&$&$&')) // heeellooo

console.log('Harry Smith'.replace(/([A-Z])[a-z]+ ([A-Z][a-z]+)/,
    (match, first, last)=>`${last}, ${first}.`)) // Smith, H.

// By default, regex works with UTF-16 code units
console.log(/Hello .$/.test('Hello 🌐')) // false
console.log(/Hello ./u.test('Hello 🌐')) // true
console.log(/Hello \u{1F310}/u.test('Hello 🌐'))

// \p{...} matches Unicode binary property
// L, Lu, Ll letters, upper/lowercase letters
// N Numbers
// S symbols
// P Punctuation
console.log('Hello 世界'.match(/\p{Script=Han}+/gu)) // [ '世界' ]

// Exotic regex
// Normally + and * repetitions are greedy(match the longest possible string)
console.log("\"Hi\" and \"Bye\"".match(/".*"/g)) // [ '"Hi" and "Bye"' ]

// Reluctant match
console.log("\"Hi\" and \"Bye\"".match(/".*?"/g)) // [ '"Hi"', '"Bye"' ]

// lookahead match, where match has to be followed by something inside the (?= )
console.log('07:32am'.match(/[0-9]+(?=[ap]m)/g)) // 32

// look behind match - match has to be preceeded by some inside (?<= )
console.log('07:32am'.match(/(?<=7:)[0-9]+/g)) //32

// inverses ?! inverse look ahead, ?<! - inverse look behind
console.log('07:32am'.match(/(?<!:)[0-9]+/g)) // 07, 2