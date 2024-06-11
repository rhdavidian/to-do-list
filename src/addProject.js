import Project from './projectClass.js';
import { render } from './render.js';
import { closeEditModal } from './modalOpenClose.js';
import { hideTodoInput } from './hideTodoInput.js';

let chores = [];

function addProject(title, notes, duration) {
    const newToDo = new Project(title, notes, duration);
    // this.title = 'Laundry';
    // this.description = 'Wash, dry, and fold clothes';
    // this.due = 'Tomorrow';
    // this.priority = 2;
    // this.duration = '90';
    // this.notes = 'Don\'t forget to air dry the sweater'
    // this.category = 'Life';
    
    console.log(newToDo);
    chores.unshift(newToDo);
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
        });
    })


    //Add event listener to the modal's delete button
    //When clicked, it matches the detailsTopRow title to the obj.title with a chores.forEach(obj)
    //if matched, create a variable for chores.indexOf(obj)
    //chores.splice(index, 1);

}


export { addProject, chores, deleteProject };