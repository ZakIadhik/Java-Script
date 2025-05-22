let arr = [2, 3, 4, 5];


function getSum(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


let result = getSum(arr);

console.log(result);