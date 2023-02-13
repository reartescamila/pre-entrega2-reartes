// class Usuario {
//   constructor(nombre, clave) {
//     this.nombre = nombre;
//     this.clave = clave;
//   }
// }

// function existe(usuarios, nombre) {
//   for (let usuario of usuarios) {
//     if (usuario.nombre.toUpperCase() === nombre.toUpperCase()) {
//       return true;
//     }
//   }
//   return false;
// }

// const usuarios = [];
// usuarios.push(new Usuario("camila", "clave"));

// const usuario1 = new Usuario(
//   prompt("ingrese su usuario"),
//   prompt("ingrese su clave")
// );
// if (!existe(usuarios, usuario1.nombre)) {
//   usuarios.push(usuario1);
// } else {
//   alert("El usuario " + usuario1.nombre.toUpperCase() + " ya existe");
// }

class Bus {
    constructor(origen, destino, horario, chofer) {
      this.origen = origen;
      this.destino = destino;
      this.horario = horario;
      this.chofer = chofer;
    }
  }
  
  function filtroBusesporDestino(equipo, destino) {
    return equipo.filter(
      (objeto) => objeto.destino.toUpperCase() === destino.toUpperCase()
    );
  }
  
  function listaPasajeros(buses) {
    let lista = "";
    for (const item of buses) {
      lista +=
        " COLECTIVO DISPONIBLE : " +
        " ORIGEN " +
        item.origen +
        " DESTINO " +
        item.destino +
        " HORARIO DE PARTIDA " +
        item.horario;
    }
    return lista;
  }
  
  const buses = [];
  buses.push(new Bus("córdoba", "buenos aires", "18:30", "Roberto, Sanchez"));
  buses.push(new Bus("córdoba", "mendoza", "19:30", "Roberto, Juarez"));
  buses.push(new Bus("córdoba", "villa maria", "20:30", "Carlos, Reartes"));
  buses.push(new Bus("córdoba", "retiro", "21:30", "Gustavo, Reartes"));
  buses.push(new Bus("córdoba", "buenos aires", "22:30", "Alberto, Sanchez"));
  
  let filtro = filtroBusesporDestino(buses, prompt("ingrese el destino"));
  if (filtro.length > 0) {
    alert(listaPasajeros(filtro));
  } else {
    alert("NO EXISTE COLECTIVOS PARA ESE DESTINO");
  }
  