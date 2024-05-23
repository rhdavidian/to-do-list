import { chores } from './addDelete'
const mainList = document.querySelector('.projects');
const topRow = document.getElementById('projectsTopRow');

function render(){
    while (mainList.firstChild) {
        mainList.removeChild(mainList.firstChild)
    }
    mainList.appendChild(topRow);

    for (let i = 0; i < chores.length; i++){
        const project = document.createElement('div');
        project.classList.add('project');
        chores.forEach((obj) => {
            if (i === obj.id){
            project.textContent = obj.title;
            return project;
            };
        })
        mainList.appendChild(project);

    //Code below works, modifying to use id property in object.
    // for (let i = 0; i < chores.length; i++){
    //     const project = document.createElement('div');
    //     project.classList.add('project');
    //     project.setAttribute('id', 'tile' + i);
    //     project.textContent = chores[i].title;
    //     mainList.appendChild(project);
    };
};

export { render };