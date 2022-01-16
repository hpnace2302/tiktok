import React, {useState, useMemo, useRef} from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const nameRef = useRef()

  const handleSubmit = () => {
    setProducts([...products,{
        name, price: +price
      }])
    setName('')
    setPrice('')
    nameRef.current.focus()
  }

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      return result + prod.price
    }, 0)
    return result
  }, [products])

  return (
    <>
      <br/>
      <input
        ref={nameRef}
        placeholder="Enter name..."
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br/>
      <input
        placeholder="Enter price..."
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <br/>
      <button onClick={handleSubmit}>Add</button>
      <h1>Total: {total}</h1>
      {products.map((product, index) => (
        <div key={index}>{product.name} - {product.price}</div>
      ))}
    </>
  )
}

export default React.memo(App)