
const AddTodo = (props) => {
  return (
    <button 
      type={props.type}
      name={props.name}
    >
      {props.children}
    </button>
  )
}

export default AddTodo