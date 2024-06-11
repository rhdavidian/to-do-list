import { chores } from './addProject'

function render(){
    const navList = document.getElementById('navList')
    while (navList.firstChild) {
        navList.removeChild(navList.firstChild)
    }

    chores.forEach(obj => {
        const project = document.createElement('li');
        project.classList.add('project');
        project.textContent = obj.title;
        navList.appendChild(project);
    });
};

export { render };