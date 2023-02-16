/* 
PRE ENTREGA 2 REARTES CAMILA 
*/

// ----
// CREADOR DE STOCK
// ----
let colectivos = [];

function agregarColectivo() {
  let cantidad = parseInt(
    prompt("Ingrese la cantidad de pasajes que va agregar a su stock")
  );
  let origen = prompt("Ingrese la terminal de origen").toLowerCase();
  let destino = prompt("Ingrese la terminal de destino").toLowerCase();
  let precio = parseInt(prompt("Ingrese el precio del producto"));
  if (
    colectivos.some((item) => item.origen === origen) &&
    colectivos.some((item) => item.destino === destino)
  ) {
    alert("Ya existe este colectivo");
  } else {
    alert("Su Colectivo ha sido agregado correctamente");
    let objeto = {
      id: colectivos.length + 1,
      cantidad,
      origen,
      destino,
      precio,
    };
    colectivos.push(objeto);
    console.log(colectivos);
  }
}

// COMPRA DE PASAJES

let pasajeros = [];

const suma = (a, b) => a + b;
const resta = (a, b) => a - (a * b) / 100;
const iva = (x) => x * 1.21;

function comprarPasaje() {
  let origen = prompt(`Ingrese terminal de origen`).toLowerCase();
  let destino = prompt(`Ingrese terminal de destino`).toLowerCase();
  let dni = parseInt(prompt("Ingrese el DNI del pasajero"));
  let nombrePasajero = prompt("Ingrese NOMBRE Y APELLIDO del pasajero");

  if (
    colectivos.some((item) => item.origen === origen) &&
    colectivos.some((item) => item.destino === destino)
  ) {
    let objeto = {
      id: pasajeros.length + 1,
      cantidad: +1,
      origen,
      destino,
      precio,
      dni,
      nombrePasajero,
    };
    pasajeros.push(objeto);
    console.log(pasajeros);
    alert("El pasaje ha sido comprado con exito");
  } else if (
    colectivos.some((item) => item.origen != objeto) &&
    colectivos.some((item) => item.destino != objeto)
  ) {
    alert("USTED NO HA INGRESADO LAS TERMINALES CORRECTAMENTE");
  }
}

function buscar() {
  let origen = prompt(
    "Ingrese el NOMBRE DE ORIGEN para ver los pasajes disponibles"
  ).toLowerCase();
  let searchFilter = colectivos.filter((item) => item.origen === origen);
  let mensaje = "";

  searchFilter.forEach((item) => {
    mensaje += `
    ID: ${item.id}
    TERMINAL DE ORIGEN: ${item.origen}
    TERMINAL DE DESTINO: ${item.destino}
    Precio: $${item.precio}}
  `;
  });

  alert(mensaje);
}

alert("INICIO DEL PROCESO DE AGREGADO DE STOCK");

let decisionStock = prompt(
  "desea agregar o seguir agregando colectivos? si o no"
).toLowerCase();
while (decisionStock != "no" && decisionStock != "si") {
  alert("por favor ingresa si o no");
  decisionStock = prompt(
    "desea agregar o seguir agregando colectivos? si o no"
  ).toLowerCase();
}

if (decisionStock == "si") {
  while (decisionStock != "no") {
    agregarColectivo();
    decisionStock = prompt(
      "desea agregar o seguir agregando colectivos? si o no"
    ).toLowerCase();  
  }
} else if (decisionStock == "no") {
  alert("HA FINALIZADO EL PROCESO DE AGREGADO DE STOCK");
}

// while (decisionStock != "no") {
//   decisionStock = prompt(
//     "desea agregar o seguir agregando colectivos? si o no"
//   ).toLowerCase();  
//   agregarColectivo();
// }

// BUSQUEDA POR FILTRADO
let filter = prompt(`
Si desea filtrar algun producto escriba SI.
De lo contrario escriba NO`).toLowerCase();

while (filter != "no" && filter != "si") {
  alert("Ingresa si o no");
  filter = prompt(`
  ingrese la terminal de origen que desea filtrar`).toLowerCase();
}

if (filter == "si") {
  let colectivosAll = colectivos.map(
    (item) => `
  NUESTROS VIAJES:
  origen: ${item.origen}
  destino: ${item.destino}
  Preecio: $${item.precio}
    `
  );
  alert(colectivosAll);
  buscar();
} else if (filter == "no") {
  alert("LA BUSQUEDA TERMINADO");
}
