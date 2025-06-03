class Qahraman{
    constructor(ad){
        this.ad = ad;
    }
}

const Ucan = {
    uc() {
        console.log("Qahraman может летать");
    }
}


Object.assign(Qahraman.prototype, Ucan);

const newQahraman = new Qahraman("Superman");

newQahraman.uc();