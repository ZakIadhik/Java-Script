class BankHesabi{

    #balans
    constructor(startBalance = 0){
        this.#balans = startBalance;
    }

    pulArtir(miqdar){
        this.#balans += miqdar;
    }

    pulCixar(miqdar){
        this.#balans -= miqdar;
    }

    getBalance(){
        return this.#balans
    }

}


const newBankHesabi = new BankHesabi(100);

newBankHesabi.pulArtir(150)

console.log(newBankHesabi.getBalance())

