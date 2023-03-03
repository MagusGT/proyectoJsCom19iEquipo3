// creacion de array con imagenes
// const productos = [
//   "/img/prodComputacion/auric1.jpg",
//   "/img/prodComputacion/auric2.jpg",
//   "/img/prodComputacion/auric3.jpg",
//   "/img/prodComputacion/auric4.jpg",
//   "/img/prodComputacion/gabinete1a.png",
//   "/img/prodComputacion/gabinete2a.png",
//   "/img/prodComputacion/gabinete3a.png",
//   "/img/prodComputacion/gabinete4a.png",
// ];

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
let cards = document.querySelector(".cards");

// Agregar elementos al DOM

if (cards) {
  for (i = 0; i < productosOj.length; i++) {
    // creación de card para seccion computacion
    const crearCard = document.createElement("div");
    crearCard.classList.add("card");
    crearCard.classList.add("shadow");
    crearCard.classList.add("col-sm-12");
    crearCard.classList.add("col-md-5");
    crearCard.classList.add("col-lg-3");
    // creación de img para card
    const crearImg = document.createElement("img");
    crearImg.setAttribute("src", productosOj[i].imagen);
    crearImg.classList.add("card-img-top");
    // creación del body de la card
    const crearCardBody = document.createElement("div");
    crearCardBody.classList.add("card-body");
    crearCardBody.classList.add("carBody");

    const crearCardBody2 = document.createElement("div");
    crearCardBody2.classList.add("card-body");
    crearCardBody2.classList.add("d-flex");
    crearCardBody2.classList.add("justify-content-around");

    //Creación de titulo para cardBody
    const crearTitulo = document.createElement("h3");
    crearTitulo.classList.add("card-title");
    crearTitulo.innerHTML = `${productosOj[i].descripcionCorta}`;
    // creación de botones para card
    const crearBotonInfo = document.createElement("a");
    crearBotonInfo.classList.add("btn");
    crearBotonInfo.classList.add("btn-primary");
    crearBotonInfo.innerHTML = "+ información";

    const crearBtnIrCarrito = document.createElement("a");
    crearBtnIrCarrito.setAttribute("type", "button");
    crearBtnIrCarrito.classList.add("btn");
    crearBtnIrCarrito.classList.add("btn-danger");
    crearBtnIrCarrito.classList.add(`btnCArrito${i}`);
    crearBtnIrCarrito.innerHTML = "Agregar a carrito";
    //anidar elementos
    crearCardBody.appendChild(crearTitulo);
    crearCardBody2.appendChild(crearBotonInfo);
    crearCardBody2.appendChild(crearBtnIrCarrito);
    crearCard.appendChild(crearImg);
    crearCard.appendChild(crearCardBody);
    crearCard.appendChild(crearCardBody2);
    cards.appendChild(crearCard);

    //agregar eventos a los botones
    let agregarProdBtn = document.querySelector(`.btnCArrito${i}`);

    agregarProdBtn.addEventListener("click", () => {
      let modalBodyAg = document.querySelector(".modal-body-ag");
      let prodAgDiv = document.createElement("h5");
      prodAgDiv.innerHTML = `Precio: ${productosOj[i].precio}`;
      modalBodyAg.appendChild(prodAgDiv);
    });
  }
}
