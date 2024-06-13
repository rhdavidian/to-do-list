import Project from './projectClass.js';
import { render } from './render.js';
import { closeEditModal } from './modalOpenClose.js';
import { hideTodoInput } from './hideTodoInput.js';

let chores = [];
chores = JSON.parse(localStorage.getItem('allProjects') || '[]' );


function addProject(title, notes, duration, dueDate) {
    const newToDo = new Project(title, notes, duration, dueDate);
    
    console.log(newToDo);
    chores.unshift(newToDo);
    memory();
    return chores;
};

function deleteProject() {
    const deleteBtn = document.getElementById('deleteProject');
    const title = document.getElementById('detailsTopRow');
    const todoContainer = document.getElementById('todoContainer');
    const completedTodos = document.getElementById('completedTodos');

    deleteBtn.addEventListener('click', () =>{
        chores.forEach((obj) => {
            if (title.textContent === obj.title){
                const index = chores.indexOf(obj);
                chores.splice(index, 1);
                render();
                title.textContent = 'Select a Project';
                hideTodoInput();
                while (todoContainer.firstChild){
                    todoContainer.removeChild(todoContainer.firstChild);
                };
                while (completedTodos.firstChild){
                    completedTodos.removeChild(completedTodos.firstChild);
                }
            }
        closeEditModal();
        memory();
        });
    })
}

function memory() {
    localStorage.setItem('allProjects', JSON.stringify(chores));
    // chores = JSON.parse(localStorage.getItem('allProjects') || '[]' );
}

export { addProject, chores, deleteProject, memory };