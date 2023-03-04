const email = document.getElementById("email");
const password = document.getElementById("password");
const registro = document.getElementById("loginForm");

const localToken = "Admin";

const adminUser = {
  email: "admin@admin.com",
  password: "12345",
};

registro.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    email.value === adminUser.email &&
    password.value === adminUser.password
  ) {
    localStorage.setItem("token", JSON.stringify(localToken));
    window.location.href = "productos.html";
  } else {
    alert("Ingrese un usuario admin");
  }
});
