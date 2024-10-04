import React from 'react'
import './video.css'
import PlayVideo from '../../Components/PlayVideo/playvideo'
import Recommended from '../../Components/Recommended/recommended'
import { useParams } from 'react-router-dom'

const video = () => {

  const {videoId,categoryId} = useParams();

  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId}/>
      <Recommended/>
    </div> 
  )
}

export default video