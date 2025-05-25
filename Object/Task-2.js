const book = {
    title: 'Book 1',
    author: 'Alex',
    year: 2020,
}

function getSum(book){
    return `${book.title} by ${book.author}`;
}

const result = getSum(book);
console.log(result);