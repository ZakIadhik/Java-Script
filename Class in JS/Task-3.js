class MathUtil {

    constructor() {
    }

    static kvadrat (num) {
        return num * num
    }

    static kok(num){
        return Math.sqrt(num);
    }

    static cem(arr){
        return arr.reduce((acc, curr) => acc + curr, 0);
    }
}




console.log(MathUtil.cem([1,2,3,4,5]))

