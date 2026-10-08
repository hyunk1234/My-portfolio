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

// Typing effect
document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.getElementById("typing-text");

  // Stop if the typing element isn't on the page
  if (!typingElement) return;

  const words = [
    "Computer Science Student",
    "Web Developer",
    "Software Engineer",
    "AI/ML Enthusiast",
  ];

  let wordIndex = 0;
  let characterIndex = 0;
  let isDeleting = false;

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseAfterTyping = 1500;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      characterIndex--;
    } else {
      characterIndex++;
    }

    typingElement.textContent = currentWord.substring(0, characterIndex);

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && characterIndex === currentWord.length) {
      // Pause before deleting
      isDeleting = true;
      delay = pauseAfterTyping;
    } else if (isDeleting && characterIndex === 0) {
      // Move to the next phrase
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
});
