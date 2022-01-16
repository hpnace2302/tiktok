import React, {useState, useRef} from 'react'
import Button from './btn'
import Input from './input'

const App = () => {
  const inputRef = useRef()
  const todoInputRef = useRef()
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [todoUpdate, setTodoUpdate] = useState()
  const [button, setButton] = useState(true)
  const [buttonSave, setButtonSave] = useState(false)
  const handleChangeInput = (e) => {
    setTodo(e.target.value)
  }
  const handleAdd = () => {
    setTodos((prev) => {
      const newTodos = [...prev, todo];
      return newTodos;
    });
    setTodo('')
    inputRef.current.focus()
  }
  const handleDelete = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  const handleUpdate = (todo, index) => {
    setButton(false)
    setButtonSave(true)
    setTodoUpdate(todo)
    document.querySelector('.todo').style.display = 'none'
  }
  const handleSave = (todo, index) => {
    if (todo !== '') {
      todos[index] = todoUpdate
    }
    setButton(true)
    setButtonSave(false)
    document.querySelector('.todo').style.display = 'block'
  }
  const handleUpdateValue = (e) => {
    setTodoUpdate(e.target.value)
  }
  return (
    <div style={{margin: '20px'}}>
      <Input 
        change={handleChangeInput} 
        value={todo} 
        inputref={inputRef}
      />
      <Button click={handleAdd}/>
      {todos.map((todo, index) => (
        <li 
          key={index}
          style={{display: 'flex'}}
        >
          {/* {button &&  */}
          <span className="todo">{todo}</span>
          {/* } */}
          {buttonSave && <input ref={todoInputRef} onChange={(e) => handleUpdateValue(e)} value={todoUpdate}/>}   
          <button onClick={() => handleDelete(index)}>Delete</button> 
          {button && <button onClick={() => handleUpdate(todo, index)}>Update</button>}
          {buttonSave && <button onClick={() => handleSave(todo, index)}>Save</button>}
        </li>
      ))}
    </div>
  )
}

export default App