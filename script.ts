class Pelicula {
  nombre?: string;
  protagonistas?: string[];
  actores?: string[];

  proyectarEnCine() {
    console.log(`La película ${this.nombre} está siendo proyectada`);
  }

  constructor(nombre: string, protagonistas: string[], actores: string[]) {
    this.nombre = nombre;
    this.protagonistas = protagonistas;
    this.actores = actores;
  }
}

const pelicula = new Pelicula("Matrix", ["Neo", "Trinity"], ["Keanu Reeves"]);

console.log(pelicula);
