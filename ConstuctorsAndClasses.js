function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}
Employee.prototype.raiseSalary = function (percent) {
    this.salary *= 1 + percent/100;
}
const bhaskar = new Employee('Bhaskar Bantupalli', 19700)
// new Object, sets [[Prototype]] to Constructor.prototype, sets this, Runs constructor body, yields the body
bhaskar.raiseSalary(1.6)
console.log(bhaskar)

class Employee2 { // Employee2 still is not a class, it is a function, can only have one constructor
    // u cant overload functions in javascript
    // properties of object are separated by commas, but here no commas b/w methods
    // class is not hoisted, so u cant use it, until u have defined it
    // body of class is in strict mode
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    // raiseSalary(percent) {
    //     this.salary  *= 1 + percent/100;
    // }
}
Employee2.prototype.raiseSalary = function (percent) {
    this.salary  *= 1 + percent/100;
};

let vinay = new Employee2('Vinay', 50000)
vinay.raiseSalary(10)
console.log(vinay)