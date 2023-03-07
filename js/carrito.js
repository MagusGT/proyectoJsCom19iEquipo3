let producFiltrado = [];
let productos = [];
let productoCarrito = [];
productoCarrito = JSON.parse(localStorage.getItem("carrito"));
console.log(productoCarrito);
productos = JSON.parse(localStorage.getItem("producto"));
console.log(productos);

producFiltrado = productos.filter((producto) =>
  productoCarrito.includes(producto.codigo)
);

console.log(producFiltrado);
function eliminar(id) {
  // eliminar del localstorage
  productoCarrito = productoCarrito.filter((elemento) => elemento !== id);
  console.log(productoCarrito);
  localStorage.setItem("carrito", JSON.stringify(productoCarrito));
  producFiltrado = producFiltrado.filter((elemento) => elemento.codigo !== id);

  construirCarrito(producFiltrado);
}
function construirCarrito(lista) {
  const tbody = document.querySelector("tbody");

  tbody.innerHTML = "";
  lista.forEach((producto) => {
    tbody.innerHTML += `
            <tr>
                <th scope="row">${producto.codigo}</th>
                <td>${producto.nombre}</td>
                <td>$ ${producto.precio}</td>
                <td>
                  <button onclick="eliminar(${producto.codigo})" class="btn btn-sm btn-primary">Eliminar</button>
                </td>
            </tr>
        `;
  });
}
const boton = document.querySelector("#compra");
boton.addEventListener("click", comprar);

function comprar() {
  localStorage.setItem("carrito", JSON.stringify([]));
  window.location.href = "/index.html";

  console.log("comprar");
}

construirCarrito(producFiltrado);
