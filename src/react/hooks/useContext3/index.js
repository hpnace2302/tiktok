import {useContext, useState, useEffect} from 'react'
import { useStore, actions } from './store'

const App = () => {
  const [state, dispatch] = useStore()

  const { todos, todoInput } = state
  const [input, setInput] = useState(todoInput)

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
  }


  console.log(todoInput);
  return (
    <div>
      <input
        value={todoInput}
        placeholder="Enter todo..."
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={handleAdd}>Add</button>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </div>
  )
}

export default App