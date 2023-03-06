//acceder a elelmtos del DOM
// const imgProducto = document.querySelector("#imgProducto");
// const detalleProducto = document.querySelector("#detalleProducto");
// const precioProducto = document.querySelector("#precioProducto");
// const totalProducto = document.querySelector("#totalProducto");

//acceder al localstorage y captar datos para carrito
let listaCarrito;
function traerProductosLocal() {
  productos = localStorage.getItem("producto");
  if (productos == null) {
    listaCarrito = [];
  } else {
    listaCarrito = JSON.parse(productos);
    console.log(listaCarrito);
  }
}
traerProductosLocal();
