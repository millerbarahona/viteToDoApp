import React from 'react'

export const TodoListItem = ({todo, handleDelete, handleToggle, i}) => {
  return (
    <li className="list-group-item">

      <p
        onClick={() => handleToggle(todo.id)}
        className={`${todo.done && 'complete'}`}
      >
        {i + 1}. {todo.desc}</p>

      <button
        className="btn btn-danger"
        onClick={() => handleDelete(todo.id)}
      >
        Borrar
      </button>
    </li>
  )
}
