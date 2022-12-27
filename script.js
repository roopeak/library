let bookDisplay = document.querySelector(".book-display");

let myLibrary = [];

function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // this.info = function() {
    //     return title, author, pages, read;
    // };

};

function addBookToLibrary() {

    const book = new Book("The Hobbit", "J. R. R. Tolkien", "295", "False");
    const book2 = new Book("Factfulness", "Hans Rosling", "378", "True");
    myLibrary.push(book);
    myLibrary.push(book2);

    // book.info();
    // book2.info();
    // console.log(myLibrary[0])

    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement("div");
        bookDisplay.appendChild(card);
        for (item in myLibrary[i]) {

            let div = document.createElement("div");
            card.appendChild(div);
            div.innerHTML += myLibrary[i][item];

            console.log(myLibrary[i][item]);


        }
    }
    // bookDisplay.appendChild(card);
    

};



addBookToLibrary();
// console.log(myLibrary);

