let arr = [1,4,6,9,12,15,14]


function getSpecialNumbers(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

let result = getSpecialNumbers(arr);
console.log(result);