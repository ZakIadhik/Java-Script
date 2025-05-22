let arr = [3,4,5,6,7,8,9,10];

function swap(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return arr;
    }
    const [first, ...rest] = arr;
    return [...rest, first];
}

let result = swap(arr);
console.log(result);
