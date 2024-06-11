import { chores } from './addProject'
import { renderTodos, renderCompletedTodos } from './renderTodos';

// compares text in div to value in todo array, deletes that one and renders
function deleteTodo() {
    document.querySelectorAll('.todoDel').forEach(item => { 
        item.addEventListener('click', (evt) => {
            const todo = evt.target.previousElementSibling.textContent;
            deleteTodoFromArray(todo);
        })
        
    });
}
function deleteTodoFromArray(todo){
    chores.forEach((obj) => {
        const projectTitle = document.getElementById('detailsTopRow');
        if (projectTitle.textContent === obj.title) {  
            const index = obj.todos.indexOf(todo);
            obj.todos.splice(index, 1);
            renderTodos(obj);
        };
    })
}

function deleteCompletedTodo() {
    document.querySelectorAll('.todoDel').forEach(item => { 
        item.addEventListener('click', (evt) => {
            const todo = evt.target.previousElementSibling.textContent;
            deleteFromCompletedArray(todo);
        })
    });
}
function deleteFromCompletedArray(todo){
    chores.forEach((obj) => {
        const projectTitle = document.getElementById('detailsTopRow');
        if (projectTitle.textContent === obj.title) {  
            const index = obj.completed.indexOf(todo);
            obj.completed.splice(index, 1);
            renderCompletedTodos(obj);
        };
    })
}


export { deleteTodo, deleteTodoFromArray, deleteCompletedTodo }
