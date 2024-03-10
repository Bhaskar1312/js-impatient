// meta
// each property of an object has three attributes
// 1. Writable(when true, can update value)
// 2. enumerable(when true, is visited in for-in loop)
// 3. configurable(when true, ok to delete and configure these 3 values)
// Defaults are true in object literals or dynamically added properties, false in calls to defineProperty/defineProperties

const james = {name:'James Bond'}

Object.defineProperty(james, 'id', {
    value: '007',
    enumerable: true,
    writable: false,
    configurable: true
}); // since enumerable, output contains these props
console.log(james)
james.id = '008' // No effect
console.log(james)
Object.defineProperty(james, 'id', {
    writable: true
});
console.log(james)
james.id = '009'
console.log(james)

Object.defineProperties(james, { age: {value: 40, writable: true, enumerable:true, configurable: true}, skills: {value:['Shooting'], enumerable:true}});
console.log(james)

const sym = Symbol('label')
console.log(Symbol('label')!==sym) // each symbol is different
console.log(typeof sym)
// Symbols can be used as Object keys
james[sym] = 500
console.log(james)
james[Symbol('label')] = 600
console.log(james) // contains sym twice

// Symbols can be used to safely attach to DOM nodes
// Properties with symbol are not enumerated, they don't show up in for-in
// standard symbols Symbol.iterator, Symbol.species
// can register/ retrieve global symbol as Symbol.for('com.bhaskar.label') // we get same one back if we registered
console.log(james[Symbol.for('label')]) // undefined
// obj.hasOwnProperty(stringOrSymbol) instead of obj[stringOrSymbol] key present/undefined?
console.log(james.hasOwnProperty(Symbol.for('label')))

// Objects.keys(obj), Objects.values(obj), Object.entries(obj) -> arr of keys, vals, [key, val] pairs
// only with keys that are strings(not symbols)
// only own keys (not from prototype)
// only enumerable properties

console.log(Object.getOwnPropertyNames(james))
console.log(Object.getOwnPropertySymbols(james))
console.log(Object.getOwnPropertyDescriptors(james))

class Employee {
    constructor(name, salary) {
        this.name = name;
        this._salary = salary;
    }
    raiseSalary(percent) {
        this._salary *= 1 + percent/100;
    }
    get salary() {
        return this._salary;
    }
    set salary(newVal) {
        return this._salary = newVal
    }

}
const obama = new Employee('barack obama', 400000)
console.log(Object.getOwnPropertyDescriptors(obama.constructor.prototype))

// Object.create(proto, propertyDescriptors)
// Object.fromEntries([[key1,val1], [key2,val2]])
// Object.assign(target, ...source) copies all enumerable props from all sources to target

// Object.create(proto)
// Object.getPrototypeOf()
// proto.isPrototypeOf(obj)
// Object.setPrototypeOf(obj, proto) updates prototype // Caution: changing a prototype can be a vary slow op, It is much
// better to set the prototype by calling the Object.create method


class Manager extends Employee {
    constructor(name, salary, bonus) {
        super(name, salary);
        this.bonus = bonus
    }
    get salary() {
        return super.salary + this.bonus
    }
}

const boss = new Manager('Charlie Munger', 180000, 20000)
console.log(Object.getPrototypeOf(boss))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(boss)))
console.log(boss.salary)
// boss.location = 'India'
boss.raiseSalary(25)
Object.preventExtensions(boss) // now no one can extend boss obj
Object.seal(boss) // now cant add or delete properties
boss.location = 'India' // No effect
console.log(boss)
Object.freeze(boss) // cant set properties, can change prototypes
// boss.raiseSalary(25) // Cannot assign to read only property '_salary' of object '#<Manager>'
console.log(boss)

// freeze, seal, preventExtensions return the object


let obj = {name: 'Fred', age: 42}
let obj2 = {name: 'Fred', age: 42}
obj.account = {balance: 1000}
obj.friend = obj2;
obj2.friend = obj;
let cloned = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)) // shallow copy of top level
obj.age=40 // No effect on clone
obj.account.balance = 0 // both balance = 0
console.log(obj, cloned)

// so we need recursive cloning, keep track of circular refs
function clone(obj, cloneRegistry=new Map()) {
    if(typeof obj !== 'object' || Object.isFrozen(obj)) return obj;
    if(cloneRegistry.has(obj)) return cloneRegistry.get(obj);
    if(Array.isArray(obj)) {
        let result = Array.from(obj);
        cloneRegistry.set(obj, result);
        for (const key in result)
            result[key] = clone(result[key], cloneRegistry);
        return result;
    } else {
        const props = Object.getOwnPropertyDescriptors(obj);
        let result = Object.create(Object.getPrototypeOf(obj), props);
        cloneRegistry.set(obj, result);
        for (const prop in props) {
            result[prop] = clone(result[prop], cloneRegistry);
        }
        return result
    }
}

obj3 = clone(obj)
obj.account.balance = 100
console.log(obj, obj3)


// Every function has a prototype property
function square(x) {return x*x}
console.log("are both same: ",square.prototype.constructor === square)
// when object is created with obj = new function, the [[Prototype]] of obj is set to function.prototype
// Object.getPrototypeOf(obj) is safer than obj.constructor.prototype
// 1. An object created with Object.create(null) doesn't have constructor
// 2. possible to change constructor
// when obj is created with obj = new function, new.target is set to function => can prevent invocation without new(new.target===undefined)
// new.target, can simulate abstract classes with throw error

// toString method is called whenever an object must be turned into a string
// 'Hello' + obj; `Hello ${obj}`; String(obj)
// By default,  obj.toString() returns [object constructor name]
// toLocaleString calls toString can be overridden to provide a locale specific config
// override valueOf if you want to produce a primitive type value that is used in arithmetic expressions
// Date overrides valueOf to return the number of milliseconds since the epoch
// Object.is(x,y) is almost the same as x===y, except that Object.is(+0,-0) is false Obj.is(NaN,NaN) is true

