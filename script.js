const users = [
  { email: "john@example.com", password: "password1" },
  { email: "jane@example.com", password: "password2" },
  { email: "bob@example.com", password: "password3" },
];

const form = document.querySelector("#login-form");
const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", function(event) {
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    alert("Logged in successfully!");
    console.log(user);
  } else {
    alert("Incorrect email or password!");
  }
});

