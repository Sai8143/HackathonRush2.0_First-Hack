document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.login-button').addEventListener('click', () => {
        const username = document.getElementById('student-user').value.trim();
        const password = document.getElementById('student-pass').value.trim();
        const loginUrl = 'Stud_dash.html';

        if (username === '' || password === '') {
            alert('Please enter both username and password.');
        } else {
            window.location.href = loginUrl;
        }
    });
});

function goBack() {
    window.history.back();
}
