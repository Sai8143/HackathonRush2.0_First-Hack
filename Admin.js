document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.login-button').addEventListener('click', () => {
        const username = document.getElementById('admin-user').value.trim();
        const password = document.getElementById('admin-pass').value.trim();
        const loginUrl = 'Adm_lead.html';

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
