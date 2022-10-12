const dialog = document.querySelector('.add-book');
const openDialog = document.querySelector('.add-button');
const closeDialog = document.querySelector('#close-button');
const addButton = document.querySelector('button');

// Dialog Events
openDialog.addEventListener('click', () => {
    dialog.showModal();
})

closeDialog.addEventListener('click', () => {
    dialog.close();

})

addButton.addEventListener('click', () => {
    dialog.close();
})

//Database

let myLibrary = [];

function manga(name, author, pages, state){
    this.name = name
    this.author = author
    this.pages = pages
    this.state = state
}

function addMangaToLibrary(){
    item = manga()
    myLibrary.push(item);
}



//OUTLINE
// 1. Create a function
// 2. 
// 
// 
// 
// 