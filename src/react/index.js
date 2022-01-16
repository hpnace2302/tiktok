import React, {useState} from 'react'
import Content from './hooks/useMemo'

// fake comment
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Noi dung comment cua lesson ${id}`
      })
    )
  }, 2000)
}

emitComment(1)
emitComment(2)
emitComment(3)

const App = () => {
  const [ab, setAb] = useState(false)
  return (
    <div style={{margin: 32}}>
      <button 
        onClick={() => setAb(!ab)}
      >A</button>
      {ab && <Content/>}
    </div>
  )
}

export default React.memo(App)