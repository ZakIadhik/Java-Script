const book = {
    title: 'Book 1',
    author: 'Alex',
    year: 2020,
}


function keysToString(book) {
    return Object.keys(book).join(', ');
}

const result = keysToString(book);
console.log(result);