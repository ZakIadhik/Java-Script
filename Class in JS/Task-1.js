class Kitab {
    constructor(ad, muallif, il) {
        this.ad = ad;
        this.mualiff = muallif;
        this.il = il;
    }


    melumat (){
        return `${this.ad} , ${this.mualiff} , ${this.il}`;
    }

}


const newKitab = new Kitab("Stiven", "Rama", "1998");
console.log(newKitab);