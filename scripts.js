const dialog = document.querySelector('dialog');
const booksContainer = document.querySelector('.books-container');
const newBookBtn = document.querySelector('.new-book-btn');
const cancelNewBookButton = document.querySelector('dialog button');
const submitBookBtn = document.getElementById('submit-book');

const newBookTitle = document.getElementById('title');
const newBookAuthor = document.getElementById('author');
const newBookPages = document.getElementById('pages');
const newBookRead = document.getElementById('read-radio')
const newBookNotRead = document.getElementById('notread-radio');

newBookBtn.addEventListener('click', () => {
	dialog.showModal();
});

submitBookBtn.addEventListener('click', () => {
	const title = newBookTitle.value;
	const author = newBookAuthor.value;
	const pages = newBookPages.value;
	let read;

	if (newBookRead.checked) {
		console.log('A new book is read')
		read = 'Read';
	} else {
		console.log('A new book is not read')
		read = 'Not read';
	}

	addBookToLibrary(title, author, pages, read);
	event.preventDefault();
})

cancelNewBookButton.addEventListener('click', () => {
	dialog.close();
})

const myLibrary = [
	{
		title: 'The Hobbit',
		author: 'J.R.R. Tolkien',
		pages: 320,
		read: 'Read'
	},
	{
		title: '1984',
		author: 'George Orwell',
		pages: 328,
		read: 'Not read'
	},
	{
		title: 'Old Man and the Sea',
		author: 'Ernest Hemingway',
		pages: 112,
		read: 'Read'
	}
];

function Book(title, author, pages, read) {
  this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
};

function addBookToLibrary(title, author, pages, read) {
	console.log(title, author, pages, read)

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