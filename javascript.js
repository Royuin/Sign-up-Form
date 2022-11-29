const submitBtn = document.querySelector(".submit-btn");
const passMatchSpan = document.querySelector(".pass-match-span");

let password = document.getElementById("pass");
let confirmPassword = document.getElementById("pass-confirm");

confirmPassword.addEventListener("keyup", () => {
  if (
    password.checkValidity() === true &&
    confirmPassword.checkValidity() === true
  ) {
    const passwordValue = document.getElementById("pass").value;
    const confirmPasswordValue = document.getElementById("pass-confirm").value;
    if (passwordValue === confirmPasswordValue) {
      passMatchSpan.hidden = true;
    } else {
      passMatchSpan.hidden = false;
    }
  }
});
