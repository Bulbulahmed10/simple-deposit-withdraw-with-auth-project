const emailAddress = "mdbulbulmolla1222@gmail.com";
const password = "mdbulbul10";

//! Constrain variables
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const errorEmailMessage = document.getElementById("emailErrorMessage");
const errorPasswordMessage = document.getElementById("passwordErrorMessage");

//! password empty or filled functionality
if (inputPassword.value === "") {
  document.getElementById("hideImage").style.display = "none";
  document.getElementById("viewImage").style.display = "none";
}

inputPassword.addEventListener("keyup", () => {
  document.getElementById("hideImage").style.display = "block";
  document.getElementById("viewImage").style.display = "none";
});

//! password hide functionality

document.getElementById("hideImage").addEventListener("click", () => {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
  }

  document.getElementById("hideImage").style.display = "none";
  document.getElementById("viewImage").style.display = "block";
});

//! password show functionality
document.getElementById("viewImage").addEventListener("click", () => {
  if (inputPassword.type === "text") {
    inputPassword.type = "password";
  }
  document.getElementById("hideImage").style.display = "block";
  document.getElementById("viewImage").style.display = "none";
});

//!submit functionality

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();

  if (inputEmail.value !== emailAddress) {
    errorEmailMessage.style.visibility = "visible";
  }
  if (inputPassword.value !== password) {
    errorPasswordMessage.style.visibility = "visible";
  }

  if (inputEmail.value === "") {
    errorEmailMessage.innerText = "Please enter your email";
    errorEmailMessage.style.visibility = "visible";
  }

  if (inputPassword.value === "") {
    errorPasswordMessage.innerText = "Please enter your password";
    errorPasswordMessage.style.visibility = "visible";
  }

  if (inputEmail.value === emailAddress && inputPassword.value === password) {
    document.location.href =
    'http://127.0.0.1:5501/home.html';
    inputEmail.value = "";
    inputPassword.value = "";
  }
});
