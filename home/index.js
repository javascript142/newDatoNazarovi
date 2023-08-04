document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Replace the condition below with your actual authentication logic.
    // For simplicity, we'll use hardcoded credentials as an example.
    const validUsername = "user123";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
        // Successful login, redirect to the unlocked web page.
        window.location.href = "./index2.html";
    } else {
        // Display error message for invalid credentials.
        document.getElementById("error-message").innerText = "Invalid username or password.";
    }
});