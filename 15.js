// 15. Write a JavaScript program for validating REGISTRATION FORM


// Function to validate the registration form
function validateForm() {
    // Get the input values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    // Validate username (should not be empty)
    if (username === '') 
    {
      alert('Please enter a username.');
      return false;
    }
  
    // Validate email (should be a valid email format)
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailPattern)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    // Validate password (should be at least 6 characters long)
    if (password.length < 6) {
      alert('Password should be at least 6 characters long.');
      return false;
    }
  
    // Validate confirm password (should match the password)
    if (confirmPassword !== password) {
      alert('Confirm password does not match the password.');
      return false;
    }
  
    // If all validations pass, the form is valid
    alert('Registration form is valid.');
    return true;
  }