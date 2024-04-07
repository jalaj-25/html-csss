document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulate authentication (replace with your actual authentication logic)
        if (username === 'admin' && password === 'password') {
            window.location.href = 'index.html';
            alert('Login successful!'); // Replace with redirect or other action
        } else {
            alert('Invalid username or password. Please try again.');
        }

        // Clear form fields
        form.reset();
    });
});