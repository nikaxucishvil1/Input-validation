export
const submitButton = document.getElementById("claimButton");
const FirstName = document.querySelector(".firstNameInput");
const lastName = document.querySelector(".lastNameInput");
const email = document.querySelector(".emailInput");
const password = document.querySelector(".passwordInput");
const imgs = document.querySelectorAll(".ovalImg");
const firstNameSpan = document.querySelector(".firstNameSpan");
const lastNameSpan = document.querySelector(".lastNameSpan");
const emailtxt = document.querySelector(".email");
const spans = document.querySelectorAll("#span");
const passwordSpan = document.querySelector(".passwordNameSpan");
export
function focusSubmitBtn() {
    submitButton.addEventListener("focusin", () => {
      if (FirstName.value === "") {
        firstNameSpan.style.display = "block";
        imgs[0].style.display = "block";
      }
  
      if (lastName.value === "") {
        lastNameSpan.style.display = "block";
        imgs[1].style.display = "block";
      }
  
      if (email.value === "") {
        emailtxt.style.display = "block";
        imgs[2].style.display = "block";
      }
  
      if (password.value === "") {
        passwordSpan.style.display = "block";
        imgs[3].style.display = "block";
      }
      if (email.value.includes("@")) {
        emailtxt.style.display = "none";
        imgs[2].style.display = "none";
      } else {
        emailtxt.style.display = "block";
        imgs[2].style.display = "block";
      }
    });
  }
  export
  function focusouSubmitBtn() {
    submitButton.addEventListener("focusout", () => {
      imgs.forEach((img) => {
        img.style.display = "none";
      });
      spans.forEach((span) => {
        span.style.display = "none";
      });
    });
  }