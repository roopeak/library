let bookDisplay = document.querySelector(".book-display");

const addBookBtn = document.querySelector(".add-book");
const submitBtn = document.querySelector(".submit-button");

addBookBtn.addEventListener("click", () => {
    const addBookForm = document.querySelector(".add-book-form");
    addBookForm.style.display = "flex";
});

submitBtn.addEventListener("click", () => {
    let title = '"' + document.getElementById("title").value + '"';
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value + " pages";
    let read = document.querySelector('input[name="read"]:checked').value;

    event.preventDefault();

    addBookToLibrary(title, author, pages, read);
    const addBookForm = document.querySelector(".add-book-form");
    addBookForm.style.display = "none";

    document.getElementById("title").value = "";  
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").value = "";  
})

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);

    myLibrary.push(book);

    let card = document.createElement("div");
    let removeBtn = document.createElement("button");
    let readBtn = document.createElement("button");

    card.classList.add("book-card");
    removeBtn.classList.add("card-button");
    readBtn.classList.add("card-button");

    removeBtn.innerHTML = "Remove";
    readBtn.innerHTML = "Change read status";

    bookDisplay.appendChild(card);


    let cards = document.getElementsByClassName("book-card");
    console.log(cards.length);

    removeBtn.addEventListener("click", function() {
        console.log("yes");
    } );

    readBtn.addEventListener("click", function() {
        console.log("yes");
    });

    for (item in book) {
        let div = document.createElement("div");
        card.appendChild(div);
        div.innerHTML += book[item];
    }

    // card.innerHTML += removeBtn;
    // card.innerHTML += readBtn;
    card.appendChild(removeBtn);
    card.appendChild(readBtn);
};

