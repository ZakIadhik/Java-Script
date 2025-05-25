let arr = [[2,3],4,5,[6,7]]

function flatArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.flat()
}

let result = flatArray(arr)
console.log(result)
console.log(arr)