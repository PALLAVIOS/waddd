function validateLoginForm() {
    // Get the input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Validate the username
    if (username === '') {
      alert('Please enter a username');
      return false;
    }
    
    // Validate the password
    if (password === '') {
      alert('Please enter a password');
      return false;
    }
    
    // If all validations pass, return true to submit the form
    return true;
  }