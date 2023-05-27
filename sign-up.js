// Get the password and confirm password fields
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');

// Function to validate password
function validatePassword() {
    if (passwordField.value !== confirmPasswordField.value) {
        confirmPasswordField.setCustomValidity("Passwords do not match");
      } else {
        confirmPasswordField.setCustomValidity("");
      }
}

// Add event listener to the confirm password field
confirmPasswordField.addEventListener('input', validatePassword);