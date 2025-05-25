let arr = [1, 2, 2, 3, 3, 3, 4];

function mostFrequentNumber(arr) {
    const counts = arr.reduce((acc, n) => (acc[n] = (acc[n] || 0) + 1, acc), {});
    const [value, count] = Object.entries(counts).reduce((a, b) => b[1] > a[1] ? b : a);
    return { value: +value, count };
}

console.log(mostFrequentNumber(arr));
// { value: 3, count: 3 }
