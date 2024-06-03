import { addProject, deleteProject } from "./addProject";
import { render } from './render';
import { submit } from './submitEdit';
import './style.css';
import { addTodo } from './addTodos';
import { openModal, closeModal, populateDetails, populateTodosAfterAdd } from "./modalOpenClose";
import { deleteTodo } from "./deleteTodo";
import { hideTodoInput } from "./hideTodoInput";
// import { renderTodos } from "./renderTodos";

hideTodoInput();
addProject('Laundry', 'Wash, dry, fold', '1.5');
addProject('Clean car', 'Throw out junk and vacuum the floor mats', '2');
addProject('Dishes', 'Unload clean dishes, reload dishwasher, run it', '.5');
render();

// commented-out variables means they're not needed here; keeping for time 'in case'

// don't delete projects const
const projects = document.getElementById('navList');
projects.addEventListener('click', populateDetails);

// const addTodoBtn = document.getElementById('addTodoBtn');
// projects.addEventListener('click', openModalDetails);

submit();
addTodo();
populateTodosAfterAdd();
// renderTodos();
openModal();
closeModal();
// closeModalDetails();
// deleteTodo();

