const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }

  const userObj = {
    email: email.value,
    password: password.value,
  };
  console.log(userObj);
  event.currentTarget.reset();
});
