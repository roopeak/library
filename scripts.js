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

// Event listeners to the new book form
newBookBtn.addEventListener('click', () => {
	dialog.showModal();
});

submitBookBtn.addEventListener('click', (event) => {
	const title = newBookTitle.value;
	const author = newBookAuthor.value;
	const pages = newBookPages.value;
	let read;

	if (title != '' && author != '' && pages != '') {
		if (newBookRead.checked) {
			read = 'Read';
		} else {
			read = 'Not read';
		}
		
		addBookToLibrary(title, author, pages, read);
		clearNewBookForm();
		event.preventDefault();
		dialog.close();
	}
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
	},
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
	},
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
	},
];

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
};

// Adds a book to the library
function addBookToLibrary(title, author, pages, read) {
	const book = new Book(title, author, pages, read);
	myLibrary.push(book);
	generateCards();
};

// Generates book cards
function generateCards() {
	booksContainer.innerHTML = '';

	for (let i = 0; i < myLibrary.length; i++) {
		const bookCard = document.createElement('div');
		bookCard.classList.add('book-card');

		const bookTitle = document.createElement('h3');
		const bookAuthor = document.createElement('p');
		const bookPages = document.createElement('p');
		const bookCardButtons = document.createElement('div');
		bookCardButtons.classList.add('book-card-buttons');
		const bookRead = document.createElement('button');
		const removeBook = document.createElement('button');
		
		booksContainer.appendChild(bookCard);
		bookCard.appendChild(bookTitle);
		bookCard.appendChild(bookAuthor);
		bookCard.appendChild(bookPages);
		bookCardButtons.appendChild(bookRead);
		bookCardButtons.appendChild(removeBook);
		bookCard.appendChild(bookCardButtons);
	
		bookTitle.textContent += myLibrary[i].title;
		bookAuthor.textContent += myLibrary[i].author;
		bookPages.textContent += myLibrary[i].pages;
		bookRead.textContent += myLibrary[i].read;
		removeBook.textContent = 'Remove book';

		// Add event listener to removeBook button
		removeBook.addEventListener('click', () => {
			removeBookFromLibrary(i);
		})

		// Add event listener to bookRead button
		bookRead.addEventListener('click', () => {
			if (bookRead.textContent === 'Read') {
				bookRead.textContent = 'Not read';
			} else {
				bookRead.textContent = 'Read';
			}

			toggleReadStatus(i);
		})
	}
}

// Removes a book
function removeBookFromLibrary(index) {
	myLibrary.splice(index, 1);
	generateCards();
}

// Change book read status
function toggleReadStatus(index) {
	if (myLibrary[index].read === 'Read') {
		myLibrary[index].read = 'Not read';
	} else {
		myLibrary[index].read = 'Read';
	}

	generateCards();
}

// Clears the new book form
function clearNewBookForm() {
	newBookTitle.value = '';
	newBookAuthor.value = '';
	newBookPages.value = '';
	newBookRead.value = '';
	newBookNotRead.value = ''; 
}

// Generate book cards at start if there are books in myLibrary
if (myLibrary.length > 0) {
	generateCards();
}

class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}

	get title() {
		return this._title;
	}

	get author() {
		return this._author;
	}

	get pages() {
		return this._pages;
	}

	get read() {
		return this._read;
	}
}