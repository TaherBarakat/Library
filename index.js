let boo_1 = {
   title: "theeqdas misrebles",
   auther: "myadaef momas",
   pages: 333,
};
let boo = {
   title: "the misrebles",
   auther: "my mom",
   pages: 444,
};

let main = document.querySelector("main");

let myLibrary = [boo_1, boo];

for (item of myLibrary) {
   let bookName = document.createElement("div");

   bookName.innerHTML = `
   <div> ${item.title} <\div>
   <div> ${item.auther} <\div>
   <div> ${item.pages} <\div>`;

   main.appendChild(bookName);
}

fo;
function Book() {
   // the constructor...
}

function addBookToLibrary() {
   // do stuff here
}
