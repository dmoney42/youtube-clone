import React from 'react'
import './playvideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'


const playvideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted>
        Your browser does not support the video tag.
        </video>
    
       <h3>Best Youtube Channel To Lean Web Development</h3>

       <div className="play-video-info">
        <p>1525 Views &bull; 2 days ago</p>
       </div>
    </div>/* end of play-video div */
  )
}

export default playvideo