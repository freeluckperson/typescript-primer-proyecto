import React from "react";
import ReactDOM from "react-dom/client";
import { TodoApp } from "./components/TodoApp";
import "./styles.css";

//BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);
