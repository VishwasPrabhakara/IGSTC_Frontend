const BASE_URL = "https://igstc-backend.onrender.com"; // Your actual Render backend URL
const FRONTEND_URL = "https://igstc-bilateral-workshop-2025.vercel.app"; // Your Vercel frontend URL

async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    
    if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = `${FRONTEND_URL}/dashboard.html`; // Redirect to dashboard on Vercel
    } else {
        document.getElementById("error-msg").innerText = data.message;
    }
}
