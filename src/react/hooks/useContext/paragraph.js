import React,{useContext} from 'react'
import { ThemeContext } from './ThemeContext'

const Paragraph = () => {
  const context = useContext(ThemeContext)
  return (
    <h1 className={context.theme}>
      Bạn muốn học lập trình hiệu quả hơn không? Hãy học tại trang web http://fullstack.edu.vn thay vì Youtube. Lý do tại sao mời bạn bấm vào đây: ...
    </h1>
  )
}

export default React.memo(Paragraph)