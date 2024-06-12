function populateDetailsAE(obj) {
    const detailsTopRow = document.getElementById('detailsTopRow');
    const notes = document.getElementById('notes');
    const duration = document.getElementById('duration');
    const dueDate = document.getElementById('dueDate');
        detailsTopRow.textContent = obj.title;
        notes.textContent = obj.notes;
        duration.textContent = obj.duration;
        dueDate.textContent = obj.dueDate;

}

export { populateDetailsAE }