class Heyvan{
    constructor(ad, yas){
        this.ad = ad;
        this.yas = yas;
    }

    sesCixar(){
        return "Heyvan seslenir"
    }

}

class It extends Heyvan{


    sesCixar(){
        return "Hav hav"
    }
}

const newHeyvan = new Heyvan();
console.log(newHeyvan.sesCixar());


const newIt = new It();
console.log(newIt.sesCixar());
