document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields.");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address.");
    } else {
      alert("Thank you for your message, " + name + "!");
      this.reset();
    }
  });
