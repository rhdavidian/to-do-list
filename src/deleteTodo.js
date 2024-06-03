import { chores } from './addProject'
import { renderTodos } from './renderTodos';

// compares text in div to value in todo array, deletes that one and renders
function deleteTodo() {
    document.querySelectorAll('.todoDel').forEach(item => { 
        item.addEventListener('click', (evt) => {
            const todo = evt.target.previousElementSibling.textContent;
            console.log(todo);
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
            console.log(index);
            renderTodos(obj);
        };
    })
}

export { deleteTodo }
