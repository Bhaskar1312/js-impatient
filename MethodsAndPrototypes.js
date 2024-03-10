
function createEmployee(name, salary) {
    return {
        name,
        salary,
        raiseSalary:  function (percent) {
            this.salary *= 1 + percent/100;
        }
    }
}

harry = createEmployee('Harry Potter', 1000)
annie = createEmployee('Annie Edison', 900);
annie.salary += 100
annie.raiseSalary(10)
console.log(annie.salary)
// raiseSalary behavior is duplicated in all factory method created objects; replicated methods



// set [[prototype]] slot of object in factory
const employeePrototype = {
    raiseSalary: function (percent) {
        this.salary *= 1 + percent/100;
    }
}
function createEmployee2(name, salary) {
    const result = {name, salary}; // here {name: name, salary:salary}
    Object.setPrototypeOf(result, employeePrototype);
    return result;
}

marissa = createEmployee2('Mona Lisa Vito', 100)
marissa.raiseSalary(5)
console.log(marissa)

pesci = createEmployee2('Vinny', 100)
pesci.raiseSalary(10)
console.log(pesci)

//Prototype lookup is only for reading properties, never for writing
marissa.raiseSalary= function (rate) {this.salary = Number.MAX_VALUE}
marissa.raiseSalary(-10)
console.log(marissa) // now raiseSalary is a new function for marissa, not from prototype
console.log(pesci)