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

class Sorteo<T> {
  private ticket?: T;
  constructor(private nombre: string) {}
  setNumero(ticket: T) {
    this.ticket = ticket;
  }
  getNumero() {
    return this.ticket;
  }
  public sortear(): string {
    return `Para ${this.nombre} el ticket es ${this.ticket}`;
  }
}

const sorteo = new Sorteo<string>("Erick");

sorteo.setNumero("S7");

console.log(sorteo.sortear());

/////////////////////////////////////////////////////////////////////////////////////////////////////

//CUANTAS VECES SE REPITE UN CARACTER
const str: string = "pollo";
const character: string = "o";
let acc: number = 0;

for (const letter of str) {
  letter === character ? (acc += 1) : str;
}

// console.log(`character ${character} se encontro ${acc} veces`);

//CONTADOR DE PALABRAS
const strg: string = "Hola mundo como estas";

// console.log(`this string includes ${strg.split(" ").length} words`);

//CALCULAR LOS DIAS DEL MES
const calcularDiasEnMes = (mes: number): number => {
  const diasPorMes: { [key: number]: number } = {
    2: 28,
    4: 30,
    6: 30,
    9: 30,
    11: 30,
  };

  return diasPorMes[mes] || 31;
};

console.log(`El mes 2 tiene ${calcularDiasEnMes(2)} dias`);
