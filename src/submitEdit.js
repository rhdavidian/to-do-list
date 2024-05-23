import { chores, addProject } from './addDelete';
import { render } from './render';
const titleInput = document.getElementById('titleInput');
const notesInput = document.getElementById('notesInput');
const submitModalBtn = document.getElementById('submitModal');




function submit() {
    submitModalBtn.addEventListener('click', (e) => {
        const title = titleInput.value;
        const notes = notesInput.value;
        if (title === '') {
            alert('You need a title at least')
        } else {
            addProject(title, notes);
            render();
            titleInput.value = '';
            notesInput.value = '';
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
