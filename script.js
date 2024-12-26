document.getElementById("flight-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = {
        from: document.getElementById("from").value,
        to: document.getElementById("to").value,
        departure: document.getElementById("departure").value,
        return: document.getElementById("return").value,
        passengers: document.getElementById("passengers").value,
        email: document.getElementById("email").value,
    };

    try {
        const response = await fetch("YOUR_GOOGLE_SHEETS_WEB_APP_URL", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        document.getElementById("message").textContent = data.message;
    } catch (error) {
        document.getElementById("message").textContent = "Error submitting the form!";
        console.error(error);
    }
});
