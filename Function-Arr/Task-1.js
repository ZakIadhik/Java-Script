let arr = [5, 10, 15];



function getArrayBounds(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    return [arr.length, arr[0], arr[arr.length - 1]];
}

const result = getArrayBounds(arr);

console.log(result);