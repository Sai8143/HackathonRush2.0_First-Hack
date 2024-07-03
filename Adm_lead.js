document.addEventListener('DOMContentLoaded', () => {
    // Button elements
    const buttons = {
        home: document.getElementById('home-btn'),
        createHackathon: document.getElementById('create-hackathon-btn'),
        viewTeams: document.getElementById('view-teams-btn'),
        viewTeamMembers: document.getElementById('view-team-members-btn')
    };

    // Form elements
    const forms = {
        home: document.getElementById('home-form'),
        createHackathon: document.getElementById('create-hackathon-form'),
        viewTeams: document.getElementById('view-teams-form'),
        viewTeamMembers: document.getElementById('view-team-members-form')
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
    buttons.home.addEventListener('click', () => showForm('home'));
    buttons.createHackathon.addEventListener('click', () => showForm('createHackathon'));
    buttons.viewTeams.addEventListener('click', () => {
        showForm('viewTeams');
        fetchTeams(); // Assuming fetchTeams function is defined to populate teams
    });
    buttons.viewTeamMembers.addEventListener('click', () => showForm('viewTeamMembers'));

    // Initially show the home form on page load
    showForm('home');

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

    // Event listener for form submissions
    forms.home.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        if (validateForm('home')) {
            // Proceed with form submission or other actions
            console.log('Home form submitted successfully!');
        } else {
            console.log('Home form validation failed!');
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
