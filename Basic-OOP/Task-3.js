const count_1 = {
    accountNumber: "0001",
    ownerName: "Ali Aliev",
    balance: 0,
    history: []
};

const count_2 = {
    accountNumber: "0002",
    ownerName: "Leyla Veliyeva",
    balance: 0,
    history: []
};


function dep(account, amount) {
    account.balance += amount;
    account.history.push(`Deposit: +$${amount}`);
}


function withdraw(account, amount) {
    if (account.balance >= amount) {
        account.balance -= amount;
        account.history.push(`Withdraw: -$${amount}`);
    } else {
        console.log("Не достаточно средств");
        account.history.push(`Withdraw failed: insufficient funds`);
    }
}


function transfer(fromAccount, toAccount, amount) {
    if (fromAccount.balance >= amount) {
        fromAccount.balance -= amount;
        toAccount.balance += amount;
        fromAccount.history.push(`Transfer: -$${amount} to ${toAccount.accountNumber}`);
        toAccount.history.push(`Transfer: +$${amount} from ${fromAccount.accountNumber}`);
    } else {
        console.log("Не достаточно средств");
        fromAccount.history.push(`Transfer failed: insufficient funds`);
    }
}


function getAccountInfo(account) {
    return `Account Number: ${account.accountNumber} Balance: $${account.balance}
    Operations count: ${account.history.length}History:- ${account.history.join('\n- ')}`;
}


dep(count_1, 1000);
transfer(count_1, count_2, 300);
console.log(getAccountInfo(count_2));





