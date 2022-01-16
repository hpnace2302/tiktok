import React,{ useState, useEffect} from 'react'

const Content = () => {
  const [countdown, setCountdown] = useState(180)

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown(prev => prev - 1)
      // console.log(countdown);
    }, 1000)

    return () => clearInterval(timerId)
  }, [])
  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  )
}

export default React.memo(Content)