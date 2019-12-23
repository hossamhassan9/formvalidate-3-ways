const form = document.getElementById("user-input");

function signuphandler(event) {
  event.preventDefault();

  const userNameInput = document.getElementById("username");
  const enteredUsername = userNameInput.value;

  const passwordInput = document.getElementById("password");
  const enteredPassword = passwordInput.value;

  if (enteredUsername.trim().length === 0) {
    userNameInput.nextElementSibling.innerHTML = "Cant be empty !";
    return;
  }
  if (enteredPassword.trim().length <= 5) {
    passwordInput.nextElementSibling.innerHTML =
      "Password must be 6 char. at least !!";
    return;
  }

  const user = {
    userName: enteredUsername,
    password: enteredPassword
  };

  console.log(user);
  console.log(`Hi, I am ${user.userName}`);
}

form.addEventListener("submit", signuphandler);
