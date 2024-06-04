import { chores } from './addProject';
function populateDetailsAE(obj) {
    const detailsTopRow = document.getElementById('detailsTopRow');
    const notes = document.getElementById('notes');
    const duration = document.getElementById('duration');
    const titleEdit = document.getElementById('titleEdit');
    // chores.forEach((obj) => {
    //     if (titleEdit.value === obj.title) {
            detailsTopRow.textContent = obj.title;
            notes.textContent = obj.notes;
            duration.textContent = obj.duration;
    //     }
    // });
}

export { populateDetailsAE }