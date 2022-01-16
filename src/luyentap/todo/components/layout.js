import React from 'react'

const Layout = (props) => {
  return (
    <div
      style={{
        width: 500,
        margin: '20px auto',
        padding: 15,
        border: '1px solid #ccc',
      }}
    >
      {props.children}
    </div>
  )
}

export default React.memo(Layout)