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
let inicio = 0;
let final = 0;
let i = 0;

const boton1 = document.querySelector("#boton1");

boton1.addEventListener("click", function () {
  cambio = 0;
  cambiar();
});

const boton2 = document.querySelector("#boton2");

boton2.addEventListener("click", function () {
  cambio = 1;
  cambiar();
});

function cambiar() {
  const listadocategorias = document.querySelector("#categ");

  listadocategorias.innerHTML = "";

  if (cambio == 0) {
    inicio = 0;
    final = 2;
  } else {
    inicio = 3;
    final = 5;
  }
  console.log(cambio);

  for (i = inicio; i <= final; i++) {
    const html = `<div >
    <a href="">
              <img src="${categorias[i].imagen}" class="card-img-top" alt="..." />
            </a>
          <div class="card-body">
            <h5 class="">${categorias[i].descrip}</h5>
          </div>
        </div>`;

    listadocategorias.innerHTML += html;
  }
}
cambiar();
