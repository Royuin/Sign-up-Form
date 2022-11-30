const submitBtn = document.querySelector(".submit-btn");
const passMatchSpan = document.querySelector(".pass-match-span");

const password = document.getElementById("pass");
const confirmPassword = document.getElementById("pass-confirm");

password.addEventListener("keyup", () => {
  if (
    password.checkValidity() === true &&
    confirmPassword.checkValidity() === true
  ) {
    const passwordValue = document.getElementById("pass").value;
    const confirmPasswordValue = document.getElementById("pass-confirm").value;
    if (passwordValue === confirmPasswordValue) {
      passMatchSpan.hidden = true;
      password.setCustomValidity("");
      confirmPassword.setCustomValidity("");
    } else {
      passMatchSpan.hidden = false;
      password.setCustomValidity("does");
      confirmPassword.setCustomValidity("does");
    }
  }
});

confirmPassword.addEventListener("keyup", () => {
  if (
    password.checkValidity() === true &&
    confirmPassword.checkValidity() === true
  ) {
    const passwordValue = document.getElementById("pass").value;
    const confirmPasswordValue = document.getElementById("pass-confirm").value;
    if (passwordValue === confirmPasswordValue) {
      passMatchSpan.hidden = true;
      password.setCustomValidity("");
      confirmPassword.setCustomValidity("");
    } else {
      passMatchSpan.hidden = false;
    }
  }
});
