// codePoint U+0000...U+10FFFF
let str = String.fromCodePoint(0x48, 0x69, 0x20, 0x1F310, 0x21) // Hi 🌐!
console.log(str)

// "char code" = value of UTF-16 encoding
// Code points > U+FFFF use two "char codes" // 🌐 = U+D83C and U+DF10
console.log(str.codePointAt(3)) // 127760 or 0x1F310
// str.codePointAt() yields code point starting at UTF-16 offset i
console.log(str.codePointAt(4)) // high surrogate value b/w U+D83C and U+DF10

// easier to work with array of codePoints [...str] spread operator
// str.charAt(i)/str[i] yields a string of length 1 whose character has char code str.charCodeAt(i)
console.log(str[3])
console.log(str[4])

// substring(fromInclusive, toExclusive)
// slice like substring but allows negative values
console.log('Hello'.slice(-3, -1)) // ll

// indexOf(str), lastIndexOf(str) -1 if not found
// startsWith(str), endsWith(str), includes(str) yield Boolean result
// trim,trimStart, trimEnd // whitespaces(unicode, space/line/paragraph separators
// str.split(separator, limit=optional) // separator can be regex
// caution: an empty separator '' splits into UTF-16 code units. Use [...str] instead


// str.padStart(len), str.padEnd(len) space characters added to start and end
// str.repeat(n)
// str.concat(x, y, ...)
// str.toUpperCase(), str.toLowerCase()
// str.replace(original, replacement) // replaces first occurence
console.log('moon'.replace('o', 'astod')) // mastodon
// beware of $ in the replacement string

//match, matchAll, search
// toLocaleUpperCase, toLocaleLowerCase, LocaleCompare, normalize
// encodeURI, encodeURIComponent, decodeURI, decodeURIComponent
console.log(encodeURI('http://hello🌐.com')) // http://hello%F0%9F%8C%90.com

