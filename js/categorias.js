// carga inicial de productos

const productos = [
  {
    codigo: 01,
    categoria: "Climatización",
    imagen: "/imagenes/aire1.png",
    nombre: "Aire Acondicionado",
    marca: "Samsung",
    precio: 255000,
    descripcion: "5000 frigorias",
  },
  {
    codigo: 02,
    categoria: "Climatización",
    imagen: "/imagenes/aire2.webp",
    nombre: "Aire Acondicionado",
    marca: "Liliana",
    precio: 180000,
    descripcion: "2500 frigorias",
  },
  {
    codigo: 03,
    categoria: "Climatización",
    imagen: "/imagenes/aire3.webp",
    nombre: "Aire Acondicionado",
    marca: "LG",
    precio: 247000,
    descripcion: "3500 frigorias",
  },
  {
    codigo: 04,
    categoria: "Pequeños",
    imagen: "/imagenes/batidora1.png",
    nombre: "Batidora",
    marca: "Ultracomb",
    precio: 25300,
    descripcion: "3 velocidades",
  },
  {
    codigo: 05,
    categoria: "Pequeños",
    imagen: "imagenes/cafetera1.png",
    nombre: "Pava Eléctrica",
    marca: "Philco",
    precio: 9300,
    descripcion: "1.5 lts",
  },
  {
    codigo: 06,
    categoria: "Pequeños",
    imagen: "imagenes/cafetera2.png",
    nombre: "Pava Eléctrica",
    marca: "Philips",
    precio: 7900,
    descripcion: "1 lts",
  },
  {
    codigo: 07,
    categoria: "Pequeños",
    imagen: "imagenes/cafetera3.webp",
    nombre: "Pava Eléctrica",
    marca: "Liliana",
    precio: 8650,
    descripcion: "1.5 lts",
  },
  {
    codigo: 08,
    categoria: "Cocinas",
    imagen: "imagenes/ccina1.png",
    nombre: "Cocina",
    marca: "TLA",
    precio: 65000,
    descripcion: "4 hornallas",
  },
  {
    codigo: 09,
    categoria: "Cocinas",
    imagen: "imagenes/cicina3.webp",
    nombre: "Cocina",
    marca: "MNG",
    precio: 75000,
    descripcion: "4 hornallas, encendido electrónico",
  },
  {
    codigo: 10,
    categoria: "Cocinas",
    imagen: "imagenes/cocina2.png",
    nombre: "Cocina",
    marca: "MNG",
    precio: 85000,
    descripcion: "4 hornallas, luz en horno",
  },
  {
    codigo: 11,
    categoria: "Cocinas",
    imagen: "imagenes/cocina3.webp",
    nombre: "Cocina",
    marca: "MNG",
    precio: 55000,
    descripcion: "Ancho 45 cm",
  },
  {
    codigo: 12,
    categoria: "Cocinas",
    imagen: "imagenes/cocina4.webp",
    nombre: "Cocina",
    marca: "TLA",
    precio: 65000,
    descripcion: "4 hornallas",
  },
  {
    codigo: 13,
    categoria: "Cocinas",
    imagen: "imagenes/cocina5.png",
    nombre: "Cocina",
    marca: "MNG",
    precio: 95000,
    descripcion: "5 hornallas",
  },
  {
    codigo: 14,
    categoria: "Climatización",
    imagen: "imagenes/caloventor1.webp",
    nombre: "Caloventor",
    marca: "Liliana",
    precio: 15000,
    descripcion: "2000 Watt",
  },
  {
    codigo: 15,
    categoria: "Climatización",
    imagen: "imagenes/caloventor2.png",
    nombre: "Caloventor",
    marca: "TLA",
    precio: 17000,
    descripcion: "2000 Watt, corte automático",
  },
  {
    codigo: 16,
    categoria: "Climatización",
    imagen: "imagenes/caloventor3.webp",
    nombre: "Caloventor",
    marca: "Liliana",
    precio: 13000,
    descripcion: "1800 Watt",
  },
  {
    codigo: 17,
    categoria: "Refrigeracion",
    imagen: "imagenes/heladera1.png",
    nombre: "Heladera",
    marca: "TLA",
    precio: 156000,
    descripcion: "200 litros con frezzer",
  },
  {
    codigo: 18,
    categoria: "Refrigeracion",
    imagen: "imagenes/heladera2.png",
    nombre: "Heladera",
    marca: "NEBA",
    precio: 1750000,
    descripcion: "240 litros con frezzer",
  },
  {
    codigo: 19,
    categoria: "Refrigeracion",
    imagen: "imagenes/heladera3.png",
    nombre: "Heladera",
    marca: "MNG",
    precio: 178000,
    descripcion: "200 litros con frezzer",
  },
  {
    codigo: 20,
    categoria: "Refrigeracion",
    imagen: "imagenes/heladera4.png",
    nombre: "Heladera",
    marca: "MNG",
    precio: 205000,
    descripcion: "240 litros con tres frios",
  },
  {
    codigo: 21,
    categoria: "Refrigeracion",
    imagen: "imagenes/heladera5.png",
    nombre: "Heladera",
    marca: "MNG",
    precio: 135000,
    descripcion: "200 litros con congelador",
  },

  {
    codigo: 22,
    categoria: "Cocinas",
    imagen: "imagenes/horno1.webp",
    nombre: "Horno",
    marca: "TLA",
    precio: 52000,
    descripcion: "30 litros",
  },
  {
    codigo: 23,
    categoria: "Cocinas",
    imagen: "imagenes/horno2.webp",
    nombre: "Horno",
    marca: "TLA",
    precio: 65000,
    descripcion: "40 litros",
  },
  {
    codigo: 24,
    categoria: "Cocinas",
    imagen: "imagenes/horno3.webp",
    nombre: "Horno",
    marca: "MNG",
    precio: 55000,
    descripcion: "30 litros",
  },
  {
    codigo: 25,
    categoria: "Cocinas",
    imagen: "imagenes/horno3.png",
    nombre: "Horno",
    marca: "MNG",
    precio: 68000,
    descripcion: "40 litros",
  },
  {
    codigo: 26,
    categoria: "Pequeños",
    imagen: "imagenes/jugyera1.webp",
    nombre: "Juguera",
    marca: "MNG",
    precio: 28000,
    descripcion: "400 Watt",
  },
  {
    codigo: 27,
    categoria: "Lavarropas",
    imagen: "imagenes/lavarropa1.png",
    nombre: "Lavarropa",
    marca: "GAFA",
    precio: 70000,
    descripcion: "A paleta",
  },
  {
    codigo: 28,
    categoria: "Lavarropas",
    imagen: "imagenes/lavarropa2.png",
    nombre: "Lavarropa",
    marca: "MNG",
    precio: 75000,
    descripcion: "6 Kgr",
  },

  {
    codigo: 29,
    categoria: "Lavarropas",
    imagen: "imagenes/lavarropa3.png",
    nombre: "Lavarropa",
    marca: "LTA",
    precio: 81000,
    descripcion: "6 kgr",
  },
  {
    codigo: 30,
    categoria: "Lavarropas",
    imagen: "imagenes/lavarropa4.png",
    nombre: "Lavarropa",
    marca: "MNG",
    precio: 99000,
    descripcion: "10 Kgr",
  },
  {
    codigo: 31,
    categoria: "Lavarropas",
    imagen: "imagenes/lavarropa5.png",
    nombre: "Secarropa",
    marca: "Codini",
    precio: 32100,
    descripcion: "6 kgr",
  },
  {
    codigo: 32,
    categoria: "Lavarropas",
    imagen: "imagenes/lavarropa6.webp",
    nombre: "Lavarropa",
    marca: "LTA",
    precio: 58000,
    descripcion: "6 Kg",
  },
  {
    codigo: 33,
    categoria: "Lavarropas",
    imagen: "imagenes/lavarropa7.webp",
    nombre: "Lavarropa",
    marca: "NEXT",
    precio: 128000,
    descripcion: "8 Kgr",
  },
  {
    codigo: 34,
    categoria: "Cocinas",
    imagen: "imagenes/micronda2.webp",
    nombre: "Microonda",
    marca: "BGH",
    precio: 125000,
    descripcion: "1000 Watt",
  },
  {
    codigo: 35,
    categoria: "Cocinas",
    imagen: "imagenes/microonda1.png",
    nombre: "Microonda",
    marca: "atma",
    precio: 110000,
    descripcion: "800 Watt",
  },

  {
    codigo: 36,
    categoria: "Cocinas",
    imagen: "imagenes/microonda3.webp",
    nombre: "Microonda",
    marca: "MNG",
    precio: 95000,
    descripcion: "800 Watt",
  },
  {
    codigo: 37,
    categoria: "Pequeños",
    imagen: "imagenes/mixer1.png",
    nombre: "Mixer",
    marca: "Liliana",
    precio: 32100,
    descripcion: "300 Watt",
  },
  {
    codigo: 38,
    categoria: "Pequeños",
    imagen: "imagenes/mixer2.png",
    nombre: "Mixer",
    marca: "Liliana",
    precio: 34200,
    descripcion: "400 Watt",
  },
  {
    codigo: 39,
    categoria: "Pequeños",
    imagen: "imagenes/plancha1.png",
    nombre: "Plancha",
    marca: "ATMA",
    precio: 22000,
    descripcion: "Con rociador",
  },
  {
    codigo: 40,
    categoria: "Pequeños",
    imagen: "imagenes/rallador1.webp",
    nombre: "Rallador",
    marca: "Peabody",
    precio: 41000,
    descripcion: "400 Watt",
  },
  {
    codigo: 41,
    categoria: "Lavarropas",
    imagen: "imagenes/secarropa1.png",
    nombre: "Secarropa",
    marca: "koh-i-noor",
    precio: 35100,
    descripcion: "6 Kgr",
  },
  {
    codigo: 42,
    categoria: "Lavarropas",
    imagen: "imagenes/secarropa2.png",
    nombre: "Secarropa",
    marca: "koh-i-noor",
    precio: 51000,
    descripcion: "7 Kgr",
  },
  {
    codigo: 43,
    categoria: "Lavarropas",
    imagen: "imagenes/secarropa3.png",
    nombre: "Secarropa",
    marca: "koh-i-noor",
    precio: 46200,
    descripcion: "7 Kgr",
  },
  {
    codigo: 44,
    categoria: "Lavarropas",
    imagen: "imagenes/secarropa4.png",
    nombre: "Secarropa",
    marca: "koh-i-noor",
    precio: 29900,
    descripcion: "4.5 Kgr",
  },
  {
    codigo: 45,
    categoria: "Televisores",
    imagen: "imagenes/tele1.png",
    nombre: "Televisor",
    marca: "Samsung",
    precio: 145000,
    descripcion: "50 Pulgadas",
  },
  {
    codigo: 46,
    categoria: "Televisores",
    imagen: "imagenes/tele2.png",
    nombre: "Televisor",
    marca: "Samsung",
    precio: 172000,
    descripcion: "65 Pulgadas",
  },
  {
    codigo: 47,
    categoria: "Televisores",
    imagen: "imagenes/tele3.png",
    nombre: "Televisor",
    marca: "LG",
    precio: 62300,
    descripcion: "40 Pulgadas",
  },
  {
    codigo: 48,
    categoria: "Televisores",
    imagen: "imagenes/televisor5.webp",
    nombre: "Televisor",
    marca: "Noblex",
    precio: 132000,
    descripcion: "50 Pulgadas",
  },
  {
    codigo: 49,
    categoria: "Televisores",
    imagen: "imagenes/televisor6.webp",
    nombre: "Televisor",
    marca: "Samsung",
    precio: 51200,
    descripcion: "32 Pulgadas",
  },
  {
    codigo: 50,
    categoria: "Televisores",
    imagen: "imagenes/televisor7.png",
    nombre: "Televisor",
    marca: "TLA",
    precio: 59800,
    descripcion: "40 Pulgadas",
  },
  {
    codigo: 51,
    categoria: "Televisores",
    imagen: "imagenes/televisor9.png",
    nombre: "Televisor",
    marca: "LG",
    precio: 52300,
    descripcion: "32 Pulgadas",
  },

  {
    codigo: 53,
    categoria: "Climatización",
    imagen: "imagenes/ventilador2.png",
    nombre: "Ventilador",
    marca: "Axel",
    precio: 17800,
    descripcion: "De pie de 20 Pulgadas",
  },
  {
    codigo: 54,
    categoria: "Climatización",
    imagen: "imagenes/ventilador3.png",
    nombre: "Ventilador",
    marca: "Orbital",
    precio: 18100,
    descripcion: "De pie de 20 Pulgadas",
  },
];

