import React, { useState } from "react";

export const TodoApp: React.FC = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const handleDeleteTask = (i: number) => {
    setTasks(tasks.filter((_, index) => index !== i));
  };

  return (
    <div className="container w-50 ">
      <h1 className="text-center my-5 w">TodoApp With Typescript</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="New task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddTask}>
          New Task
        </button>
      </div>
      <ul className="list-group">
        {tasks?.map((task, i) => (
          <li
            key={i}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {task}
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteTask(i)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
