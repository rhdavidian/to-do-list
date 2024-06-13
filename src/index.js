import { addProject, deleteProject, chores} from "./addProject";
import { render } from './render';
import { submit, editSubmit } from './submitEdit';
import './style.css';
import { addTodo } from './addTodos';
import { openModal, closeModal, populateDetails, populateTodosAfterAdd, closeEditModal } from "./modalOpenClose";
import { hideTodoInput } from "./hideTodoInput";

// chores = JSON.parse(localStorage.getItem('allProjects') || '[]' );

hideTodoInput();
// addProject('Laundry', 'Wash, dry, fold', '1.5', '12/10/2024');
// addProject('Clean car', 'Throw out junk and vacuum the floor mats', '2');
// addProject('Dishes', 'Unload clean dishes, reload dishwasher, run it', '.5' );
render();

// don't delete projects const
const projects = document.getElementById('navList');
projects.addEventListener('click', populateDetails);

submit();
editSubmit();
addTodo();
populateTodosAfterAdd();
openModal();
closeModal();
closeEditModal();
deleteProject();


