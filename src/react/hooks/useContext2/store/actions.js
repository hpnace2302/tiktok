export const SET_TODO_INPUT = Symbol('SET_TODO_INPUT')
export const ADD_TODO = Symbol('ADD_TODO')
export const DELETE_TODO = Symbol('DELETE_TODO')
export const UPDATE_TODO = Symbol('UPDATE_TODO')

export const setTodoInput = payload => ({
  type: SET_TODO_INPUT,
  payload
})
export const addTodo = payload => ({
  type: ADD_TODO,
  payload
})
export const deleteTodo = payload => ({
  type: DELETE_TODO,
  payload
})
export const updateTodo = payload => ({
  type: UPDATE_TODO,
})