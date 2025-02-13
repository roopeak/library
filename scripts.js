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

let bookCardsGenerated = false;

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
	for (let i = 0; i < myLibrary.length; i++) {
		if (bookCardsGenerated === true) {
			i = myLibrary.length - 1;
		}

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
	
	bookCardsGenerated = true;
}

// Clears the new book form
function clearNewBookForm() {
	newBookTitle.value = '';
	newBookAuthor.value = '';
	newBookPages.value = '';
	newBookRead.value = '';
	newBookNotRead.value = ''; 
}

// Generate book cards at start if they exist
if (myLibrary.length > 0) {
	generateCards();
}