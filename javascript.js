const submitBtn = document.querySelector(".submit-btn");
const passMatchSpan = document.querySelector(".pass-match-span");

let password = document.getElementById("pass");
let confirmPassword = document.getElementById("pass-confirm");

confirmPassword.addEventListener("keyup", () => {
  if (
    password.checkValidity() === true &&
    confirmPassword.checkValidity() === true
  ) {
  }
});
