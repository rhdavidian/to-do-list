import { addProject, deleteProject } from "./addDelete";
import { render } from './render';
import { submit } from './submitEdit';
import './style.css';
import { openModal, closeModal, openModalDetails, closeModalDetails } from "./modalOpenClose";


addProject('Laundry', 'Wash, dry, fold');
addProject('Clean car', 'Throw out junk and vacuum the floor mats');
addProject('Dishes', 'Unload clean dishes, reload dishwasher, run it');
render();

// commented-out variables means they're not needed here; keeping for time 'in case'

// const openModalBtn = document.getElementById('addProject');
// const closeModalBtn = document.getElementById('closeModal');
// const submitModalBtn = document.getElementById('submitModal');
// const titleInput = document.getElementById('titleInput');
// const notesInput = document.getElementById('notesInput');

const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
// don't delete projects const
const projects = document.getElementById('projects');

// Should be good to delete until ***

// submitModalBtn.addEventListener('click', (e) => {
//     const title = titleInput.value;
//     const notes = notesInput.value;
//     if (title === '') {
//         alert('You need a title at least')
//     } else {
//         addProject(title, notes);
//         render();
//         titleInput.value = '';
//         notesInput.value = '';
//     };
// });

//*** 

projects.addEventListener('click', openModalDetails);


openModal();
closeModal();
closeModalDetails();
submit();



