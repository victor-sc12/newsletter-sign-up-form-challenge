const form = document.getElementById("sign-up-form");
const emailInput = form.querySelector("#email-entry");
const emailError = form.querySelector(".entry-label.entry-label--error");

function showError() {
    if (emailInput.validity.valueMissing) {
        // If empty
        emailError.textContent = "Email required";
    } else if (emailInput.validity.typeMismatch) {
        // If it's not an email address,
        emailError.textContent = "Valid email required";
    }
}; 

emailInput.addEventListener("input", (e)=> {
    if (emailInput.validity.valid) {
        emailError.textContent = "";
    } else {
        showError();
    }
});

form.addEventListener('submit', (e)=> {
    if (!emailInput.validity.valid) {
        showError();
        e.preventDefault();
    }
});