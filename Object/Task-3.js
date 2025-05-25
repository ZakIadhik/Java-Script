const book = {
    title: 'Book 1',
    author: 'Alex',
    year: 2020,
}

function print(book) {
    return Object.entries(book)
}

const result = print(book)
console.log(result)