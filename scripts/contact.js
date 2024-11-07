//  Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize EmailJS with the public key once, at the start
  emailjs.init("bMCuPG2apnj57JV_t");
  console.log("EmailJS initialized");

  // Select the form element
  const form = document.getElementById("contact_form");
  const contactMessage = document.getElementById("contact_message");

    // Validate the form before sending data with EmailJS
    function isEmailValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  // Add event listener and prevent Default form submission
  form.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      // Get form input values and trim them
      const userName = form.user_name.value.trim();
      const userEmail = form.user_email.value.trim();
      const userSubject = form.user_subject.value.trim();
      const userMessage = form.user_message.value.trim();

      // Basic validation - check if all fields are filled
      if (!userName || !userEmail || !userSubject || !userMessage) {
          contactMessage.textContent = "All fields are required.";
          return;
      }

      // Email formart validation - ensure proper email format
      if (!isEmailValid(userEmail)) {
          contactMessage.textContent = "Please enter a valid email address."
          return;
      }
        try {
          // Send form data using EmailJS
          await emailjs.sendForm("service_jm0ec4k", "template_o3919tc", form);

          // Show a success message to the user
          contactMessage.textContent = "Message sent successfully!";
          console.log("Message sent successfully!");

          // Clear form fields upon successful submission
          form.reset();

          // Remove message after 5 seconds
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        } catch (error) {
          // Handle any errors that occur during submission
          console.log("Failed to send message:", error.response?.data || error);
          contactMessage.textContent = "Message not sent (Service error)";
        }
  });
});
