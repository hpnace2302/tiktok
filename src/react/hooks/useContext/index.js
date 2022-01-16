import React, {useContext } from 'react'
import Content from './content'
import '../../../App.css'
import { ThemeProvider, ThemeContext } from './ThemeContext'

const App = () => {
  const context = useContext(ThemeContext)
  console.log(context);
  return (
      <div style={{padding: 32}}>
        <button onClick={context.toggleTheme}>Toggle theme</button>
        <Content />
      </div>
  )
}

export default React.memo(App)