import video2 from '../../../videos/video2.mp4'
import { forwardRef, useImperativeHandle, useRef } from 'react'

const Video = (props, ref) => {
  const videoRef = useRef()
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play()
    },
    pause() {
      videoRef.current.pause()
    }
  }))

  return (
    <video 
      ref={videoRef}
      src={video2} 
      style={{width: 200}}
    />
  )
}

export default forwardRef(Video)