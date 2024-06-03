import { chores, addProject } from './addProject';
import { render } from './render';
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

function edit(){
    //Button opens up the New Project modal, but with buttons that say Save and Cancel buttons
    //Modal is pre-populated with current values in the inputs
        //input.value = chores[id].property
    //Edit button changes the values referenced by chores[id]
    //re-render array
}

export { submit }
