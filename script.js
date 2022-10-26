const dialog = document.querySelector(".add-book");
const addButton = document.querySelector(".add-button");
const closeDialog = document.querySelector("#close-button");
const submitButton = document.querySelector("#sumbit-form");
const mangaForm = document.querySelector("form");
let readManga = document.querySelectorAll(".read");
let removeManga = document.querySelectorAll(".remove");

// Database

const myLibrary = [];

class Manga {
  constructor(name, author, pages, state) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.state = state;
  }
}

function removeMangaFromLibrary() {
  removeManga.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentNode.remove();
    });
  });
}

function formValidation() {
  const inputName = document.querySelector("#name");
  const inputAuthoer = document.querySelector("#author");
  const inputPages = document.querySelector("#pages");

  const inputArrays = [inputName, inputAuthoer, inputPages];

  inputArrays.forEach((element) => {
    element.addEventListener("input", () => {
      element.setCustomValidity("");
      element.checkValidity();
    });
  });

  inputArrays.forEach((element) => {
    element.addEventListener("invalid", () => {
      if (element.value === "") {
        element.setCustomValidity("Please enter the fields.");
        console.log("empty");
      } else {
        element.setCustomValidity("Please enter valid input.");
        console.log("input wrong");
      }
    });
  });
}

function readState() {
  readManga.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.textContent === "Read") {
        button.textContent = "Not Read";
        button.style.backgroundColor = "#a855f7";
      } else {
        button.textContent = "Read";
        button.style.backgroundColor = "#d8b4fe";
      }
    });
  });
}

function addMangaToLibrary() {
  const title = document.querySelector("#name").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const state = document.querySelector("#state").checked;

  const mangaCard = document.querySelector(".manga-cards");

  const card = document.createElement("div");
  const readButton = document.createElement("div");
  const removeButton = document.createElement("div");
  const newTitle = document.createElement("h2");
  const newAuthor = document.createElement("h3");
  const newPages = document.createElement("h3");

  card.classList = "card";
  readButton.classList = "read";
  removeButton.classList = "remove";

  newTitle.textContent = title;
  newAuthor.textContent = author;
  newPages.textContent = `Pages: ${pages}`;

  if (!state) {
    readButton.textContent = "Not Read";
  } else {
    readButton.textContent = "Read";
  }
  removeButton.textContent = "Remove";

  card.append(newTitle, newAuthor, newPages, readButton, removeButton);
  mangaCard.appendChild(card);

  const item = new Manga(title, author, pages, state);
  myLibrary.push(item);
  console.log(item);

  removeManga = document.querySelectorAll(".remove");
  readManga = document.querySelectorAll(".read");
  console.log(removeManga);

  readState();
}

// Dialog Events
addButton.addEventListener("click", () => {
  dialog.showModal();
});

closeDialog.addEventListener("click", () => {
  dialog.close();
});

mangaForm.addEventListener("submit", () => {
  console.log("submit");
  addMangaToLibrary();
  // dialog.close();
});

formValidation();
readState();
removeMangaFromLibrary();
