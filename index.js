var inputFild = "";

function subscribe() {
  inputFild = document.getElementById("email").value;
  var validion = inputFild.indexOf("@");
  var validion2 = inputFild.indexOf(".");

  if (inputFild === "" || validion === -1 || validion2 === -1) {
    document.getElementById("email").value = inputFild + " ";
    document.querySelector(".invalid-mesage").style.display = "block";
    document.getElementById("email").classList.add("invalid-email");
  } else {
    document.querySelector(".companyEmail").innerHTML = inputFild;
    document.querySelector(".card").style.scale = 0;
    setTimeout(() => {
      document.querySelector(".card").style.display = "none";
      document.querySelector(".success-mesage").style.display = "flex";
      document.querySelector(".success-mesage").style.scale = "100%";
    }, "200");
  }
}

function dismissMessage() {
  document.querySelector(".invalid-mesage").style.display = "none";
  document.getElementById("email").classList.remove("invalid-email");
  document.getElementById("email").value = "";

  document.querySelector(".success-mesage").style.scale = 0;
  setTimeout(() => {
    document.querySelector(".success-mesage").style.display = "none";
    document.querySelector(".card").style.display = "flex";
    document.querySelector(".card").style.scale = "100%";
  }, "200");
}
