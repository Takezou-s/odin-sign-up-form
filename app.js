const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirm-password");
const passwordErrorEl = document.getElementById("passwordError");

confirmPasswordEl.addEventListener("blur", () => {
  if (passwordEl.value !== confirmPasswordEl.value) {
    passwordErrorEl.classList.remove("d-none");
    passwordEl.classList.add("error");
    confirmPasswordEl.classList.add("error");
  } else {
    passwordErrorEl.classList.add("d-none");
    passwordEl.classList.remove("error");
    confirmPasswordEl.classList.remove("error");
  }
});
