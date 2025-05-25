const matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
]

function arr(matrix) {
    return matrix[0].map((_, index) => matrix.map(row => row[index]))
}

const result = arr(matrix)
console.log(result)