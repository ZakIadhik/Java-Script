class Telebe {
    constructor(ad, yas) {
        this.qiymet = []
        this.ad = ad;
        this.yas = yas;
    }


    qiymetElaveEt(qiymet){
        this.qiymet.push(qiymet);
    }

    ortaQiymet (){
        const res =  this.qiymet.reduce((acc, cur) => acc + cur, 0);
        return res / this.qiymet.length;
    }

}

const  newTelebe = new Telebe("Ameba", 28);


newTelebe.qiymetElaveEt(500);
newTelebe.qiymetElaveEt(600);
console.log(newTelebe.ortaQiymet());
