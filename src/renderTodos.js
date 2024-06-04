const todoInput = document.getElementById('addTodoInput');
const projectTitle = document.getElementById('detailsTopRow');
const todoContainer = document.getElementById('todoContainer');

import { deleteTodo } from './deleteTodo';
import { chores } from './addProject'

function renderTodos(obj) {
    // let counter = 0;
    while (todoContainer.firstChild) {
        todoContainer.removeChild(todoContainer.firstChild)
    }
    let todoArray = obj.todos;
    todoArray.forEach(item => {
        const todoDiv = document.createElement('div');
        const todoCheck = document.createElement('div');
        const todoDel = document.createElement('div');
        todoDiv.textContent = item;
        todoDel.innerHTML = 'X';
        todoDiv.classList.add('todoDiv');
        todoDel.classList.add('todoDel');
        todoCheck.classList.add('todoCheck');
        todoContainer.appendChild(todoCheck);
        todoContainer.appendChild(todoDiv);
        todoContainer.appendChild(todoDel);
    }); 
    deleteTodo();
}

export { renderTodos }