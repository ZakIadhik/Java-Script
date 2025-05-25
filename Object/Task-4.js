const book = {
    title: 'Book 1',
    author: 'Alex',
    year: 2020,
}

function printObjectEntries(book) {
    Object.entries(book).forEach(([key, value]) => {console.log(`${key}: ${value}`);});
}

printObjectEntries(book);
