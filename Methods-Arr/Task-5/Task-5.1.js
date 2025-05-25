let arr = [4,3,1,2,5]

function isPrime(arr){
    if (arr < 2) return false
    for (let i = 2; i < Math.sqrt(arr); i++) {
        if (arr % i === 0) return false
    }
    return true
}

const result = arr.filter(isPrime)

console.log(result)
