
function hideTodoInput() {
    const todoInputSpan = document.getElementById('todoInputSpan');
    const durationSpan = document.getElementById('durationSpan');
    const detailsTopRow = document.getElementById('detailsTopRow');

    if (detailsTopRow.innerHTML === '') {
        todoInputSpan.style.display = 'none';
        // durationSpan.style.display - 'none';
    } else {
        todoInputSpan.style.display = 'inline-block';
        durationSpan.style.display = 'inline-block';
    };
};

export { hideTodoInput }