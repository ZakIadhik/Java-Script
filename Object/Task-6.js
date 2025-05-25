const book = {
    title: 'Book 1',
    author: 'Alex',
    year: 2020,
}

function printTitleAuthor({ title, author }) {
    console.log(`${title} by ${author}`);
}

printTitleAuthor(book);

