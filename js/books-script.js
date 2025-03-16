
"use strict";
const books = [
    {
        title: "1984",
        author: "Georgre Orwell",
        category: "Fiction",
        year: "1949",
        image: "img/1984.webp",
    },

    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "Horror",
        year: "1960",
        image: "img/to-kill-a-mockingbird.webp"
    },

    {
        title: "The Silk Roads",
        author: "Peter Frankopan",
        category: "History",
        year: "2015",
        image: "img/the-silk-roads.webp"
    },
    
    {
        title: "The Shining",
        author: "Stephen King",
        category: "Horror",
        year: "1980",
        image: "img/the-shining.webp"
    }

];

const categorySelect = document.getElementById("category-select");
const booksContainer = document.getElementById("books-container");

function displayBooks(filteredBooks) {
    booksContainer.innerHTML = ""; 
    filteredBooks.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author} (${book.year})</p>
            <p><strong>Kategori:</strong> ${book.category}</p>
        `;
        booksContainer.appendChild(bookElement);
    });
}

function filterBooks() {
    const selectedCategory = categorySelect.value.toLowerCase();
    if (selectedCategory === "all") {
        displayBooks(books);
    } else {
        const filteredBooks = books.filter(book => book.category === selectedCategory);
        displayBooks(filteredBooks);
    }
}

categorySelect.addEventListener("change", filterBooks);

displayBooks(books);