// carga de categorias
const categorias = [
  {
    orden: 1,
    descrip: "Climatización",
    imagen: "imagenes/aire3.webp",
  },
  {
    orden: 2,
    descrip: "Pequeños",
    imagen: "imagenes/pequenos.jfif",
  },
  {
    orden: 3,
    descrip: "Cocinas",
    imagen: "imagenes/cocinas.jfif",
  },
  {
    orden: 4,
    descrip: "Refrigeracion",
    imagen: "imagenes/refrigeracion.jfif",
  },
  {
    orden: 5,
    descrip: "Lavarropas",
    imagen: "imagenes/lavarropas.jfif",
  },
  {
    orden: 6,
    descrip: "Televisores",
    imagen: "imagenes/televisores.jfif",
  },
];
// enviar al local storage los productos
const localData = JSON.parse(localStorage.getItem("productos"));
let producto = localData || productos;
const json = JSON.stringify(producto);
localStorage.setItem("producto", json);

// declaracion de variables
let listadofiltrado;
let categoriaSeleccionada = "CLIMATIZACION";
let cambio = 0;
let inicio = 0;
let final = 2;

const boton1 = document.querySelector("#boton1");
// dar funcionalidad a los botones de carrousel
boton1.addEventListener("click", function () {
  if (cambio == 0) {
    cambio = 1;
  } else {
    cambio = 0;
  }
  cambiar();
});

