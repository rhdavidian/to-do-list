import { chores } from './addDelete';

const openModalBtn = document.getElementById('addProject');
const closeModalBtn = document.getElementById('closeModal');
const titleInput = document.getElementById('titleInput');
const notesInput = document.getElementById('notesInput');
const overlay = document.getElementById('overlay');

const closeModalDetailsBtn = document.getElementById('closeModalDetails');
const overlayDetails = document.getElementById('overlayDetails');

// const tiles = document.querySelector('.project');


function openModal() {
    openModalBtn.addEventListener('click', (e) => {
        overlay.style.display = "block";
    });
};
function closeModal() {
    closeModalBtn.addEventListener('click', (e) => {
        titleInput.value = '';
        notesInput.value = '';
        overlay.style.display = "none";
    });
};

function closeModalDetails() {
    closeModalDetailsBtn.addEventListener('click', (e) => {
        overlayDetails.style.display = "none";
    });
};

//When you click on a tile, all of the object's values appear in a modal
function openModalDetails(evt) {

    let title = document.getElementById('title');
    let notes = document.getElementById('notes');
    if (evt.target.className === "project"){
        overlayDetails.style.display = "block";
        let identify = evt.target.textContent;
        chores.forEach((obj) => {
            if (identify === obj.title){
                title.textContent = obj.title;
                notes.textContent = 'Notes: ' + obj.notes;
            }
        });
    }
    //Initial solution -- save for now
    // let title = document.getElementById('title');
    // let notes = document.getElementById('notes');
    // if (evt.target.className === "project"){
    //     overlayDetails.style.display = "block";
    //     let id = evt.target.getAttribute('id');
    //     id = id.slice(-1);
    //     title.textContent = chores[id].title;
    //     notes.textContent = 'Notes: ' + chores[id].notes;
    //     } else {
    //         return;
    //     };

}


export { openModal, closeModal, openModalDetails, closeModalDetails }