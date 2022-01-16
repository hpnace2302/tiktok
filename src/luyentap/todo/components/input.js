
const InputTodo = (props) => {
  return (
    <input 
      type={props.type} 
      name={props.name} 
      onChange={props.change} 
    />
  )
}

export default InputTodo