//break this into four functions
function hideTodoInput() {
    const todoInputSpan = document.getElementById('todoInputSpan');
    const durationSpan = document.getElementById('durationSpan');
    const detailsTopRow = document.getElementById('detailsTopRow');
    const notesSpan = document.getElementById('notesSpan');
    const editDeleteBtn = document.getElementById('editDeleteBtn');

    if (detailsTopRow.innerHTML === 'Select a Project') {
        todoInputSpan.style.display = 'none';
        notesSpan.style.display = 'none';
        durationSpan.style.display = 'none';
        editDeleteBtn.style.display = 'none';
    } else {
        todoInputSpan.style.display = 'inline-block';
        durationSpan.style.display = 'inline';
        notesSpan.style.display = 'inline';
        editDeleteBtn.style.display = 'block';
    };
};

export { hideTodoInput }