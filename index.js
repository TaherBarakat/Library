let boo_1 = {
   title: "theeqdas misrebles",
   author: "myadaef momas",
   pages: 333,
};
let boo = {
   title: "the misrebles",
   auther: "my mom",
   pages: 444,
};

let main = document.querySelector("main");
let newBookButton = document.querySelector(".new-book");
let formPage = document.querySelector(".form-page");
let myLibrary = [boo_1, boo];

newBookButton.addEventListener("click", () => {
   formPage.classList.remove("hide");
});

// formPage.addEventListener("click", () => {
//    formPage.classList.add("hide");
// });

for (item of myLibrary) {
   let card = document.createElement("div");
   card.classList.add("card");

   card.innerHTML = `
   <div> ${item.title} <\div>
   <div> ${item.author} <\div>
   <div> ${item.pages} <\div>`;

   main.appendChild(card);
}

function Book() {
   // the constructor...
}

function addBookToLibrary() {
   // do stuff here
}
