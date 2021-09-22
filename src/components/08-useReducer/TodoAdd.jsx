import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({handleAddTodo}) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 2) {
      return;
    }
    
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }

    handleAddTodo(newTodo);

    reset();
  }

  return (
    <>
      <h4>Agregar ToDo</h4>

      <hr />

      <form>
        <input
          value={description}
          type="text"
          name="description"
          placeholder="Aprender...."
          autoComplete="off"
          className=" form-control"
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block"
          onClick={handleSubmit}
        >
          Agregar
        </button>
      </form>
    </>
  )
}
