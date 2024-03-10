
'use strict'
// proxies - logging, dynamic properties(e.g database columns), adapting to different API, remote calls
// const  proxy = new Proxy(obj, handler);

function logGetSet(obj) {
    const logHandler = {
        get : (target, key, receiver) =>{
            const result = target[key];
            console.log(`get ${key.toString()} as ${result}`)
            return result;
        },
        set (target, key, value, receiver) {
            console.log(`set ${key.toString()} to ${value}`)
            target[key] = value;
            return true;
        }
    }
    return new Proxy(obj, logHandler)
}
const obj = {name: 'Bhaskar', salary: 100000}
const proxy = logGetSet(obj)
proxy.salary = 200000
console.log(proxy.salary)
delete proxy.salary // Not logged by proxy

// revocation - can hand a proxied object to semi-trusted code, then revoke access
// the proxy works like the original if you provide an empty handler
// after revocation, all operations on the proxy throw an exception

const mySomeWhatSensitiveObj = {name: 'Bhaskar', salary: 100000};
console.log(mySomeWhatSensitiveObj)
const p = Proxy.revocable(mySomeWhatSensitiveObj, {});
console.log("proxy", p, p.proxy.name);
// doSomethingWith(p.proxy);
p.revoke()
// console.log("proxy after", p.proxy.name);
// look at 13 trap functions
// get(target, key, receiver) receiver[key], receiver.key, set(target, key, value, receiver) receiver[key] = value, receiver.key = value,
// deleteProperty(target, key) delete proxy[key], delete proxy.key, has(target, key)
// getPrototypeOf(target), ..., apply(target, thisArg, args), construct(target, args, newTarget)

// The Reflect class implements 13 trap operations
const logHandler2 = {

    set(target, key, value, receiver) {
    console.log(`set2 ${key.toString()}`)
    return Reflect.set(target, key, value, receiver)
    // Instead of target[key] = value; return true
}
}
// can log all with a second proxy
const p2 =new Proxy(mySomeWhatSensitiveObj, logHandler2);
const p3 = new Proxy(p2, {
    get : (target, key, receiver) =>{
        console.log(`get2 ${key.toString()} as ${target}`)
        // Reflect.set(target, key, value, receiver)
        return (...args) => {
            return Reflect[key](...args) //Instead of return target[key]
        }
    },
})
p3.salary = 10000000
console.log(p3.name)

let a = [1,2,3]
const p4 = new Proxy(a, logHandler2)
p4[1] = 4;


// Reflect is designed for proxies but useful on its own
// Reflect.deleteProperty returns a boolean to tell whether the deletion was successful. The delete operator doesn’t.
// Reflect.defineProperty returns a boolean to indicate whether the definition succeeded. Object.defineProperty throws an exception upon failure.
// Reflect.apply(f, thisArg, args) is guaranteed to call Function.prototype.apply, but f.apply(thisArg, args) might not since the apply property can be redefined.

// Invariants
// construct must return an obj
// getOwnPropertyDescriptor must return a descriptor object or undefined.
// getPrototypeOf must return an object or null
// The value reported (by get) for a property must be the same as the value of the corresponding target object property if the target object property is a nonwritable, nonconfigurable own data property.
