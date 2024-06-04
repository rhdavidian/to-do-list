import { chores, addProject } from './addProject';
import { render } from './render';
import { closeEditModal } from './modalOpenClose';
import { populateDetailsAE } from './populateDetailsAfterEdit';
const titleInput = document.getElementById('titleInput');
const notesInput = document.getElementById('notesInput');
const durationInput = document.getElementById('durationInput');
const submitModalBtn = document.getElementById('submitModal');


function submit() {
    submitModalBtn.addEventListener('click', (e) => {
        const title = titleInput.value;
        const notes = notesInput.value;
        const duration = durationInput.value;
        if (title === '') {
            alert('You need a title at least')
        } else {
            addProject(title, notes, duration);
            render();
            titleInput.value = '';
            notesInput.value = '';
            durationInput.value = '';
        };
    });
};

function editSubmit(){
    const submitEdit = document.getElementById('submitEdit');
    const projectTitle = document.getElementById('detailsTopRow');
    const titleEdit = document.getElementById('titleEdit');
    const notesEdit = document.getElementById('notesEdit');
    const durationEdit = document.getElementById('durationEdit');
    submitEdit.addEventListener('click', () => {
        chores.forEach((obj) => {
            if (projectTitle.textContent === obj.title) {
                obj.notes = notesEdit.value;
                obj.duration = durationEdit.value;
                obj.title = titleEdit.value;
                console.log(obj);
                render();
                populateDetailsAE(obj);

            }
        closeEditModal();
        });

    })
    //Modal is pre-populated with current values in the inputs
        //input.value = chores[id].property
    //Edit button changes the values referenced by chores[id]
    //re-render array
}

function renderEdit(){
    const editDeleteBtn = document.getElementById('editDeleteBtn');
    editDeleteBtn.style.display = "block";
}

export { submit, renderEdit, editSubmit }
