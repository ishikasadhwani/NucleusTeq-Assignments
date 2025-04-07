// login.js

document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
        const response = await fetch("http://localhost:8080/hr/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            window.location.href = "hr.html";
        } else {
            const errorMsg = await response.text();
            alert("Login failed: " + errorMsg);
        }
    } catch (error) {
        alert("An error occurred: " + error.message);
    }
});

  