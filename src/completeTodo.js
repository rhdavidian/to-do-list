
//Add an event listener to each bubble
//when it's clicked, the text decoration of the next div  (nextElementSibling) is a strikethrough, font italic (add a class to it)
//the bubble itself gets filled in
// you ned to make a second array in the object containing a list of the todos that are done. 
//when it's clicked, you also need to remove the todo from the chores.todo array, and add it to the second array. Use a setTimeout.
function completeTodo() {
    document.querySelectorAll('.todoCheck').forEach(item => { 
        item.addEventListener('click', (evt) => {
            const completed = evt.target.nextElementSibling;
            if (completed.classList.contains('completed') == false){
                completed.classList.add('completed');
                evt.target.classList.add('bubbleFill');
                completed.nextElementSibling.classList.add('placeholder');
            } else {
                completed.classList.remove('completed');
                evt.target.classList.remove('bubbleFill');
                completed.nextElementSibling.classList.remove('placeholder')
            }
        })
    });
}



export { completeTodo }