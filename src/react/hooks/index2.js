import React from 'react'
import Content from './useContext3/index'
import {StoreProvider} from './useContext3/store'

const App = () => {
  return (
    <StoreProvider>
      <Content/>
    </StoreProvider>
  )
}

export default React.memo(App)