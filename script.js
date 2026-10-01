document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS
  emailjs.init({
    publicKey: "AqbzkfUM-mQRkNr_I",
  });

  // Get the contact form
  const contactForm = document.getElementById("contactForm");

  // Make sure the form exists
  if (!contactForm) {
    console.error("Contact form not found!");
    return;
  }

  const submitButton = contactForm.querySelector("button[type='submit']");

  // Listen for form submission
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Form submitted!");
    console.log("Sending email...");

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    emailjs
      .sendForm("service_ese386j", "template_kowdbvq", contactForm)
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);

        submitButton.textContent = "Message Sent ✓";

        contactForm.reset();

        setTimeout(function () {
          submitButton.disabled = false;
          submitButton.textContent = "Submit";
        }, 3000);
      })
      .catch(function (error) {
        console.error("EMAILJS ERROR:", error);

        submitButton.disabled = false;
        submitButton.textContent = "Failed to Send";

        setTimeout(function () {
          submitButton.textContent = "Submit";
        }, 3000);
      });
  });
});

//filter projects
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
