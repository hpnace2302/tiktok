import React, { useState, useEffect} from 'react'

const ChatApp = () => {
  const [lessonId, setLessonId] = useState(1)

  useEffect(() => {
    const handleComment = ({detail}) => {
      console.log(detail);
    }
    window.addEventListener(`lesson-${lessonId}`, handleComment)

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment)
    }
  }, [lessonId])

  const lessons = [
    {
      id: 1,
      name: 'ReactJS'
    },
    {
      id: 2,
      name: 'NodeJS'
    },
    {
      id: 3,
      name: 'Javascript'
    }
  ] 
  return (
    <div>
      {lessons.map(lesson => (
        <li 
          key={lesson.id}
          style={{
            cursor: 'pointer', 
            color: lessonId === lesson.id ? 'red' : '#333'
          }}
          onClick={() => setLessonId(lesson.id)}
        >{lesson.name}</li>
      ))}
    </div>
  )
}

export default ChatApp