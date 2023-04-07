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

    // Create a new job object
    const job = {
        title: title,
        description: description,
        company: company
    };

    // Add the job to the list of jobs
    jobs.push(job);

    // Reset the form
    jobForm.reset();

    // Render the job list
    renderJobs();
});

// Function to render the list of jobs
function renderJobs() {
    // Clear the job list
    jobList.innerHTML = '';

    // Loop through the jobs and add them to the list
    jobs.forEach((job) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <h2>${job.title}</h2>
        <p><em>${job.company}</em></p>`;
        jobList.appendChild(li);
    });
}