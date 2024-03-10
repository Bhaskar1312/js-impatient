
class Person {
    // bankBalance // instance fields proposal stage 3
    // #balance // # is private field proposal stage 3
    // deposit

    constructor(last, first) {
        this.last = last; // this is instance field
        this.first = first;
    }

    get fullName() {
        return `${this.last}, ${this.first}`
    }

    set fullName(value) {
        const parts = value.split(/,\s*/);
        this.last = parts[0];
        this.first = parts[1];
    }

}
const bhushan = new Person('Tambabhathula', 'Bhushan')
console.log(bhushan.fullName) // think of getter as dynamically generated getter
bhushan.fullName = 'Varshneya, Bhushan'; // like getter
//getters, setters look like fields, but act like methods
console.log(bhushan.fullName)
