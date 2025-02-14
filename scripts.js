class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}

class Library {
	constructor() {
		this.books = [];
		this.booksContainer = document.querySelector('.books-container');
		this.dialog = document.querySelector('dialog');
		this.newBookBtn = document.querySelector('.new-book-btn');
		this.cancelNewBookButton = document.querySelector('dialog button');
		this.submitBookBtn = document.getElementById('submit-book');
		this.newBookTitle = document.getElementById('title');
		this.newBookAuthor = document.getElementById('author');
		this.newBookPages = document.getElementById('pages');
		this.newBookRead = document.getElementById('read-radio');
		this.newBookNotRead = document.getElementById('notread-radio');

		this.init();
	}

	init() {
		// Event Listeners
		this.newBookBtn.addEventListener('click', () => this.dialog.showModal());
		this.cancelNewBookButton.addEventListener('click', () => this.dialog.close());
		this.submitBookBtn.addEventListener('click', (event) => this.addBook(event));

		// Sample books to display initially
		this.books = [
			new Book('The Hobbit', 'J.R.R. Tolkien', 320, 'Read'),
			new Book('1984', 'George Orwell', 328, 'Not read'),
			new Book('Old Man and the Sea', 'Ernest Hemingway', 112, 'Read')
		];

		this.renderBooks();
	}

	addBook(event) {
		event.preventDefault();

		const title = this.newBookTitle.value;
		const author = this.newBookAuthor.value;
		const pages = this.newBookPages.value;
		const read = this.newBookRead.checked ? 'Read' : 'Not read';

		if (title && author && pages) {
			this.books.push(new Book(title, author, pages, read));
			this.clearNewBookForm();
			this.dialog.close();
			this.renderBooks();
		}
	}

	removeBook(index) {
		this.books.splice(index, 1);
		this.renderBooks();
	}

	toggleReadStatus(index) {
		this.books[index].read = this.books[index].read === 'Read' ? 'Not read' : 'Read';
		this.renderBooks();
	}

	renderBooks() {
		this.booksContainer.innerHTML = '';

		this.books.forEach((book, index) => {
			const bookCard = document.createElement('div');
			bookCard.classList.add('book-card');

			bookCard.innerHTML = `
				<h3>${book.title}</h3>
				<p>${book.author}</p>
				<p>${book.pages} pages</p>
				<div class="book-card-buttons">
					<button class="toggle-read">${book.read}</button>
					<button class="remove-book">Remove</button>
				</div>
			`;

			this.booksContainer.appendChild(bookCard);

			// Add event listeners to buttons
			bookCard.querySelector('.remove-book').addEventListener('click', () => this.removeBook(index));
			bookCard.querySelector('.toggle-read').addEventListener('click', () => this.toggleReadStatus(index));
		});
	}

	clearNewBookForm() {
		this.newBookTitle.value = '';
		this.newBookAuthor.value = '';
		this.newBookPages.value = '';
		this.newBookRead.checked = false;
		this.newBookNotRead.checked = false;
	}
}

// Initialize the Library
const myLibrary = new Library();
