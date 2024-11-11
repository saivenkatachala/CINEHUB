document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const rating = document.querySelector('input[name="rating"]:checked')?.value || "No rating";
    const changes = document.getElementById("changes").value;

    // Prepare the email parameters
    const templateParams = {
        name: name,
        email: email,
        rating: rating,
        changes: changes,
    };

    // Send the email using EmailJS
    emailjs.send("service_4z53bkp", "template_2f254zt", templateParams)
        .then(function(response) {
            console.log("Feedback sent successfully!", response.status, response.text);
            document.getElementById("status-message").textContent = "Thank you for your feedback ❤!";
            document.getElementById("feedback-form").reset();
        }, function(error) {
            console.error("Failed to send feedback:", error);
            document.getElementById("status-message").textContent = "Oops! Something went wrong. Please try again🙁.";
        });
});
