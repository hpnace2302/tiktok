import { useState, useRef } from 'react'
import { useStore, actions } from './store'

const App = () => {
  const [state, dispatch] = useStore()
  const {todos, todoInput} = state
  const [input, setInput] = useState(todoInput)
  const inputRef = useRef()

  console.log(todoInput);

  const handleAdd = () => {
    if (todoInput === '') {
      alert('du lieu ban nhap khong chinh xac')
    } else {
      dispatch(actions.addTodo(todoInput))
    }
    dispatch(actions.setTodoInput(''))

    inputRef.current.focus()
  }
  const handleDelete = (index) => {
    dispatch(actions.deleteTodo(index))
    dispatch(actions.setTodoInput(''))
    inputRef.current.focus()
  }
  const handleClick = (todo, index) => {
    dispatch(actions.setTodoInput(todo))
    inputRef.current.focus()
    // dispatch(actions.updateTodo(index))
    // console.log(index);
    // dispatch(actions.setTodoInput(index.value))
  }
  const handleUpdate = (todo, index) => {
    dispatch(actions.setTodoInput(todo))
    dispatch(actions.addTodo(todoInput))
    inputRef.current.focus()
    dispatch(actions.deleteTodo(index))
  }

  console.log(todos);

  return (
    <div style={{textAlign: 'center', margin: '20px'}}>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="Enter todo..."
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={handleAdd}>Add</button>
      {todos.map((todo, index) => (
        <ul key={index} style={{display: 'flex', justifyContent: 'center'}}>
            <li 
              style={{cursor: 'pointer'}} 
              onClick={() => handleClick(todo, index)} 
            >{todo}</li>
            <button onClick={handleDelete} style={{marginLeft: 10, cursor: 'pointer'}}>Delete</button>
            <button onClick={() => handleUpdate(todo, index)}>Update</button>
        </ul>
      ))}
    </div>
  )
}

export default App;