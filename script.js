const form = document.querySelector("#form");
const email = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailval = email.value;
  console.log(emailval);
  if (!validateEmail(emailval)) {
    form.classList.add("error");
    form.classList.remove("success");
  } else {
    form.classList.add("success");
    form.classList.remove("error");
  }
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
