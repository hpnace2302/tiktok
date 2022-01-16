import { 
  SET_TODO_INPUT,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO
} from "./actions"

const initState = {
  todos: [],
  todoInput: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case DELETE_TODO:
      const newTodo = [...state.todos]
      newTodo.splice(action.payload, 1)
      return {
        ...state,
        todos: newTodo
      }
    case UPDATE_TODO:
    const index = action.payload;
    if (state.todoInput !== "") {
      state.todos[index] = state.todoInput;
    }
    return {
      ...state
    }
    default:
      throw new Error('Invalid action')
  } 
}

export { initState }
export default reducer