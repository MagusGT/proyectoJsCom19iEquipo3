const email = document.querySelector("#correo");
const password = document.querySelector("#pass");
const confirmarPass = document.querySelector("#confirmarPass");
const nombres = document.querySelector("#nombres");
const btnRegistro = document.querySelector("#btnRegistro");
let userEmpresa = {};
btnRegistro.addEventListener("click", (e) => {
  e.preventDefault();
  userEmpresa = {
    email: email.value,
    password: password.value,
  };
  localStorage.setItem("usuarioEmpresa", JSON.stringify(userEmpresa));
  window.location.href = "Login.html";
});
