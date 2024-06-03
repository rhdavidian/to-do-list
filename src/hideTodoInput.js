
function hideTodoInput() {
    const todoInputSpan = document.getElementById('todoInputSpan');
    const detailsTopRow = document.getElementById('detailsTopRow');

    if (detailsTopRow.innerHTML === '') {
        todoInputSpan.style.display = 'none';
    } else {
        todoInputSpan.style.display = 'inline-block';
    };
};

export { hideTodoInput }