import Project from './projectClass.js';

let chores = [];
let counter = 0;

function addProject(title, notes, id) {
    id = counter;
    const newToDo = new Project(title, notes, id);
    // this.title = 'Laundry';
    // this.description = 'Wash, dry, and fold clothes';
    // this.due = 'Tomorrow';
    // this.priority = 2;
    // this.duration = '90';
    // this.notes = 'Don\'t forget to air dry the sweater'
    // this.category = 'Life';
    
    console.log(newToDo);
    chores.unshift(newToDo);
    counter += 1; 
    return chores;
};

function deleteProject() {
 
};

export { deleteProject, addProject, chores };