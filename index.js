function checkInput() {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');

    if (usernameInput.value.trim() !== '' || passwordInput.value.trim() !== '') {
        usernameInput.style.backgroundColor = '#f0f0f0';
        passwordInput.style.backgroundColor = '#f0f0f0';
    } else {
        usernameInput.style.backgroundColor = '';
        passwordInput.style.backgroundColor = '';
    }
}
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === password) {
        window.location.href = "listing.html"; // Redirect only when username equals password
        alert("Login successful!! ");

    } else {
        alert("Please enter valid credentials!   " + username);
    }
}
