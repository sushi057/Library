const dialog = document.querySelector('.add-book');
const openDialog = document.querySelector('.add-button');
const closeDialog = document.querySelector('#close-button');
const addButton = document.querySelector('button');

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

    item = manga(title, author, pages, state);
    myLibrary.push(item);
    console.log(item);
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