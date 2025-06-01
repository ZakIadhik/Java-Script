const library = {
    books: [],

    // Add a new book to the library
    addBook(title, author, year, isbn) {
        this.books.push({ title, author, year, isbn })
    },

    searchBook(query) {
        return this.books.filter(book => book.title === query)

    },

    filterByAuthor(author) {
        return this.books.filter(book => book.author === author)
    },

    filterByYearRange(minYear, maxYear) {
        return this.books.filter(book => book.year >= minYear && book.year <= maxYear)
    },

    statistics() {
        return this.books
    }
};

library.addBook("The Hobbit", "J.R.R. Tolkien", 1937, "978-0547928227")
library.addBook("1984", "George Orwell", 1949, "978-0451524935")


// console.log(library.searchBook("1984"))
// console.log(library.filterByAuthor("J.R.R. Tolkien"));
console.log(library.filterByYearRange(1940, 1950));
console.log(library.statistics());