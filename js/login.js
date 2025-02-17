const backendUrl = "https://igstc-workshop-website-backend.onrender.com";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    // ✅ Clear previous errors
    errorMessage.textContent = "";

    // ✅ Prevent empty inputs
    if (!username || !password) {
        errorMessage.textContent = "❌ Please enter both username and password.";
        return;
    }

    // ✅ Disable the login button while processing
    const loginButton = document.querySelector("button[type='submit']");
    loginButton.disabled = true;
    loginButton.textContent = "Logging in...";

    try {
        const res = await fetch(`${backendUrl}/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.error || "❌ Login failed. Please check your credentials.");
        }

        // ✅ Store token & user info in local storage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // ✅ Redirect to dashboard
        window.location.href = "dashboard.html";
    } catch (error) {
        console.error("❌ Login Error:", error.message);
        errorMessage.textContent = error.message;
    } finally {
        // ✅ Re-enable the login button after processing
        loginButton.disabled = false;
        loginButton.textContent = "Login";
    }
});
