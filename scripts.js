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
	}
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
		booksContainer.appendChild(bookCard);

		const bookTitle = document.createElement('h3');
		const bookAuthor = document.createElement('p');
		const bookPages = document.createElement('p');
		const bookRead = document.createElement('button');
		const removeBook = document.createElement('button');
		
		bookCard.appendChild(bookTitle);
		bookCard.appendChild(bookAuthor);
		bookCard.appendChild(bookPages);
		bookCard.appendChild(bookRead);
		bookCard.appendChild(removeBook);
	
		bookTitle.textContent += myLibrary[i].title;
		bookAuthor.textContent += myLibrary[i].author;
		bookPages.textContent += myLibrary[i].pages;
		bookRead.textContent += myLibrary[i].read;
		removeBook.textContent = 'Remove book';

		// Add event listener to removeBook button
		removeBook.addEventListener('click', () => {
			removeBookFromLibrary(i);
		})
	}
}

// Removes a book
function removeBookFromLibrary(index) {
	myLibrary.splice(index, 1);
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