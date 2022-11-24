let myLibrary = [];

function Book(title, author, pages, read) {
   this.title = title.toUpperCase();
   this.author = author.toUpperCase();
   this.pages = pages;
   this.read = read;
}
// form functionality
// ********************************************************************************************************
let data__ = 0;
let bookName = document.querySelector("#book-name");
let bookAuthor = document.querySelector("#book-author");
let bookPages = document.querySelector("#book-pages");
let addBookBtn = document.querySelector(".add-book");
let bookRead = document.querySelectorAll('input[name="book-read"]');
let goBackBtn = document.querySelector(".go-back");

function addBookToLibrary() {
   let readStatus = undefined;

   for (item of bookRead) {
      if (item.checked) {
         readStatus = item.value;
      }
   }

   let newBook = new Book(
      bookName.value,
      bookAuthor.value,
      bookPages.value,
      Boolean(readStatus)
   );
   newBook.data = data__;
   data__ = data__ + 1;
   myLibrary.push(newBook);
   displayNewBook();
   formPage.classList.toggle("hide");
}

addBookBtn.addEventListener("click", addBookToLibrary);
goBackBtn.addEventListener("click", () => formPage.classList.toggle("hide"));
// DOM manipulation and changes
// ***************************************************************************************************8
let main = document.querySelector("main");
let newBookButton = document.querySelector(".new-book");
let formPage = document.querySelector(".form-page");

newBookButton.addEventListener("click", () => {
   formPage.classList.toggle("hide");
});

function displayNewBook() {
   main.innerHTML = "";

   for (item of myLibrary) {
      let card = document.createElement("div");
      let bookName = document.createElement("div");
      let bookAuthor = document.createElement("div");
      let bookPages = document.createElement("div");
      let bookRead = document.createElement("button");
      let bookRemove = document.createElement("button");

      if (item.read) {
         bookRead.classList.add("read");
      } else {
         bookRead.classList.add("not-read");
      }

      bookRemove.classList.add("remove", "btn");

      bookRemove.setAttribute("data", item.data);
      bookRead.setAttribute("data", item.data);

      bookRead.classList.add("btn");
      card.classList.add("card");
      bookName.textContent = `${item.title}`;
      bookAuthor.textContent = `By ${item.author} `;
      bookPages.textContent = `${item.pages} pages`;
      bookRead.textContent = item.read === true ? "Read" : "Not read";
      bookRemove.textContent = "Remove";

      main.append(card);
      card.append(bookName, bookAuthor, bookPages, bookRead, bookRemove);

      bookRead.addEventListener("click", (e) => {
         myLibrary[
            myLibrary.findIndex(
               (a) => a.data == Number(e.target.getAttribute("data"))
            )
         ].read =
            !myLibrary[
               myLibrary.findIndex(
                  (a) => a.data == Number(e.target.getAttribute("data"))
               )
            ].read;

         displayNewBook();
      });

      bookRemove.addEventListener("click", () => {
         (myLibrary = myLibrary.filter(
            (a) => a.data !== Number(bookRemove.getAttribute("data"))
         )),
            displayNewBook();
      });
   }
}
// remove card
