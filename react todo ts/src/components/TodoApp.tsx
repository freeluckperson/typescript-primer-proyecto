// import React, { useState } from "react";

// type Todo = {
//   id: number;
//   text: string;
// };

// export const TodoApp: React.FC = () => {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [newTodo, setNewTodo] = useState("");

//   const handleAddTodo = () => {
//     if (newTodo.trim() !== "") {
//       const newTask: Todo = {
//         id: Date.now(),
//         text: newTodo,
//       };
//       setTodos([...todos, newTask]);
//       setNewTodo("");
//     }
//   };

//   const handleDeleteTodo = (id: number) => {
//     const updatedTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h1>Todo List In Ts</h1>
//       <div style={{ display: "flex", justifyItems: "center" }}>
//         <input
//           style={{ height: "14px" }}
//           type="text"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//         />
//         <button style={{ height: "40px" }} onClick={handleAddTodo}>
//           New
//         </button>
//       </div>
//       {todos.map((todo) => (
//         <ul className="taskList">
//           <li className="task" key={todo.id}>
//             {todo.text}
//             <button onClick={() => handleDeleteTodo(todo.id)}>Borrar</button>
//           </li>
//         </ul>
//       ))}
//     </div>
//   );
// };

import React, { useState } from "react";

export const TodoApp: React.FC = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  console.log(tasks);

  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const handleDeleteTask = (i: number) => {
    const del = tasks.filter((task, index) => index !== i);
    setNewTask(del);
  };

  return (
    <div>
      <h1>TodoApp With Typescript</h1>
      <div>
        <input
          type="text"
          placeholder={`${" "} New task`}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>New Task</button>
      </div>
      <ul>
        {tasks?.map((task, i) => (
          <>
            <li key={i}>{task}</li>
            <button onClick={() => handleDeleteTask(i)}>x</button>
          </>
        ))}
      </ul>
    </div>
  );
};
