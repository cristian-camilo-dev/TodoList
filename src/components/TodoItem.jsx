import React from "react";
import "../styles/TodoItem.css";
import JSConfetti from 'js-confetti'

function TodoItem(props) {
  
  //hacer una funcion para resaltar el texto completado
  

  return (
    <li className="app-item">
      <span className="complete" onClick={props.onComplete}>
        {props.completed ? "🥳" : "😴"}
      </span>
      <p className={`app-todoText ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="delete" onClick={props.onDelete}>
        ❌
      </span>
    </li>
  );
}

export default TodoItem;
