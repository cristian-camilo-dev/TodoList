import React from 'react'
import "../styles/TodoCounter.css";

function TodoCounter({ completeTodos, todosLength }) {
  return (
    <h2 className="app-titulo">Has completado {completeTodos} de {todosLength}  ToDos</h2>
  )
}

export default TodoCounter