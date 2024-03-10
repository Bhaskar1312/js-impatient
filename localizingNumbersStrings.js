'use strict'

console.log(new Intl.NumberFormat('de').format(123456.78)) // 123.456,78
console.log(new Intl.NumberFormat('de').formatToParts(123456.78))
//[
//   { type: 'integer', value: '123' },
//   { type: 'group', value: '.' },
//   { type: 'integer', value: '456' },
//   { type: 'decimal', value: ',' },
//   { type: 'fraction', value: '78' }
// ]

console.log(new Intl.NumberFormat('de',
    { style: 'currency', currency: 'EUR'}).format(123456.78)) // 123.456,78€
console.log(new Intl.NumberFormat('en',
    { style: 'currency', currency: 'EUR'}).format(123456.78)) // €123,456.78

let words = ['Alpha', 'Ångström', 'Zulu', 'able', 'zebra']
let result = words.sort((x, y)=>x.localeCompare(y, 'en'))
console.log(result) // [ 'able', 'Alpha', 'Ångström', 'zebra', 'Zulu' ]

console.log( words.sort((x, y)=>x.localeCompare(y, 'sv'))) // swedish
// [ 'able', 'Alpha', 'zebra', 'Zulu', 'Ångström' ]

//collations - kn(numeric) '1' < '2' < '10'
// co - phonebook, phonetic, reformed

console.log(['part1', 'part2', 'part3', 'part10', 'part9'].sort(new Intl.Collator('en-u-kn-true').compare))

const str = 'Å™'
console.log(['NFC', 'NFD', 'NFKC', 'NFKD'].map(mode => [...str.normalize(mode)]))

console.log([0,1,2,3,4,5,6].map(i=>new Intl.PluralRules('en').select(i)))
console.log([0,1,2,3,4,5,6].map(i=>new Intl.PluralRules('ru').select(i)))

const rules = new Intl.PluralRules('en', { type: 'ordinal' })
console.log('[0, 1, 2, 3, 4, 5].map(i => rules.select(i)):', [0, 1, 2, 3, 4, 5].map(i => rules.select(i))) // ['other', 'one', 'two', 'few', 'other', 'other']
