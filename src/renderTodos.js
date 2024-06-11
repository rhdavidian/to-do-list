import { deleteCompletedTodo, deleteTodo } from './deleteTodo';
import { moveToCompleted, revertCompleted } from './addTodos';
const todoContainer = document.getElementById('todoContainer');

function renderTodos(obj) {
    while (todoContainer.firstChild ) {
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
    moveToCompleted();
    revertCompleted();
}

function renderCompletedTodos(obj) {
    const completedTodos = document.getElementById('completedTodos');
    while (completedTodos.firstChild) {
        completedTodos.removeChild(completedTodos.firstChild);
    }
    let completedArray = obj.completed;
    completedArray.forEach(item => {
        const todoDiv = document.createElement('div');
        const todoCheck = document.createElement('div');
        const todoDel = document.createElement('div');
        todoDiv.textContent = item;
        todoDel.innerHTML = 'X';
        todoDiv.classList.add('completed', 'todoDiv');
        todoDel.classList.add('placeholder', 'todoDel');
        todoCheck.classList.add('bubbleFill', 'todoCheck');
        completedTodos.appendChild(todoCheck);
        completedTodos.appendChild(todoDiv);
        completedTodos.appendChild(todoDel);
    }); 
    revertCompleted();
    deleteCompletedTodo();
}

export { renderTodos, renderCompletedTodos }