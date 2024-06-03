import { chores } from './addProject';
import { renderTodos } from "./renderTodos";
import { hideTodoInput } from './hideTodoInput';
import { deleteTodo } from './deleteTodo'

const openModalBtn = document.getElementById('addProject');
const closeModalBtn = document.getElementById('closeModal');
const titleInput = document.getElementById('titleInput');
const notesInput = document.getElementById('notesInput');
const overlay = document.getElementById('overlay');

const closeModalDetailsBtn = document.getElementById('closeModalDetails');
const overlayDetails = document.getElementById('overlayDetails');

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

function populateDetails(evt){
    const detailsTopRow = document.getElementById('detailsTopRow');
    const notes = document.getElementById('notes');
    const duration = document.getElementById('duration');

    if (evt.target.className === "project") {
        let identify = evt.target.textContent;
        detailsTopRow.textContent = identify;
        hideTodoInput();
        chores.forEach((obj) => {
            if (identify === obj.title){
                notes.textContent = 'Notes: ' + obj.notes;
                duration.textContent = 'Duration: ' + obj.duration;
                renderTodos(obj);
            }
        });  
    }
}

function populateTodosAfterAdd(){
    const addTodoBtn = document.getElementById('addTodoBtn');
    addTodoBtn.addEventListener('click', (evt) => {
        const detailsTopRow = document.getElementById('detailsTopRow');
        if (evt.target.id === "addTodoBtn") {
            let identify = detailsTopRow.textContent;
            chores.forEach((obj) => {
                if (identify === obj.title){ 
                    renderTodos(obj);
                }
            });   
        }
    });
}

export { openModal, closeModal, populateDetails, populateTodosAfterAdd }

// function closeModalDetails() {
//     closeModalDetailsBtn.addEventListener('click', (e) => {
//         overlayDetails.style.display = "none";
//     });
// };

// Not Needed anymore; When you click on a chore, all of the object's values appear in a modal
// function openModalDetails(evt) {

//     let title = document.getElementById('title');
//     let notes = document.getElementById('notes');
//     if (evt.target.className === "project"){
//         overlayDetails.style.display = "block";
//         let identify = evt.target.textContent;
//         chores.forEach((obj) => {
//             if (identify === obj.title){
//                 title.textContent = obj.title;
//                 notes.textContent = 'Notes: ' + obj.notes;
//             }
//         });
//     }
// };




