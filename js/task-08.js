const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("У формі є незаповнені поля");
  }

  const obj = {
    email: email.value,
    password: password.value,
  };

  console.log(obj);

  event.currentTarget.reset();
}
