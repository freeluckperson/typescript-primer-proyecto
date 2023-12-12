"use strict";
//HERENCIA
// class Pelicula {
//   nombre?: string;
//   protagonistas?: string[];
//   actores?: string[];
//   proyectarEnCine() {
//     console.log(`La película ${this.nombre} está siendo proyectada`);
//   }
//   constructor(nombre: string, protagonistas: string[], actores: string[]) {
//     this.nombre = nombre;
//     this.protagonistas = protagonistas;
//     this.actores = actores;
//   }
// }
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setNumero(ticket) {
        this.ticket = ticket;
    }
    getNumero() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
const sorteo = new Sorteo("Erick");
sorteo.setNumero("S7");
console.log(sorteo.sortear());
/////////////////////////////////////////////////////////////////////////////////////////////////////
//CUANTAS VECES SE REPITE UN CARACTER
const str = "pollo";
const character = "o";
let acc = 0;
for (const letter of str) {
    letter === character ? (acc += 1) : str;
}
// console.log(`character ${character} se encontro ${acc} veces`);
//CONTADOR DE PALABRAS
const strg = "Hola mundo como estas";
// console.log(`this string includes ${strg.split(" ").length} words`);
//CALCULAR LOS DIAS DEL MES
const calcularDiasEnMes = (mes) => {
    const diasPorMes = {
        2: 28,
        4: 30,
        6: 30,
        9: 30,
        11: 30,
    };
    return diasPorMes[mes] || 31;
};
console.log(`El mes 2 tiene ${calcularDiasEnMes(2)} dias`);
