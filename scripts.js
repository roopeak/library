const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
};

function addBookToLibrary() {
	const book = new Book('The Hobbit', 'J.R.R. Tolkien', 328, true);
	myLibrary.push(book);
	console.log(book);
};

addBookToLibrary();