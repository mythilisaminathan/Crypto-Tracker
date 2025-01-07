function validateCredentials(email, password) {
  if (!isValidEmail(email)) {
    return "Invalid email address";
  }

  if (!isValidPassword(password)) {
    return "Invalid password";
  }

  return "Credentials are valid";
}

function isValidEmail(email) {
  return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
}

function isValidPassword(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
}

export default validateCredentials;


