const submitBtn = document.querySelector(".submit-btn");
const passMatchSpan = document.querySelector(".pass-match-span");

const password = document.getElementById("pass");
const confirmPassword = document.getElementById("pass-confirm");

password.addEventListener("keyup", () => {
  const passwordValue = document.getElementById("pass").value;
  const confirmPasswordValue = document.getElementById("pass-confirm").value;
  if (passwordValue === confirmPasswordValue) {
    passMatchSpan.hidden = true;
    password.setCustomValidity("");
    confirmPassword.setCustomValidity("");
  } else {
    passMatchSpan.hidden = false;
    password.setCustomValidity("Passwords do not match");
    confirmPassword.setCustomValidity("Passwords do not match");
  }
});

confirmPassword.addEventListener("keyup", () => {
  const passwordValue = document.getElementById("pass").value;
  const confirmPasswordValue = document.getElementById("pass-confirm").value;
  if (passwordValue === confirmPasswordValue) {
    passMatchSpan.hidden = true;
    password.setCustomValidity("");
    confirmPassword.setCustomValidity("");
  } else {
    passMatchSpan.hidden = false;
    password.setCustomValidity("Passwords do not match");
    confirmPassword.setCustomValidity("Passwords do not match");
  }
});
