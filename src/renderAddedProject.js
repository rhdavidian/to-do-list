import { chores } from './addProject';
import { populateDetailsAE } from './populateDetailsAfterEdit';
import { renderTodos, renderCompletedTodos } from './renderTodos';

function renderAddedProject(title) {
    chores.forEach((obj) => {
        if (title === obj.title) {
            populateDetailsAE(obj);
            renderTodos(obj);
            renderCompletedTodos(obj);
        };
    });
}

export { renderAddedProject }