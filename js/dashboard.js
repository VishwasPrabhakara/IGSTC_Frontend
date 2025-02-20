const BASE_URL = "https://igstc-backend.onrender.com"; // Your Render backend URL
const FRONTEND_URL = "https://igstc-bilateral-workshop-2025.vercel.app"; // Your Vercel frontend URL

document.addEventListener("DOMContentLoaded", function () {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        window.location.href = `${FRONTEND_URL}/login.html`; // Redirect to Vercel login page if not authenticated
        return;
    }

    document.getElementById("name").innerText = user.name;
    document.getElementById("email").innerText = user.email;
    document.getElementById("designation").innerText = user.designation;

    if (user.accommodation) {
        document.getElementById("venue").innerText = user.accommodation.venue_name;
        document.getElementById("venue-link").href = user.accommodation.location_link;
    }
});

function toggleSection(section) {
    document.getElementById(section).classList.toggle("active");
}

async function saveTravel() {
    const travelData = {
        userId: JSON.parse(localStorage.getItem("user"))._id,
        arrivalDate: document.getElementById("arrival-date").value,
        arrivalTime: document.getElementById("arrival-time").value,
        departureDate: document.getElementById("departure-date").value,
        departureTime: document.getElementById("departure-time").value,
        daysOfStay: document.getElementById("days-stay").value,
        fieldTrip: document.getElementById("field-trip").value === "true",
        residentialAddress: document.getElementById("residential-address").value  // ✅ New field added
    };

    try {
        const response = await fetch(`${BASE_URL}/api/travel/submit`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(travelData)
        });

        const data = await response.json();
        alert("Travel details saved successfully!");
    } catch (error) {
        console.error("Error saving travel details:", error);
        alert("Failed to save travel details.");
    }
}


async function uploadFile(inputId, category) {
    const fileInput = document.getElementById(inputId);
    const file = fileInput.files[0];
    if (!file) {
        alert(`Please select a file for ${category}.`);
        return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("username", JSON.parse(localStorage.getItem("user")).username);
    formData.append("category", category);

    try {
        const response = await fetch("https://igstc-backend.onrender.com/api/upload", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Upload failed! HTTP Status: ${response.status}`);
        }

        const data = await response.json();
        document.getElementById(`${inputId}-status`).innerText = "File uploaded successfully!";
    } catch (error) {
        console.error(`Error uploading ${category}:`, error);
        document.getElementById(`${inputId}-status`).innerText = "File upload failed!";
    }
}