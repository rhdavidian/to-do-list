function populateDetailsAE(obj) {
    const detailsTopRow = document.getElementById('detailsTopRow');
    const notes = document.getElementById('notes');
    const duration = document.getElementById('duration');
        detailsTopRow.textContent = obj.title;
        notes.textContent = obj.notes;
        duration.textContent = obj.duration;
}

export { populateDetailsAE }