const todoInput = document.getElementById('addTodoInput');
const projectTitle = document.getElementById('detailsTopRow');
const todoContainer = document.getElementById('todoContainer');

import { chores } from './addDelete';

//rerender the todo's when the add button is clicked, and when a project is clicked
//without event listener 
function renderTodos(obj) {
    while (todoContainer.firstChild) {
        todoContainer.removeChild(todoContainer.firstChild)
    }
    let todoArray = obj.todos;
    todoArray.forEach(item => {
        const todoDiv = document.createElement('div');
        todoDiv.textContent = item;
        console.log(todoDiv.textContent);
        todoContainer.appendChild(todoDiv);
    });      
}

export { renderTodos }