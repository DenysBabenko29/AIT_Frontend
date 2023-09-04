
/* 
    Необходимо создать объект bankAccount(дебет), представляющий банковский счёт со
    следующими свойствами:

    1. accountNumber: 123456789 (для номера счёта);
    2. accountHolderName для имени владельца счёта;
    3. balance для баланса;
    4. deposit() для описания действия по добавлению денег на счёт;
    5. withdraw() для описания действия по снятию денег со счёта;
    6. checkBalance() для проверки баланса.
*/ 


const bankAccount = {
    accountNumber: 123456789,
    accountHolderName: "Denys Babenko",
    balance: 100,
    deposit: (n) => {
        if (n <= 0) {
            return false;
        }
        bankAccount.balance += n;
        return true;
    },
    withdraw: (n) => {
        if (n > bankAccount.balance || n <= 0) {
            return false;
        }
        bankAccount.balance -= n;
        return true;
    },
    checkBalance: () => console.log(bankAccount.balance)
    
};


console.log(bankAccount.deposit(500));
bankAccount.checkBalance();

console.log(bankAccount.deposit(0));
bankAccount.checkBalance();

console.log(bankAccount.deposit(-500));
bankAccount.checkBalance();

console.log(bankAccount.withdraw(500));
bankAccount.checkBalance();

console.log(bankAccount.withdraw(500));
bankAccount.checkBalance();



