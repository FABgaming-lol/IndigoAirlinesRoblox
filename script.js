document.getElementById("flight-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from form fields
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const departure = document.getElementById("departure").value;
    const returnDate = document.getElementById("return").value;
    const passengers = document.getElementById("passengers").value;
    const email = document.getElementById("email").value;

    // Validate fields
    if (from && to && departure && passengers && email) {
        // Simulate sending ticket information to the email
        document.getElementById("message").textContent = `Tickets from ${from} to ${to} for ${passengers} passenger(s) on ${departure} have been sent to ${email}.`;
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").textContent = "Please fill all required fields!";
        document.getElementById("message").style.color = "red";
    }
});
