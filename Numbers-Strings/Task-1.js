let str = "А роза упала на лапу Азора"


function Pal(str){
    const strPal = str.toLowerCase().replace(/[^0-9]/g, '');
    return strPal === strPal.split('').reverse().join('')
}

const res = Pal(str)
console.log(res)