import { addProject, deleteProject } from "./addDelete";
import { render } from './render';
import { submit } from './submitEdit';
import './style.css';
import { addTodo } from './addTodos';
import { openModal, closeModal, populateDetails, populateTodosAfterAdd } from "./modalOpenClose";
// import { renderTodos } from "./renderTodos";

addProject('Laundry', 'Wash, dry, fold', '1.5 hours');
addProject('Clean car', 'Throw out junk and vacuum the floor mats', '2 hours');
addProject('Dishes', 'Unload clean dishes, reload dishwasher, run it', '30 minutes');
render();

// commented-out variables means they're not needed here; keeping for time 'in case'

// don't delete projects const
const projects = document.getElementById('navList');
// const addTodoBtn = document.getElementById('addTodoBtn');

// projects.addEventListener('click', openModalDetails);
projects.addEventListener('click', populateDetails);

// addTodoBtn.addEventListener('click', addTodo);
submit();
addTodo();
populateTodosAfterAdd();
// renderTodos();
openModal();
closeModal();
// closeModalDetails();
