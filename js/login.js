const email = document.getElementById("email");
const password = document.getElementById("password");
const registro = document.getElementById("loginForm");

const localToken = "Admin";

const adminUser = {
  email: "admin@admin.com",
  password: "12345",
};
const usuarioEmpresa = JSON.parse(localStorage.getItem("usuarioEmpresa"));

registro.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    email.value === adminUser.email &&
    password.value === adminUser.password
  ) {
    localStorage.setItem("token", JSON.stringify(localToken));
    window.location.href = "productos.html";
  } else if (
    email.value === usuarioEmpresa.email &&
    password.value === usuarioEmpresa.password
  ) {
    window.location.href = "productos.html";
  } else {
    alert("Debe suscribirse de nuevo");
  }
});
