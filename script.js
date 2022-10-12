const dialog = document.querySelector('.add-book');
const openDialog = document.querySelector('.add-button');
const closeDialog = document.querySelector('#close-button');
const addButton = document.querySelector('button');
let removeManga = document.querySelectorAll('.remove');

//Database

let myLibrary = [];

function manga(name, author, pages, state){
    this.name = name
    this.author = author
    this.pages = pages
    this.state = state
}

function addMangaToLibrary(){
    const title = document.querySelector('#name').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const state = document.querySelector('#state').checked;

    const mangaCard = document.querySelector('.manga-cards');

    const card = document.createElement('div');
    const readButton = document.createElement('div');
    const removeButton = document.createElement('div');
    const newTitle = document.createElement('h2');
    const newAuthor = document.createElement('h3');
    const newPages = document.createElement('h3');

    card.classList = 'card';
    readButton.classList = 'read';
    removeButton.classList = 'remove';

    newTitle.textContent = title;
    newAuthor.textContent = author;
    newPages.textContent = 'Pages: ' + pages;

    if(!state){
        readButton.textContent = "Not Read";
    }
    else{
        readButton.textContent = "Read";
    }
    removeButton.textContent = 'Remove';

    card.append(newTitle, newAuthor, newPages, readButton, removeButton)
    mangaCard.appendChild(card);

    const item = new manga(title, author, pages, state);
    myLibrary.push(item);
    console.log(item);

    removeManga = document.querySelectorAll('.remove');
    console.log(removeManga);

    removeManga.forEach((button) => {
        button.addEventListener('click', () => {
            button.parentNode.remove();
        })
});

}

// Dialog Events
openDialog.addEventListener('click', () => {
    dialog.showModal();
})

closeDialog.addEventListener('click', () => {
    dialog.close();

})

addButton.addEventListener('click', () => {
    addMangaToLibrary();
    dialog.close();
    console.log(myLibrary);
})


//OUTLINE
// 1. Create a function
// 2. take data from dialog
// 3. construct data
// 4. add object to array
// 5. update it to manga-cards
// 6. 