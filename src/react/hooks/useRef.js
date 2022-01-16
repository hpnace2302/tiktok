import React, {useRef, useEffect, useState} from 'react'

const Content = () => {
  const [count, setCount] = useState(60)

  // const ref = useRef(99)

  const timerId = useRef()
  const prevCount = useRef()
  const h1Ref = useRef()

  useEffect(() => {
    prevCount.current = count
  }, [count])

  useEffect(() => {
    const rect = h1Ref.current.getBoundingClientRect()

    console.log(rect);
  })

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(prev => prev - 1)
    }, 1000)
    console.log('start', timerId.current)
  }

  const handleStop = () => {
    clearInterval(timerId.current)
    console.log('stop', timerId.current)
  }

  console.log(count, prevCount.current);

  return (
    <div>
      <h1>{count}</h1>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default React.memo(Content)