const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Reusable functions
function showError(input, message) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector(".error");
  error.innerText = message;
  input.classList.add("error-input");
  input.classList.remove("success-input");
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector(".error");
  error.innerText = "";
  input.classList.add("success-input");
  input.classList.remove("error-input");
}

// Validation functions
function validateName() {
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    return false;
  }
  showSuccess(nameInput);
  return true;
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    showError(emailInput, "Invalid email format");
    return false;
  }
  showSuccess(emailInput);
  return true;
}

function validatePassword() {
  if (passwordInput.value.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters");
    return false;
  }
  showSuccess(passwordInput);
  return true;
}

function validateConfirmPassword() {
  if (confirmPasswordInput.value !== passwordInput.value) {
    showError(confirmPasswordInput, "Passwords do not match");
    return false;
  }
  showSuccess(confirmPasswordInput);
  return true;
}

// Event listeners for real-time validation
nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("keyup", validateEmail);
passwordInput.addEventListener("keyup", validatePassword);
confirmPasswordInput.addEventListener("keyup", validateConfirmPassword);

// Submit event
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isValid =
    validateName() &
    validateEmail() &
    validatePassword() &
    validateConfirmPassword();

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
