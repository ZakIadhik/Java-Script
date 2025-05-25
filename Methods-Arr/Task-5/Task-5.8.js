let arr = [1,2,3, "412", "222"]

function strArr(arr) {
    return arr.every(el => typeof el === 'string')
}

const result = strArr(arr)
console.log(result)