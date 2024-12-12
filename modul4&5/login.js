document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '123') {
        alert('Login Sukses');
        window.location.href = 'index.html'; // Redirect to index.html
    } else {
        alert('Login Gagal');
        window.location.href = 'login.html'; // Redirect to login.html
    }
});