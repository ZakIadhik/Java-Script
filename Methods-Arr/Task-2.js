let arr = [1,4,2,3,5,10]


function sortDesc(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    return [...arr].sort((a, b) => b - a);
}

let result = sortDesc(arr)
console.log(sortDesc(arr))