const boton2 = document.querySelector("#boton2");

boton2.addEventListener("click", function () {
  if (cambio == 0) {
    cambio = 1;
  } else {
    cambio = 0;
  }
  cambiar();
});
// definir las categorias a mostrar
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

  //Obtener todo lo de la URL después del ?
  const queryString = window.location.search;
  //Arma un objeto con todos los parámetros de la URL todo lo que tiene un =
  const urlParams = new URLSearchParams(queryString);
  //Toma solamente el parámetro categoria, si no le pasamos ese param, retorna null (mostrar todas las categorías)
  const categoria = urlParams.get("categoria");

  //Dar valor inicial a la categoria seleccionada
  let categoriaSeleccionada = categoria || "TODAS";

  for (let i = inicio; i <= final; i++) {
    const html = `<div>
    
    <a class="categselec" href=/productos.html?categoria=${categorias[i].descrip}>
              <img class="imagselec" src="${categorias[i].imagen}"  />
            </a>
          <div class="card-body text-center">
            <h5 class="">${categorias[i].descrip}</h5>
          </div>
          </div>
          `;

    listadocategorias.innerHTML += html;
  }
  let listadofiltrado = localStorage.getItem("producto");
  // Se parsea para poder ser usado en js con JSON.parse :)
  listadofiltrado = JSON.parse(listadofiltrado);

  const listadoProductos = document.querySelector("#listado-productos");

  listadoProductos.innerHTML = "";

  let nuevoListado = listadofiltrado.filter((elemento) => {
    return (
      elemento.categoria === categoriaSeleccionada ||
      categoriaSeleccionada === "TODAS"
    );
  });

  nuevoListado.forEach((producto) => {
    const html = `
          <div class="col-12 col-md-4">
            <div class="card mb-3">
              <img
                src="${producto.imagen}"
                class="card-img-top"
                alt="${producto.nombre}"
              />
              <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.marca}</p>
                <p class="card-text">$ ${producto.precio}</p>
                <p class="card-text"> codigo ${producto.codigo}</p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-${producto.codigo}">
                  Detalle
                </button>
              </div>
            </div>
          </div>

          <!-- Modal -->
          <div class="modal fade" id="modal-${producto.codigo}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">${producto.nombre}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <img
                  src="${producto.imagen}"
                  class="card-img-top"
                  alt="${producto.nombre}"
                  />
                  
                  <h5 class="card-title">${producto.nombre}</h5>
                  <p class="card-text">${producto.marca}</p>
                  <p class="card-text">$ ${producto.precio}</p>
                  <p class="card-text"> codigo ${producto.codigo}</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" class="btn btn-primary" onclick="agregarProducto(${producto.codigo})">Comprar</button>
                </div>
              </div>
            </div>
          </div>
      `;

    listadoProductos.innerHTML += html;
  });
}

function agregarProducto(codigo) {
  // enviar al local storage el carrito
  const localDataCarrito = JSON.parse(localStorage.getItem("carrito"));
  let carrito = localDataCarrito || [];
  carrito.push(codigo);

  localStorage.setItem("carrito", JSON.stringify(carrito));
}

cambiar();
