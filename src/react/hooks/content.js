import React, { useState, useEffect } from "react"

// 1. useEffect(callback)
// gọi callback mỗi khi component re-render
// gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])

// 1. Call back luôn được gọi sau khi component mounted
const Content = () => {
  // const tabs = ['posts', 'comments', 'albums']

  // const [title, setTitle] = useState('')
  // const [posts, setPosts] = useState([])
  // const [type, setType] = useState('posts')
  // const [showGoToTop, setShowGoToTop] = useState(false)

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //     .then(res => res.json())
  //     .then(posts => {
  //       setPosts(posts)
  //     })
  // }, [type])

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShowGoToTop(window.scrollY >= 200)
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //     // console.log('unmounting');
  //   }
  // }, [])

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div style={{padding: 32}}>
      <h1>{width}</h1>
      {/* {tabs.map((tab) => (
        <button 
          style={type === tab ? {
            color: 'red',
          } : {}}
          onClick={() => setType(tab)}
          key={tab}
        >
          {tab}
        </button>
      ))}
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      {posts.map((post, index) => (
        <li key={index}>{post.title || post.name}</li>
      ))}
      {showGoToTop && (
        <button
          style={{position: 'fixed', right: 20, bottom: 20}}
        > 
          Go to Top
        </button>
      )} */}
    </div>
  )
}

export default React.memo(Content)