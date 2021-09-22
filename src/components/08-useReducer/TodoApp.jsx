import React, { useEffect, useReducer } from 'react';
import { TodoList } from './TodoList';
import './styles.css';
import { todoReducer } from './todoReducer';
import { TodoAdd } from './TodoAdd';
//aplicacion ToDo que guarda sus tareas en el localstorage 
const initialState = [];

const init = () => { //esta funcion se ejecuta cada vez que se renderiza el componente

  return JSON.parse(localStorage.getItem('todos')) || [];
  //si el localstorage retorna un null, se regresa un array vacio
  //sino, se regresa un array
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init); //ayuda a react para que sea mas rapido

  //dispatch es una funcion a la que se le envia el action

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId
    }

    dispatch(action);
  }

  const handleToggle = (todoId) => {

    const action = {
      type: 'toggle',
      payload: todoId
    }

    dispatch(action);

  }

  const handleAddTodo = (newTodo) => {
    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action);

  }

  return (
    <div>
      <h1>ToDo App ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">

          <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />

        </div>

        <div className="col-5">

          <TodoAdd handleAddTodo={handleAddTodo} />

        </div>
      </div>
    </div>
  )
}
