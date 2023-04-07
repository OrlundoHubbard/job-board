// Define a list of jobs
let jobs = [];

// Get the form and list elements
const jobForm = document.querySelector('#job-form');
const jobList = document.querySelector('#job-list');

// Add event listener for form submission
jobForm.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting

    // Get the form data
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const company = document.querySelector('#company').value;
})