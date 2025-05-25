let arr = [1,2,3,4,5]

function oddSquares(arr){
    return arr.filter(item => item % 2 !== 0).map(item => item ** 2)
}

const result = oddSquares(arr)
console.log(result)