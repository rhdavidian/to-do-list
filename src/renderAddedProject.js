import { chores } from './addProject';
import { populateDetailsAE } from './populateDetailsAfterEdit';

function renderAddedProject(title) {
    chores.forEach((obj) => {
        if (title === obj.title) {
            populateDetailsAE(obj);
        };
    });
}

export { renderAddedProject }