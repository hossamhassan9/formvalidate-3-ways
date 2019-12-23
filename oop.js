class Validator {
  static REQUIRED = "REQUIRED";
  static MIN_LENGTH = "MIN_LENGTH";

  static validate(value, flag, validatorValue) {
    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    }
    if (flag === this.MIN_LENGTH) {
      return value.trim().length > validatorValue;
    }
  }
}

class User {
  constructor(userName, userPassword) {
    this.userName = userName;
    this.userPassword = userPassword;
  }
  greet() {
    console.log(`Hi, I am ${this.userName}`);
  }
}

class UserInputForm {
  constructor() {
    this.form = document.getElementById("user-input");
    this.userNameInput = document.getElementById("username");
    this.passwordInput = document.getElementById("password");

    this.form.addEventListener("submit", this.signupHandeler.bind(this));
  }

  signupHandeler(event) {
    event.preventDefault();
    const enteredUserName = this.userNameInput.value;
    const enteredPassword = this.passwordInput.value;

    this.form.nextElementSibling.innerHTML = "";

    if (
      !Validator.validate(enteredUserName, Validator.REQUIRED) ||
      !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)
    ) {
      this.form.nextElementSibling.innerHTML =
        "Invalid input - username or password is wrong (password should be at least six characters).t be empty !";
      return;
    }

    const newUser = new User(enteredUserName, enteredPassword);
    console.log(newUser);
    newUser.greet();
  }
}

new UserInputForm();
