import { chores } from './addDelete'
const navList = document.getElementById('navList')
// const currentProjects = document.getElementById()

function render(){
    while (navList.firstChild) {
        navList.removeChild(navList.firstChild)
    }
    navList.textContent = 'Current Projects:';

    chores.forEach(obj => {
        const project = document.createElement('li');
        project.classList.add('project');
        project.textContent = obj.title;
        navList.appendChild(project);
    });
   
    // //Code below works, modifying to use id property in object.
    // // for (let i = 0; i < chores.length; i++){
    // //     const project = document.createElement('div');
    // //     project.classList.add('project');
    // //     project.setAttribute('id', 'tile' + i);
    // //     project.textContent = chores[i].title;
    // //     mainList.appendChild(project);
    // };
};

export { render };