
const initialState = [{
  id: 1,
  todo: 'Comprar Pan',
  done: false
}];

const todoReducer = (state = initialState, action) => {

  if( action?.type === 'agregar'){ //si el action tiene algun valor, hace lo otro
    return [...state, action.payload];
  }

  return state; 
}

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Comprar Leche',
  done: false
}

const actionNewTodo = {
  type: 'agregar',
  payload: newTodo  //payload es un estandar
}

todos = todoReducer(todos, actionNewTodo);

console.log(todos);