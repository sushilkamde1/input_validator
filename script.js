var state = false;
function showToggle() {
  if (state) {
    document.getElementById("myPassword").setAttribute("type", "password");
    document.getElementById("eye").setAttribute("class", "far fa-eye");
    state = false;
  } else {
    document.getElementById("myPassword").setAttribute("type", "text");
    document.getElementById("eye").setAttribute("class", "far fa-eye-slash");
    state = true;
  }
}
myPassword.onfocus = function () {
  document.getElementById("message").style.opacity = "1";
};
myPassword.onblur = function () {
  document.getElementById("message").style.opacity = "0";
};

var Password = document.getElementById("myPassword");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var specialCHAR = document.getElementById("specialCHAR");
var length = document.getElementById("length");

Password.onkeyup = function () {
  // for first validation
  if (Password.value.match(/[0-9]/)) {
    document.getElementById("numberIcon").setAttribute("class", "fas fa-check");
    number.classList.add("valid");
    number.classList.remove("invalid");
  } else {
    document.getElementById("numberIcon").setAttribute("class", "fas fa-times");
    number.classList.add("invalid");
    number.classList.remove("valid");
  }

  //   for second validation
  if (Password.value.match(/[a-z^A-Z]/)) {
    document.getElementById("charIcon").setAttribute("class", "fas fa-check");
    specialCHAR.classList.add("valid");
    specialCHAR.classList.remove("invalid");
  } else {
    document.getElementById("charIcon").setAttribute("class", "fas fa-times");
    specialCHAR.classList.add("invalid");
    specialCHAR.classList.remove("valid");
  }

  //   for third validation
  if (Password.value.match(/[A-Z]/)) {
    document
      .getElementById("chapitalIcon")
      .setAttribute("class", "fas fa-check");
    capital.classList.add("valid");
    capital.classList.remove("invalid");
  } else {
    document
      .getElementById("chapitalIcon")
      .setAttribute("class", "fas fa-times");
    capital.classList.add("invalid");
    capital.classList.remove("valid");
  }

  // for forth validation
  if (Password.value.length >= 8) {
    document.getElementById("lengthIcon").setAttribute("class", "fas fa-check");
    length.classList.add("valid");
    length.classList.remove("invalid");
  } else {
    document.getElementById("lengthIcon").setAttribute("class", "fas fa-times");
    length.classList.add("invalid");
    length.classList.remove("valid");
  }
};
