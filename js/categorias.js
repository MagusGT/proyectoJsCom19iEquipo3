const categorias = [
  {
    orden: 1,
    descrip: "CLIMATIZACION",
    imagen: "imagenes/aire3.webp",
  },
  {
    orden: 2,
    descrip: "PEQUEÑOS ELECTRO",
    imagen: "imagenes/pequenos.jfif",
  },
  {
    orden: 3,
    descrip: "COCINAS",
    imagen: "imagenes/cocinas.jfif",
  },
  {
    orden: 4,
    descrip: "REFRIGERACION",
    imagen: "imagenes/refrigeracion.jfif",
  },
  {
    orden: 5,
    descrip: "LAVARROPAS",
    imagen: "imagenes/lavarropas.jfif",
  },
  {
    orden: 6,
    descrip: "TELEVISORES",
    imagen: "imagenes/televisores.jfif",
  },
];
// let cambio = 0;

// const boton1 = document.querySelector("#boton");

// boton1.addEventListener("click", (cambio = 0));

// const boton2 = document.querySelector("#boton");

// boton2.addEventListener("click", (cambio = 1));
const listadocategorias = document.querySelector("#categ");

listadocategorias.innerHTML = "";

categorias.forEach((categoria) => {
  // if (cambio == 0) {
  const html = `<img src=" ${categoria.imagen} " class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="">${categoria.descrip}</h5>
          </div>
        </div>`;
  // } else {
  // }
  // if ((index = 3)) {
  //   index = 5;

  listadocategorias.innerHTML += html;
});
