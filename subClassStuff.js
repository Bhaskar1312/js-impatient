class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    raiseSalary(percent) {
        this.salary *= 1 + percent/100;
    }
    getSalary() {
        return this.salary;
    }
}

class Manager extends Employee { // Manager.Prototype -> Employee.Prototype -> Object.Prototype
    bonus;
    // if you don't supply subclass constructor, one is provided. it passes all the arguments to superclass constructor
    constructor(name, salary, bonus) {
        super(name, salary);
       this.bonus = bonus;
    }
    getSalary() {
        return this.salary + this.bonus;
    }
}
boss = new Manager('bossy', 10, 1);
console.log(boss)
console.log(boss.getSalary())