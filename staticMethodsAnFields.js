
class BankAccount {
    constructor() {
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if(this.balance < amount) {
            this.balance -= BankAccount.OVERDRAFT_FEE;
        }
        this.balance -= amount;
    }
    static get OVERDRAFT_FEE() {
        if (this.overdraftFee === undefined) // don't use this.OVERDRAFT_FEE, it would be INF recursion
            this.overdraftFee = 10;
        return this.overdraftFee; // this is the constructor
    }
    static set OVERDRAFT_FEE(newValue) {
        if(newValue > this.overdraftFee) {
            this.overdraftFee = newValue;
        }
    }
}

let acct = new BankAccount()
console.log(BankAccount.OVERDRAFT_FEE)
BankAccount.OVERDRAFT_FEE=20
console.log(BankAccount.OVERDRAFT_FEE)
acct.withdraw(1000)
console.log(acct)