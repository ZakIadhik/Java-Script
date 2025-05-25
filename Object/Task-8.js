const book = {
    title: 'Book 1',
    author: 'Alex',
    year: 2020,
}


function getStringValues(book) {
    return Object.values(book).filter(value => typeof value === 'string');
}

const result = getStringValues(book);
console.log(result);