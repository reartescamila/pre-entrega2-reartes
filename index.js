/* 
PRE ENTREGA 2 REARTES CAMILA 
*/

let pasajeros = [];

const suma = (a, b) => a + b;
const resta = (a, b) => a - (a * b) / 100;
const iva = (x) => x * 1.21;

function agregarPasaje() {
  let origen = prompt(`
  Ingrese ciudad de origen. OPCIONES:
  -CORDOBA
  -SAN LUIS
  -BUENOS AIRES`).toLowerCase();
  let destino = prompt(`
  Ingrese ciudad de destino. OPCIONES:
  -CORDOBA
  -SAN LUIS
  -BUENOS AIRES`).toLowerCase();
  let dni = parseInt(prompt("Ingrese el DNI del pasajero"));
  let nombrePasajero = prompt("Ingrese NOMBRE Y APELLIDO del pasajero");

  if (origen === "cordoba" && destino === "buenos aires") {
    alert("El pasaje ha sido comprado con exito");
    let objeto = {
      id: pasajeros.length + 1,
      origen,
      destino,
      dni,
      nombrePasajero,
      precio: 1500,
      descuento: 5,
      precioTotal: iva(resta(1500, 5)),
    };
    pasajeros.push(objeto);
    console.log(pasajeros);
  } else if (origen === "cordoba" && destino === "san luis") {
    alert("El pasaje ha sido comprado con exito");
    let objeto = {
      id: pasajeros.length + 1,
      origen,
      destino,
      dni,
      nombrePasajero,
      precio: 1200,
      descuento: 15,
      precioTotal: iva(resta(1200, 15)),
    };
    pasajeros.push(objeto);
    console.log(pasajeros);
  } else if (origen === "san luis" && destino === "cordoba") {
    alert("El pasaje ha sido comprado con exito");
    let objeto = {
      id: pasajeros.length + 1,
      origen,
      destino,
      dni,
      nombrePasajero,
      precio: 1000,
      descuento: 10,
      precioTotal: iva(resta(1000, 10)),
    };
    pasajeros.push(objeto);
    console.log(pasajeros);
  } else if (origen === "san luis" && destino === "buenos aires") {
    alert("El pasaje ha sido comprado con exito");
    let objeto = {
      id: pasajeros.length + 1,
      origen,
      destino,
      dni,
      nombrePasajero,
      precio: 2000,
      descuento: 15,
      precioTotal: iva(resta(2000, 15)),
    };
    pasajeros.push(objeto);
    console.log(pasajeros);
  } else if (origen === "buenos aires" && destino === "cordoba") {
    alert("El pasaje ha sido comprado con exito");
    let objeto = {
      id: pasajeros.length + 1,
      origen,
      destino,
      dni,
      nombrePasajero,
      precio: 1500,
      descuento: 15,
      precioTotal: iva(resta(1500, 15)),
    };
    pasajeros.push(objeto);
    console.log(pasajeros);
  } else if (origen === "buenos aires" && destino === "san luis") {
    alert("El pasaje ha sido comprado con exito");
    let objeto = {
      id: pasajeros.length + 1,
      origen,
      destino,
      dni,
      nombrePasajero,
      precio: 1000,
      descuento: 10,
      precioTotal: iva(resta(1000, 10)),
    };
    pasajeros.push(objeto);
    console.log(pasajeros);
  } else {
    alert("USTED NO HA SELECCIONADO SU PASAJE CORRECTAMENTE");
  }
}

function buscar() {
  let dni = parseInt(prompt("Ingrese el DNI del pasajero que desea consultar"));
  let busqueda = pasajeros.filter((item) => item.dni === dni);
  let mensaje = "";
  busqueda.forEach((item) => {
    mensaje += `
    ID: ${item.id}
    TERMINAL DE ORIGEN: ${item.origen}
    TERMINAL DE DESTINO: ${item.destino}
    DNI: ${item.dni}
    NOMBRE Y APELLIDO: ${item.nombrePasajero}
    Precio: $${item.precio}
    Descuento: %${item.descuento}
    PRECIO TOTAL (+iva): $${item.precioTotal}
  `;
  });

  alert(mensaje);
}

function ordenarDeMayor() {
  console.log(
    pasajeros.sort((a, b) => {
      if (a.precio > b.precioTotal) {
        return -1;
      }
      if (a.precio < b.precioTotal) {
        return 1;
      }
      return 0;
    })
  );
}

agregarPasaje();
buscar();
ordenarDeMayor(); //Observable en la consola

while (
  (seguirAgregando =
    prompt(
      `Si desea seguir COMPRANDO Pasajes, presione ENTER.
   Si desea finalizar escriba: NO`
    ).toLowerCase() != "no")
) {
  agregarPasaje();
  buscar();
  ordenarDeMayor(); //Observable en la consola
}
