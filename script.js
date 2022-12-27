let bookDisplay = document.querySelector(".book-display");

const addBookBtn = document.querySelector(".add-book");
const submitBtn = document.querySelector(".submit-button");

addBookBtn.addEventListener("click", () => {
    const addBookForm = document.querySelector(".add-book-form");
    addBookForm.style.display = "flex";
});

submitBtn.addEventListener("click", () => {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
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

    // let title = document.getElementById("title").value;
    // let author = document.getElementById("author").value;
    // let pages = document.getElementById("pages").value;
    // let read = document.getElementById("read").value;

    // console.log(title, author, pages, read)

    // title = prompt("Give title: ");
    // author = prompt("Give author: ");
    // pages = parseInt(prompt("Give page numbers: "));

    // keepGoing = true;
    // while (keepGoing) {
    //     if (isNaN(pages) == true) {
    //         pages = parseInt(prompt("Number of pages must be a number: "));
    //     } else {
    //         keepGoing = false;
    //     }
    // }
    
    // read = prompt("Have you read it?");

    const book = new Book(title, author, pages, read);

    myLibrary.push(book);

    let card = document.createElement("div");
    bookDisplay.appendChild(card);

    for (item in book) {
        let div = document.createElement("div");
        card.appendChild(div);
        div.innerHTML += book[item];
    }
};

// addBookToLibrary();
// console.log(myLibrary);

