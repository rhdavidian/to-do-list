import { chores } from './addDelete'
const topRow = document.getElementById('detailsTopRow');
const navList = document.getElementById('navList')
// const currentProjects = document.getElementById()

function render(){
    while (navList.firstChild) {
        navList.removeChild(navList.firstChild)
    }
    // navList.appendChild(navList);
    navList.textContent = 'Current Projects:';

    for (let i = 0; i < chores.length; i++){
        const project = document.createElement('li');
        project.classList.add('project');
        chores.forEach((obj) => {
            if (i === obj.id){
            project.textContent = obj.title;
            return project;
            };
        })
        navList.appendChild(project);

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