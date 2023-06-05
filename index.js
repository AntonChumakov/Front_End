let signupName = document.querySelector("#signup_name");
let signupEmail = document.querySelector("#signup_email");

let loginName = document.querySelector("#login_name");
let loginEmail = document.querySelector("#login_email");

const testLS = JSON.parse(localStorage.getItem("allCredentials"));

if (!testLS) {
  localStorage.setItem("allCredentials", "[]");
}

function save() {
  const result = testLS.filter((el) => el.email === signupEmail.value);
  if (result.length !== 0) {
    console.log("this email has already been taken");
  } else {
    const obj = {
      name: signupName.value,
      email: signupEmail.value,
    };
    testLS.push(obj);
    console.log("you have been registred");

    localStorage.setItem("allCredentials", JSON.stringify(getPrDtestLSata));
  }
}

function login() {
  if (!testLS.length) {
    console.log("invalid data");
  } else {
    const result = testLS.filter(
      (el) => el.name === loginName.value && el.email === loginEmail.value
    );
    const output = result[0]
      ? "you have been logged in"
      : "email or name is not correct";

    console.log(output);
  }
}
