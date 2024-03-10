// maps unordered sequence (uses hsh function of underlying primitives
// unlike objects, keys can be of any type, not just strings/symbols
// unlike objects, no prototypes
// Remembers the insertion order
// A map is an iterable that yields [key, value] pairs
// for(const [key, value] of map)
// key equality ===, (except all NaN are equal inside a map)
// equality hash function can not be changed
// Typical application: Associate property with DOM nodes(client side) without adding properties directly into the nodes

const weekDays = new Map();
weekDays.set('Monday', 1);
weekDays.set('Tuesday', 2);
console.log(weekDays)
for( const [k, v] of weekDays) { console.log(`${k}-${v}`)}

console.log(weekDays.get('Monday'), weekDays.has('Monday'))
weekDays.delete('Monday')
console.log(weekDays.get('Monday'), weekDays.has('Monday'))
weekDays.clear()
// new Map(iterable) where iterable produces pairs [key, value]

// Typical use of sets: Collect DOM nodes that fulfill a Boolean property
//set - size, add(x), delete(x), has(x), clear(), forEach(f,thisArg) invokes f(ele, ele) on each element
// keys, values, entries yield iterators over elements, elements and pairs [element, element]


// weak references - no others references, garbage collectors remove associated value/set
// Good for DOM elements as keys/elements
// Weak maps/sets are not iterable
// WeakMap only has methods - set/delete/get/has
// WeakSet only has methods - add/delete/has
