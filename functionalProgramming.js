// build an HTML list of items in an array. You can first enclose each of the items in a li element
const items = ['Green eggs', 'ham', 'Mr & Mrs T Bloody Mary mix'];
const enclose = (tag, contents) => `<${tag}>${contents}</${tag}>`
const listItems=items.filter(i=>i.trim()!=='').map(i=>enclose('li', i))

console.log(listItems)
const list = enclose('ul', listItems
                                        .filter(i=>i.trim()!=='')
                                        .map(i=>enclose('li', i))
                                        .join(''))
console.log(list)

// set timeout executes an action in future after some milliseconds
setTimeout(() => console.log('Goodbye'), 1000)

function sayLater(text, when) {
    const task = () => console.log(text) ;// closure, variables(text) declared outside fn, params, block of code
    setTimeout(task, when)
}
sayLater('Hi there', 2000) // first sayLater returns, then task executes


//Objects + function values + closures = Object oriented
function createAccount() {
    let balance = 0;
    return {
        deposit: amount => {
            balance += amount
        },
        withdraw: amount => {
            if(amount<=balance) {
                balance -= amount
            }
        },
        getBalance: ()=>{
            return balance;
        }
    }
}
const harrysAccount = createAccount();
const sallysAccoiunt = createAccount();
sallysAccoiunt.deposit(500)
harrysAccount.withdraw(500)
console.log(sallysAccoiunt.getBalance())
console.log(`Harry account balance: ${harrysAccount.getBalance()}`)