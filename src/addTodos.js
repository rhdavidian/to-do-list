// Take user input from box, add it to 'todos' property (array) in the selected object/project

import { chores, memory } from './addProject'
import { renderTodos , renderCompletedTodos} from './renderTodos';
const addTodoBtn = document.getElementById('addTodoBtn');

// Takes value from input, pushes it to array in objects
function addTodo() {
    addTodoBtn.addEventListener('click', () => {
        const todoInput = document.getElementById('addTodoInput');
        const projectTitle = document.getElementById('detailsTopRow');
        let todo = todoInput.value;

        chores.forEach((obj) => {
            if (projectTitle.textContent === obj.title) {  
                if (todo === ''){
                    alert('Cannot be blank');
                } else {            
                    obj.todos.push(todo);
                    todoInput.value = '';
                    console.log(obj.todos);
                    todoInput.focus();
                    memory();
                }
            };
        });
    });
};

function moveToCompleted() {
    const projectTitle = document.getElementById('detailsTopRow');
    document.querySelectorAll('.todoCheck').forEach((item) => {
        item.addEventListener('click', (evt) => {
            const completedTodo = evt.target.nextElementSibling.textContent;
            chores.forEach((obj) => {
                if (projectTitle.textContent === obj.title) {
                    obj.completed.unshift(completedTodo);
                    console.log(obj.completed);
                    deleteAfterComplete(completedTodo);
                    memory();
                };
            });
        });
    });
}
function deleteAfterComplete(completedTodo) {
    chores.forEach((obj) => {
        const projectTitle = document.getElementById('detailsTopRow');
        if (projectTitle.textContent === obj.title) {  
            const index = obj.todos.indexOf(completedTodo);
            obj.todos.splice(index, 1);
            renderTodos(obj);
            renderCompletedTodos(obj);
        };
    });
}

function revertCompleted(){
    const projectTitle = document.getElementById('detailsTopRow');
    document.querySelectorAll('.todoCheck').forEach((item) => {
        item.addEventListener('click', (evt) => {
            const revertedTodo = evt.target.nextElementSibling.textContent;
            chores.forEach((obj) => {
                if (projectTitle.textContent === obj.title) {
                    obj.todos.push(revertedTodo);
                    deleteAfterRevert(revertedTodo);
                    memory();
                };
            });
        });
    });
}

function deleteAfterRevert(revertedTodo) {
    chores.forEach((obj) => {
        const projectTitle = document.getElementById('detailsTopRow');
        if (projectTitle.textContent === obj.title) {  
            const index = obj.completed.indexOf(revertedTodo);
            obj.completed.splice(index, 1);
            renderTodos(obj);
            renderCompletedTodos(obj);
        };
    });
}
export { addTodo, moveToCompleted, revertCompleted };