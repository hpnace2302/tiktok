import React, {useState, useReducer} from 'react'

// useState
// 1. Init state
// 2. Actions: + (state + 1) / - (state - 1)

// useReducer
// 1. Init state
// 2. Actions: + (state + 1) / - (state - 1)
// 3. Reducer
// 4. Dispatch

// Init state
const initState = 0

// Actions
const UP_ACTION = '+'
const DOWN_ACTION = '-'

// Reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default: throw new Error(`Invalid action`)
  }
}

// Dispatch

const App = () => {
  const [count, dispatch] = useReducer(reducer, initState)
  return (
    <div style={{padding: 32}}>
      <h1>{count}</h1>
      <button 
        onClick={() => dispatch(UP_ACTION)}
      >+</button>
      <button 
        onClick={() => dispatch(DOWN_ACTION)}
      >-</button>
    </div>
  )
}

export default React.memo(App)