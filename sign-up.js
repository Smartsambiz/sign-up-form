const passwordField = document.getElementById('password');
  const confirmPasswordField = document.getElementById('confirmPassword');
  const errorText = document.getElementById('password-match-error');
  
  function validatePassword() {
    if (passwordField.value !== confirmPasswordField.value) {
      errorText.style.display = 'block';
    } else {
      errorText.style.display = 'none';
    }
  }
  
  confirmPasswordField.addEventListener('input', validatePassword);