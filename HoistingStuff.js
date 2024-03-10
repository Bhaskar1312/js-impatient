{
    function doWork() {
        console.log(someVar); //ok
    }
    try {
        console.log('hello ', someVar); // error
    } catch(e) {
        console.log(e)
    }
    let someVar;
    doWork() // someVar is undefined, no ReferenceError

    someVar= 42; // line [1-6) is temporal dead zone
    // this is accessible from start of block line=1 inside a function, as function is not yet invoked
    doWork()
}

// Tagged template literals
function strong(fragments, ...values) {
    let res = fragments[0]
    for(let i=1;i<fragments.length;i++) {
        res += `<strong>${values[i-1]}</strong>${fragments[i]}`
    }
    return res;
}
person={name: 'Bhaskar', age: 27}
console.log(strong`Next year, ${person.name} will be ${person.age+1}.`)
// will be called as
// console.log(strong(['Next year, ', 'will be ', '.'], 'Harry', 43));
