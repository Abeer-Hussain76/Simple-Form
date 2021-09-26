// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput === '' || emailInput === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    } else {
        // Create new list item with user
        const userInput = document.createElement('li');
        // Add HTML directly
        userInput.innerHTML = `<strong>${nameInput.value}</strong> : ${emailInput.value}`;
        // Add text node with input values this is another way
        //userInput.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        // Append to ul
        userList.appendChild(userInput);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}