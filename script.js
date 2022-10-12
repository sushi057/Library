const dialog = document.querySelector('.add-book');
const openDialog = document.querySelector('.add-button');
const closeDialog = document.querySelector('#close-button');
const addButton = document.querySelector('button');

openDialog.addEventListener('click', () => {
    dialog.showModal();
})

closeDialog.addEventListener('click', () => {
    dialog.close();
    
})

addButton.addEventListener('click', () => {
    dialog.close();
})