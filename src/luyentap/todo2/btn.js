import React from 'react'

const Button = (props) => {
  return (
    <button
      onClick={props.click}
    >Add todo</button>
  )
}

export default Button