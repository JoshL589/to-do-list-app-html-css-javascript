console.log("JavaScript file is linked!");

document.addEventListener("DOMContentLoaded", () => {

    //getting all 3 important fields to interact with, the form, the input (to get the todo)
    //and the list of the todos
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    //adding an event listener on the form submission
    form.addEventListener('submit', (e) => {

        //prevents page refresh
        e.preventDefault();

        //takes the text inside of the input and assigns it to a variable
        const taskText = input.value;

        //if there is both a submission and text in the input
        if (taskText) {
            
            //create a list item element
            const listItem = document.createElement('li');

            //setting the contents of the list element to the text + a delete button
            listItem.innerHTML = `${taskText} <button class="delete">Delete</button>`;

            //appending the listItem to the unordered list
            list.appendChild(listItem);

            //emptying the input box
            input.value = '';
        }
    })

    //adding an event listener on click
    list.addEventListener('click', (e) => {

        //accessing the clicked element
        const clickedElement = e.target;

        //if the clicked element classlist contains the class="delete"
        if (clickedElement.classList.contains('delete')) {

            //get the list item which contains the button and the parent element
            const listItem = clickedElement.parentElement;

            //remove the list item from the unordered list
            list.removeChild(listItem);
        }
    })
})