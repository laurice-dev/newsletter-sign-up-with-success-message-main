const card = document.querySelector(".card");
const cardSuccess = document.querySelector(".card__form--success--inactive");

const form = document.getElementById("form");
const email = document.getElementById("email");
const cardSuccessEmail = document.getElementById("card-success-email");

const emailError = document.querySelector(".card__form--email-error-text--active");
const reloadButton = document.getElementById("reloadButton");

// Prevent Default Method -- Prevents Form From Submitting -- Only for Errors //

form.addEventListener("submit", (e) => {
  const emailValue = email.value; // Establishing email value
  const emailTrimmedValue = email.value.trim(); // Prevents user from validating form with numerous spaces by trimming all blank spaces from email input

  if (
    emailValue === "" ||
    emailValue === " " ||
    emailTrimmedValue === "" ||
    !email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    // Error states
    email.classList.add("card__form--email-error-text-area--active");
    emailError.innerHTML = "Valid email required";
    e.preventDefault();
  } else {
    // Success states
    e.preventDefault();
    card.classList.remove("card");
    card.classList.add("card--inactive");
    cardSuccess.classList.remove("card__form--success--inactive");
    cardSuccess.classList.add("card__form--success--active");
    cardSuccessEmail.innerHTML = email.value;
  }
});

// Dismiss Button Page Reload
reloadButton.addEventListener("click", () => {
  window.location.reload();
});
