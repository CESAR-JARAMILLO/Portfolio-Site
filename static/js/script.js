const form = document.querySelector("#myForm");
const submitBtn = document.querySelector("#submit-btn");
const nameInput = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const messageInput = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const contactBtns = document.querySelectorAll(".contact")

submitBtn.addEventListener("click", e => {
  e.preventDefault();

  // check if all inputs are valid
  if (nameInput.classList.contains("valid") && emailInput.classList.contains("valid") && messageInput.classList.contains("valid")) {
      form.submit();
  }
});

// Smoothly scroll to form
contactBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Add blur event listeners to input fields
nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
messageInput.addEventListener("blur", validateMessage);

// Validate name input
function validateName() {
  if (nameInput.value === "") {
    nameError.textContent = "Name is required";
    nameInput.classList.add("invalid");
  } else {
    nameError.textContent = "";
    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");
  }
}

// Validate email input
function validateEmail() {
  if (!isValidEmail(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address";
    emailInput.classList.add("invalid");
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");
  }
}

// Validate message input
function validateMessage() {
  if (messageInput.value === "") {
    messageError.textContent = "Please enter a message";
    messageInput.classList.add("invalid");
  } else {
    messageError.textContent = "";
    messageInput.classList.remove("invalid");
    messageInput.classList.add("valid");
  }
}

// Function to check if email is valid
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}