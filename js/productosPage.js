const productosOj = [
  {
    category: "computacion",
    name: "Auricular 1",
    imagen: "/img/prodComputacion/auric1.jpg",
    descripcionCorta: "Auricular sm-pro 201",
    precio: 1500,
  },

  {
    category: "computacion",
    name: "Auricular 2",
    imagen: "/img/prodComputacion/auric2.jpg",
    descripcionCorta: "Auricular pichuleao 1201",
    precio: 3500,
  },
  {
    category: "computacion",
    name: "Auricular 3",
    imagen: "/img/prodComputacion/auric3.jpg",
    descripcionCorta: "Auricular pic 1201",
    precio: 2500,
  },
  {
    category: "computacion",
    name: "Auricular 4",
    imagen: "/img/prodComputacion/auric4.jpg",
    descripcionCorta: "Auricular pic 1201",
    precio: 2500,
  },
];
const cards = document.querySelector(".cards");

// Agregar elementos al DOM
const tarjetaProducto = document.querySelector(".tarjetaProducto");
function mostrarProductos() {
  const productosMap = productosOj.map(
    (producto) =>
      `
          <div class="card mx-4 my-3" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.name}</h5>
                <p class="card-text">${producto.precio}</p>
                <a href="#" class="btn btn-primary">Agregar al carrito</a>
                <button onclick="eliminarProducto('${producto.id}')" class="btn btn-danger">Eliminar</button>
            </div>
          </div>
          `
  );
  tarjetaProducto.innerHTML = productosMap;
}
mostrarProductos();

function eliminarProducto(id) {
  const productosFiltrados = productos.filter((producto) => producto.id !== id);
  const json = JSON.stringify(productosFiltrados);
  localStorage.setItem("productos", json);
  productos = productosFiltrados;
  mostrarProductos();
}
