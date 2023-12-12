import { useState } from "react";

export const TodoApp = () => {
  const [nuevaTarea, setNuevaTarea] = useState("");

  return (
    <div>
      <h1>Lista de tareas</h1>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder={"Nueva tarea"}
      />
      <button>hola</button>
    </div>
  );
};
