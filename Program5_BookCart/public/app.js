
const API_URL = "/api/books";

const form = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");

// READ BOOKS
async function loadBooks() {
    try {
        const response = await fetch(API_URL);
        const books = await response.json();

        bookList.innerHTML = "";

        books.forEach(book => {
            const div = document.createElement("div");
            div.className = "book";

            const title = document.createElement("h3");
            title.textContent = book.title;

            const author = document.createElement("p");
            author.textContent = "Author: " + book.author;

            const price = document.createElement("p");
            price.textContent = "Price: ₹" + book.price;

            const button = document.createElement("button");
            button.textContent = "Delete";
            button.className = "delete";
            button.onclick = () => deleteBook(book._id);

            div.append(title, author, price, button);
            bookList.appendChild(div);
        });

    } catch (error) {
        bookList.textContent = "Unable to load books.";
    }
}

// CREATE BOOK
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        price: Number(document.getElementById("price").value)
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        });

        if (!response.ok) {
            throw new Error("Unable to add book");
        }

        form.reset();
        loadBooks();

    } catch (error) {
        alert(error.message);
    }
});

// DELETE BOOK
async function deleteBook(id) {
    try {
        const response = await fetch(API_URL + "/" + id, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Unable to delete book");
        }

        loadBooks();

    } catch (error) {
        alert(error.message);
    }
}

// LOAD BOOKS
loadBooks();
