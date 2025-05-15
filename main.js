let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

/**nav hide */
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})


/*validate and send mail */
  // Scroll behavior fix
  window.onscroll = function () {
    const navbar = document.getElementById("navbar"); // Change ID if needed
    if (navbar) {
      navbar.classList.add("scrolled");
    }
  };

  // Form submission
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        if (validateForm()) {
          sendEmail();
        }
      });
    }
  });

  function validateForm() {
    document.querySelectorAll(".error-message").forEach((el) => el.remove());
    let isValid = true;

    const name = document.getElementById("name").value.trim();
    if (!name) {
      showError("name", "Please enter your name");
      isValid = false;
    }

    const phone = document.getElementById("phone").value.trim();
    if (!phone) {
      showError("phone", "Please enter your phone number");
      isValid = false;
    }

    const email = document.getElementById("email").value.trim();
    if (!email) {
      showError("email", "Please enter your email");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError("email", "Please enter a valid email address");
      isValid = false;
    }

    const subject = document.getElementById("subject").value.trim();
    if (!subject) {
      showError("subject", "Please enter a subject");
      isValid = false;
    }

    const message = document.getElementById("message").value.trim();
    if (!message) {
      showError("message", "Please enter your message");
      isValid = false;
    }

    return isValid;
  }

  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.createElement("div");
    error.className = "error-message text-danger small mt-1";
    error.textContent = message;
    field.parentNode.appendChild(error);
    field.focus();
  }

  function sendEmail() {
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send("service_cj30g2j", "template_dmzq01e", formData)
      .then(
        function (response) {
          alert("Message sent successfully!");
          document.getElementById("contact-form").reset();
        },
        function (error) {
          alert("Failed to send message: " + error.text);
        }
      );
  }


