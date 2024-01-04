// Get the dark mode toggle switch
const darkModeToggle = document.getElementById('darkModeToggle');

// Get all the .card elements
const cards = document.querySelectorAll('.card');

// Listen for toggle switch changes
darkModeToggle.addEventListener('change', () => {
    // Toggle the dark mode class on the body and content elements
    document.body.classList.toggle('dark-mode');
    document.getElementById('content').classList.toggle('dark-mode');

    // Toggle the dark mode class on each .card element
    cards.forEach((card) => {
        card.classList.toggle('dark-mode');
    });
});

// Get a reference to the form and button
const form = document.getElementById('myForm');
const submitButton = document.getElementById('submitButton');

// Add an event listener to the button
submitButton.addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the value from the input field
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if the input value is empty
    if (!name.trim())
    {
        // Display an error alert if it's empty
        alert('Please fill the name');
    }
    if ((!email.trim()))
    {
        // Display an error alert if it's empty
        alert('Please fill the email');
    }
    if ((!message.trim()))
    {
        // Display an error alert if it's empty
        alert('Please fill the message');
    }
    else
    {
        // Perform the form submission or other actions here
        alert(`Hi, ${name}! Your form has been submitted.`);
    }
});
