// PART 1: Event Handling + Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// PART 2: Counter Game
let count = 0;
const counterSpan = document.getElementById("counter");
document.getElementById("increment-btn").addEventListener("click", () => {
  count++;
  counterSpan.textContent = count;
});

// PART 2: FAQ Toggle (Interactive Element)
const questions = document.querySelectorAll(".faq-question");
questions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// PART 3: Form Validation
const form = document.getElementById("register-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // Basic validation rules
  if (name === "" || email === "" || password === "") {
    message.textContent = "⚠️ All fields are required!";
    message.style.color = "red";
    return;
  }

  // Email validation with regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    message.textContent = "⚠️ Enter a valid email address.";
    message.style.color = "red";
    return;
  }

  // Password length check
  if (password.length < 6) {
    message.textContent = "⚠️ Password must be at least 6 characters.";
    message.style.color = "red";
    return;
  }

  // If all good
  message.textContent = "✅ Registration successful!";
  message.style.color = "green";
  form.reset();
});
