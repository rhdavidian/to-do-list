import { chores } from './addProject';
import { renderTodos } from "./renderTodos";
import { hideTodoInput } from './hideTodoInput';
import { renderEdit } from './submitEdit';

const overlay = document.getElementById('overlay');


function openModal() {
    const openModalBtn = document.getElementById('addProject');
    openModalBtn.addEventListener('click', () => {
        overlay.style.display = "block";
    });
};
function closeModal() {
    const titleInput = document.getElementById('titleInput');
    const notesInput = document.getElementById('notesInput');
    const durationInput = document.getElementById('durationInput');
    const closeModalBtn = document.getElementById('closeModal');
    closeModalBtn.addEventListener('click', () => {
        titleInput.value = '';
        notesInput.value = '';
        durationInput.value = '';
        overlay.style.display = "none";
    });
};

function openEditModal() {
    const titleEdit = document.getElementById('titleEdit');
    const notesEdit = document.getElementById('notesEdit');
    const durationEdit = document.getElementById('durationEdit');

    const notes = document.getElementById('notes');
    const duration = document.getElementById('duration');
    const title = document.getElementById('detailsTopRow')
    const overlayEdit = document.getElementById('overlayEdit');
    const editDeleteBtn = document.getElementById('editDeleteBtn');
    editDeleteBtn.addEventListener('click', () => {
        overlayEdit.style.display = "block";
        titleEdit.value = title.textContent;
        notesEdit.value = notes.textContent;
        durationEdit.value = duration.textContent;
    });
}
function closeEditModal() {
    const overlayEdit = document.getElementById('overlayEdit');
    const submitEdit = document.getElementById('submitEdit');
    const closeEdit = document.getElementById('closeEdit');
    closeEdit.addEventListener('click', (e) => {
        overlayEdit.style.display = "none";
    });
    submitEdit.addEventListener('click', () => {
        overlayEdit.style.display = 'none';
    })
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
                duration.textContent = obj.duration;
                renderTodos(obj);
                renderEdit();
                openEditModal();
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

export { openModal, closeModal, populateDetails, populateTodosAfterAdd, openEditModal, closeEditModal }

