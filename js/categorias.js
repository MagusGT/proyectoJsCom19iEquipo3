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
let cambio = 0;

const boton1 = document.querySelector("#boton");
boton1.innerHTML = "";

`<button type="button" class="btn btn-outline-info">
  ${onclick((cambio = 0))}
  <img src="/imagenes/flecha.webp" /></button>;`;
innerHTML;

const boton2 = document.querySelector("#boton");
boton2.innerHTML = "";

`<button type="button" class="btn btn-outline-info">
  ${onclick((cambio = 1))}
  <img src="/imagenes/flecha.webp" /></button>;`;
innerHTML;

const mycarousel = document.querySelector("#categ");

mycarousel.innerHTML = "";

categorias.forEach((Categorias, index) => {
  // const html = ;

  if (cambio == 0) {
    `<img src=" ${categorias.imagen} " class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="${categorias.descrip}">Card title</h5>
          </div>
        </div>`;
  } else {
  }
  if ((index = 3)) {
    index = 5;
  }
  mycarousel.innerHTML += html;
});
