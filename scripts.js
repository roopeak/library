const booksContainer = document.querySelector('.books-container');

const myLibrary = [
	{
		title: 'The Hobbit',
		author: 'J.R.R. Tolkien',
		pages: 320,
		read: 'read'
	},
	{
		title: '1984',
		author: 'George Orwell',
		pages: 328,
		read: 'not read'
	},
	{
		title: 'Old Man and the Sea',
		author: 'Ernest Hemingway',
		pages: 112,
		read: 'read'
	}
];

function Book(title, author, pages, read) {
  this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
};

function addBookToLibrary(title, author, pages, read) {
	const book = new Book(title, author, pages, read);
	myLibrary.push(book);
	generateCards();
};

function generateCards() {	
	for (let i = 0; i < myLibrary.length; i++) {
		const bookCard = document.createElement('div');
		bookCard.classList.add('book-card');
		booksContainer.appendChild(bookCard);
		const bookTitle = document.createElement('h3');
		const bookAuthor = document.createElement('p');
		const bookPages = document.createElement('p');
		const bookRead = document.createElement('button');
		
		bookCard.appendChild(bookTitle);
		bookCard.appendChild(bookAuthor);
		bookCard.appendChild(bookPages);
		bookCard.appendChild(bookRead);
	
		bookTitle.textContent += myLibrary[i].title;
		bookAuthor.textContent += myLibrary[i].author;
		bookPages.textContent += myLibrary[i].pages;
		bookRead.textContent += myLibrary[i].read;
	}
}

generateCards();