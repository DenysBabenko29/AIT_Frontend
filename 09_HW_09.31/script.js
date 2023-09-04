const library = [];
let inputData = prompt('Enter book data separate by ";"');

while (inputData) {
    const arr = inputData.split(";");
    if (arr.length !== 4 && !arr[0] && !arr[1] && !arr[2] && !arr[3] && findBook(arr[0])) {
        console.log("Book not added");
        break;
    }
    library.push(new Book(arr[0], arr[1], arr[2], arr[3]));
    inputData = prompt('Enter book data separate by ";"');
}



console.log(findBook(1));




function printLibrary(library) {
    for (let i = 0; library.length; i++) {
        console.log(library[i].toString());
    }
}

function findBook(isbn) {
    if (library === null || isbn < 0) {
        return null;
    }

    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn == isbn) {
            return library[i];
        }
    }
    return null;
}

function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    };
}

// const book1 = new Book(1, 'Kolobok', 'nation', '~1800');
// const book2 = new Book(2, 'War and Piece', 'L. N. Tolstoy', '1830');
