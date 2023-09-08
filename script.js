document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var jobTitle = document.getElementById("jtitle").value;
    var organization = document.getElementById ("organization").value;
    var message = document.getElementById("message").value;

      // You can replace this with your preferred method of sending the data (e.g., AJAX, fetch, etc.)
      // For demonstration purposes, we're using a simple alert here.
    alert(`Message Sent!\nFname: ${firstName}\nLname: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nJob: ${jobTitle}\nOrganization: ${organization}\nMessage: ${message}`);

      // Clear the form fields
    contactForm.reset();
    });
});


