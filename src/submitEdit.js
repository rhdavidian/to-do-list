import { chores, addProject, memory } from './addProject';
import { render } from './render';
import { closeEditModal, closeAfterSubmitNew } from './modalOpenClose';
import { populateDetailsAE } from './populateDetailsAfterEdit';
import { renderAddedProject } from './renderAddedProject';
import { hideTodoInput } from './hideTodoInput';

const titleInput = document.getElementById('titleInput');
const notesInput = document.getElementById('notesInput');
const durationInput = document.getElementById('durationInput');
const submitModalBtn = document.getElementById('submitModal');
const dueDateInput = document.getElementById('dueDateInput');

function submit() {
    submitModalBtn.addEventListener('click', () => {
        const title = titleInput.value;
        const notes = notesInput.value;
        const duration = durationInput.value;
        const dueDate = dueDateInput.value;
        if (title === '' || title.match(/^ *$/) !== null) {
            alert('You need a title at least');
            return;
        } else {
            addProject(title, notes, duration, dueDate);
            render();
            titleInput.value = '';
            notesInput.value = '';
            durationInput.value = '';
            dueDateInput.value = '';
        };
        closeAfterSubmitNew();
        renderAddedProject(title);
        hideTodoInput();
        memory();
    });
};

function editSubmit(){
    const submitEdit = document.getElementById('submitEdit');
    const projectTitle = document.getElementById('detailsTopRow');
    const titleEdit = document.getElementById('titleEdit');
    const notesEdit = document.getElementById('notesEdit');
    const durationEdit = document.getElementById('durationEdit');
    const dueDateEdit = document.getElementById('dueDateEdit');
    submitEdit.addEventListener('click', () => {
        chores.forEach((obj) => {
            if (projectTitle.textContent === obj.title) {
                if (titleEdit.value === '' || titleEdit.value.match(/^ *$/) !== null) {
                    obj.title = obj.title;
                    obj.duration = durationEdit.value;
                    obj.dueDate = dueDateEdit.value;
                    } else {
                    obj.notes = notesEdit.value;
                    obj.duration = durationEdit.value;
                    obj.title = titleEdit.value;
                    obj.dueDate = dueDateEdit.value;
                }
                console.log(obj);
                render();
                populateDetailsAE(obj);
                memory();
            }
        closeEditModal();
        });
    })
}

function renderEdit(){
    const editDeleteBtn = document.getElementById('editDeleteBtn');
    editDeleteBtn.style.display = "block";
}

export { submit, renderEdit, editSubmit }
