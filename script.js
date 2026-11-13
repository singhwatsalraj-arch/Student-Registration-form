const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const studentId = document.getElementById("studentId").value.trim();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!studentId || !name || !email || !phone) {
        message.style.color = "red";
        message.textContent = "Please fill all required fields.";
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        message.style.color = "red";
        message.textContent = "Enter a valid 10-digit phone number.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Registration Successful! Welcome, " + name;

    form.reset();
});

form.addEventListener("reset", function() {
    message.textContent = "";
});