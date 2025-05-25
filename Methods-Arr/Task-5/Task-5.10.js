let arr = [1,2,3,4,5,6,7,8,9,10]


function average(arr) {
    return arr.reduce((sum, n) => sum + n, 0) / arr.length;
}

const result = average(arr)
console.log(parseInt(result))