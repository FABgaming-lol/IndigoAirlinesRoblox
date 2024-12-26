// 1. Add Firebase configuration (Replace with your actual Firebase project settings)
const firebaseConfig = {
  apiKey: "AIzaSyBSLAiDIPQQGYXR-Yljo28rKFLUi1hEVqY",
  authDomain: "indigo-rblx-responses.firebaseapp.com",
  databaseURL: "https://indigo-rblx-responses-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "indigo-rblx-responses",
  storageBucket: "indigo-rblx-responses.firebasestorage.app",
  messagingSenderId: "1055524760352",
  appId: "1:1055524760352:web:ebe745fd621aac0f964545",
  measurementId: "G-R2CVRYDLDP"
};

// 2. Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// 3. Get a reference to the Firebase Realtime Database
const database = firebase.database();

// 4. Handle the form submission
document.getElementById("flight-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the default form submission
    
    // Collect the data from the form
    const formData = {
        from: document.getElementById("from").value,        // From location
        to: document.getElementById("to").value,            // To location
        departure: document.getElementById("departure").value,  // Departure date
        return: document.getElementById("return").value,    // Return date
        passengers: document.getElementById("passengers").value, // Number of passengers
        email: document.getElementById("email").value       // Email address
    };

    // 5. Push data to Firebase Realtime Database
    database.ref('responses').push(formData)
        .then(function() {
            // Show success message
            document.getElementById("message").textContent = "Form submitted successfully!";
            document.getElementById("flight-form").reset();  // Reset form fields
        })
        .catch(function(error) {
            // Show error message
            document.getElementById("message").textContent = "Error submitting the form.";
            console.error("Error: ", error);
        });
});
