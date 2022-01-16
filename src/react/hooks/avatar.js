import React, { useState, useEffect} from 'react'

const AvatarComponent = () => {
  const [avatar, setAvatar] =useState()

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  }, [avatar])
  
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0]

    console.log(URL.createObjectURL(file));
    console.log(file);
    file.preview = URL.createObjectURL(file)
    setAvatar(file)

    e.target.value = null
  }

  return (
    <div>
      <input
        type='file'
        onChange={handlePreviewAvatar}
      />
      {avatar && (
        <img src={avatar.preview} alt="" width="80px"/>
      )}
    </div>
  )
}

export default AvatarComponent