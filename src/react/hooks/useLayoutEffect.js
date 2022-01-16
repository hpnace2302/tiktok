import React, { useState ,useEffect, useLayoutEffect} from 'react'

const Content = () => {
  const [count, setCount] = useState(0)

  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0)
    }
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default React.memo(Content)