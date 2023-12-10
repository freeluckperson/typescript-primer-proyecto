interface Persona {
  nombre: string,
  apellido: string,
  hombre?: boolean,
}

let persona: Persona = { nombre: "erick", apellido: "segura", hombre: true };

let persona2: Persona = { nombre: "erick", apellido: "segura" };
console.log(persona);
