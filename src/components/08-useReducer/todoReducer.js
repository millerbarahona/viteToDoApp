

export const todoReducer = (state = [], action) => {

  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    case 'delete':
      return state.filter(todo => todo.id !== action.payload);

    case 'toggle':
      return state.map(todo =>
        (todo.id === action.payload) //hace un ternario
          ? { ...todo, done: !todo.done} //si es el todo, se le cambia el done
          : todo //sino, se devuelve igual
      );

    case 'toggle-old':
      return state.map(todo => {

        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          };
        } else {
          return todo;
        }

      });

    default:
      return state;
  }

}