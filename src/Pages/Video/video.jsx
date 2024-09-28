import React from 'react'
import './video.css'
import PlayVideo from '../../Components/PlayVideo/playvideo'
import Recommended from '../../Components/Recommended/recommended'

const video = () => {
  return (
    <div className='play-container'>
      <PlayVideo/>
      <Recommended/>
    </div> 
  )
}

export default video