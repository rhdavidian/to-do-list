import Project from './projectClass.js';

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
};

export { deleteProject, addProject, chores };