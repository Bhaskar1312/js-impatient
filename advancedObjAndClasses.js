// anonymous classes

const Employee = class { // useful for mix-in
    constructor(name, salary) {
        this.name=name;
        this.salary=salary;
    }
    inc(amount) {
        this.salary += amount;
    }
}
console.log(Employee)

function withToString(base) {
    return class extends base {
        toString() {
            let result = '{'
            for (const key in this) {
                if (result !== '{') result += ', ';
                result += `${key}=${this[key]}`
            }
            result += '}'
            return result
        }
    }
}

const BetterEmployee = withToString(Employee)
e = new BetterEmployee('Mad Hatter', 90000); // {name=Mad Hatter, salary=90000} not [object object]
console.log(e.toString())

// weirdness 1. create obj without new - illegal if class, old-style diff behavior(global vars, obj, number)

// 2. what if called non-ctor with new
function square(x) {return x*x};
let mystery = new square(2);
console.log(mystery)

// 3. invoking method without object
const harry = new Employee('harry', 'smith');
const action = harry.inc;
try {
    action(1000);// Error action doesn't point to any bank account
} catch (e) {
    console.log(e)
}

// 4. nested funcs - this doesn't work well, remedy -> use arrow function
class BankAccount {
    constructor(balance=0) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    spreadTheWealth(accounts) {
        accounts.forEach(function(acct) {
            acct.deposit(this.balance /accounts.length)
        })
        this.balance = 0;
    }

    spreadTheWealthArrow(accounts) {
        accounts.forEach(acct =>{
            acct.deposit(this.balance /accounts.length); // this corectly bound
        })
        this.balance = 0;
    }
}
const harrysAcct = new BankAccount(1000);
const fredAcct = new BankAccount();
const wilmaAcct = new BankAccount();
try {
    harrysAcct.spreadTheWealth([fredAcct, wilmaAcct])
} catch (e) {
    console.log(e)
}

harrysAcct.spreadTheWealthArrow([fredAcct, wilmaAcct])
console.log(harrysAcct, fredAcct, wilmaAcct)

// weirdness #5: Array of functions
const observers = []
function notifyObservers() {
    for (let i = 0; i < observers.length; i++) {
        observers[i](); // obj.method(args) is same as obj['method'](args)
        // in any call obj[index](args), this is obj
        // makes no sense with array of functions
    }
}
class BankAccount2 {
    constructor(balance=0) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        notifyObservers();
    }

}
class UserInterface {
    log(message) {
        console.log(`UI message: ${message}`)
    }
    start() {
        const acct = new BankAccount2()
        // observers.push(function (){this.log('More money!')})
        // this points to array of observers, not UI obj
        //  consider hard objects in lesson-3

        // remedy - use arrow fn
        observers.push(()=>this.log('More money!'))
        acct.deposit(1000)
    }
}
const ui = new UserInterface();
ui.start();