document.addEventListener('DOMContentLoaded', () => {
    // Button elements
    const buttons = {
        admin: document.getElementById('admin-btn'),
        adm_lead: document.getElementById('adm-lead-btn'),
        student: document.getElementById('student-btn'),
        stud_dash: document.getElementById('stud-dash-btn')
    };

    // Form elements
    const forms = {
        admin: document.getElementById('admin-form'),
        adm_lead: document.getElementById('adm-lead-form'),
        student: document.getElementById('student-form'),
        stud_dash: document.getElementById('stud-dash-form')
    };

    // Function to display the selected form and hide others
    const showForm = (formId) => {
        for (const formKey in forms) {
            if (forms.hasOwnProperty(formKey)) {
                forms[formKey].style.display = (formKey === formId) ? 'block' : 'none';
            }
        }
    };

    // Event listeners for buttons
    buttons.admin.addEventListener('click', () => showForm('admin'));
    buttons.adm_lead.addEventListener('click', () => showForm('adm_lead'));
    buttons.student.addEventListener('click', () => showForm('student'));
    buttons.stud_dash.addEventListener('click', () => {
        showForm('stud_dash');
        fetchTeams(); // Assuming fetchTeams function is defined to populate teams
    });

    // Initially show the student dashboard form on page load
    showForm('stud_dash');

    // Validate form inputs (if needed for additional functionality)
    function validateForm(formId) {
        const form = forms[formId];
        // Example validation: Check if input fields are not empty
        const inputs = form.querySelectorAll('input');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error'); // Apply error styling
                // Optionally, you can display an error message near the input
                // Example: input.nextElementSibling.textContent = 'Field is required';
            } else {
                input.classList.remove('error');
                // Optionally, remove any existing error messages
                // Example: input.nextElementSibling.textContent = '';
            }
        });

        return isValid;
    }

    // Event listener for form submissions (example for the student dashboard form)
    forms.stud_dash.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        if (validateForm('stud_dash')) {
            // Proceed with form submission or other actions
            console.log('Student dashboard form submitted successfully!');
        } else {
            console.log('Student dashboard form validation failed!');
        }
    });

    // Fetch and display teams (example function)
    function fetchTeams() {
        const teamsList = document.getElementById('teams-list');
        teamsList.innerHTML = ''; // Clear existing teams

        // Example teams data
        const teams = [
            { name: 'Team Alpha' },
            { name: 'Team Beta' },
            { name: 'Team Gamma' }
        ];

        teams.forEach(team => {
            const li = document.createElement('li');
            li.textContent = team.name;
            teamsList.appendChild(li);
        });
    }
});
