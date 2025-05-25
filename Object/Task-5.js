const book = {
    title: 'Book 1',
    author: 'Alex',
    year: 2020,
}

function copyYear(book, newYear) {
    return Object.assign({}, book, {year: newYear})
}

const result = copyYear(book, 2025)
console.log(result)
