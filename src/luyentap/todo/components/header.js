import React from 'react';

const HeaderComponent = () => {
  return (
    <header style={{minHeight: 45, width: '100%', backgroundColor: 'pink'}}>
      <h3 style={{textAlign: 'center'}}>Todo</h3>
    </header>
  )
}

export default React.memo(HeaderComponent)