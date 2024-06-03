// Take user input from box, add it to 'todos' property (array) in the selected object/project

import { chores } from './addProject'
import { deleteTodo } from './deleteTodo';
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
                }
            };
        });
    });
};

export { addTodo };