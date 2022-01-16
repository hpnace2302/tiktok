export const SET_TODO_INPUT = Symbol('SET_TODO_INPUT')
export const ADD_TODO = Symbol('ADD_TODO')

export const setTodoInput = payload => ({
  type: SET_TODO_INPUT,
  payload
})

export const addTodo = payload => ({
  type: ADD_TODO,
  payload
})