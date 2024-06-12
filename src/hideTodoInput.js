//break this into four functions
function hideTodoInput() {
    const todoInputSpan = document.getElementById('todoInputSpan');
    const durationSpan = document.getElementById('durationSpan');
    const detailsTopRow = document.getElementById('detailsTopRow');
    const notesSpan = document.getElementById('notesSpan');
    const editDeleteBtn = document.getElementById('editDeleteBtn');
    const dueDateSpan = document.getElementById('dueDateSpan');
    const projectTodos = document.getElementById('projectTodos');

    if (detailsTopRow.innerHTML === 'Select a Project') {
        todoInputSpan.style.display = 'none';
        notesSpan.style.display = 'none';
        durationSpan.style.display = 'none';
        editDeleteBtn.style.display = 'none';
        dueDateSpan.style.display = 'none';

    } else {
        todoInputSpan.style.display = 'inline-block';
        durationSpan.style.display = 'inline';
        notesSpan.style.display = 'inline';
        editDeleteBtn.style.display = 'block';
        dueDateSpan.style.display = 'inline';
    };
};

export { hideTodoInput }