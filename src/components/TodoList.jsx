import React from 'react'
import "../styles/TodoList.css";

function TodoList(props) {
  return (
    <section className='app-section'>
      <ul className='app-list'>
        {props.children}
      </ul>
    </section>
  )
}

export default TodoList