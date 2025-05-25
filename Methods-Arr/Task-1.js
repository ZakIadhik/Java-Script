let arr = [2,3,5,6,7,1,4]


function getSpecialNumbers(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.filter(num => num % 3 === 0);
}


let result = getSpecialNumbers(arr)
console.log(result)