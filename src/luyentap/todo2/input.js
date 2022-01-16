import React from 'react'

const Input = (props) => {
  return (
    <input 
      value={props.value}
      placeholder="enter todo..."
      onChange={props.change}
      ref={props.inputref}
    />
  )
}

export default Input