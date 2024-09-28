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
            <div>
              <span><img src={like} alt=""/> 125</span>
              <span><img src={dislike} alt=""/> 2</span>
              <span><img src={share} alt=""/> Share</span>
              <span><img src={save} alt=""/> save</span>
            </div>
        </div>{/* end of play-video-info */}

        <hr/>

        <div className="publisher">
          <img src={jack} alt="" />
          <div>
            <p>Greatstack</p>
            <span>1M Subscribers</span>
          </div>{/*channel name div */}
          {/***************** */}
          <button>Subscribe</button>

        </div>{/* end publisher div */}

        <div className="vid-description">
          <p>Channel that makes learning easy</p>
          <p>Subscribe to GreatStack to Watch More Tutorials on web development</p>
          <hr />
          <h4>130 Comments</h4>

              <div className="comment">
                <img src={user_profile} alt="" />
                <div name="userComment">
                  <h3>Jack Nicholson <span>1 day ago</span></h3>
                  <p>Awesome video. Very helpful. I just subscribed.</p>
                    <div className="comment-action">
                      <img src={like} alt="" />
                      <span>244</span>
                      <img src={dislike} alt="" />
                    </div>
                </div>{/* end userComment */}
              </div>{/* end comment div */}

              <div className="comment">
                <img src={user_profile} alt="" />
                <div name="userComment">
                  <h3>Jack Nicholson <span>1 day ago</span></h3>
                  <p>Awesome video. Very helpful. I just subscribed.</p>
                    <div className="comment-action">
                      <img src={like} alt="" />
                      <span>244</span>
                      <img src={dislike} alt="" />
                    </div>
                </div>{/* end userComment */}
              </div>{/* end comment div */}

              <div className="comment">
                <img src={user_profile} alt="" />
                <div name="userComment">
                  <h3>Jack Nicholson <span>1 day ago</span></h3>
                  <p>Awesome video. Very helpful. I just subscribed.</p>
                    <div className="comment-action">
                      <img src={like} alt="" />
                      <span>244</span>
                      <img src={dislike} alt="" />
                    </div>
                </div>{/* end userComment */}
              </div>{/* end comment div */}

              <div className="comment">
                <img src={user_profile} alt="" />
                <div name="userComment">
                  <h3>Jack Nicholson <span>1 day ago</span></h3>
                  <p>Awesome video. Very helpful. I just subscribed.</p>
                    <div className="comment-action">
                      <img src={like} alt="" />
                      <span>244</span>
                      <img src={dislike} alt="" />
                    </div>
                </div>{/* end userComment */}
              </div>{/* end comment div */}


              <div className="comment">
                <img src={user_profile} alt="" />
                <div name="userComment">
                  <h3>Jack Nicholson <span>1 day ago</span></h3>
                  <p>Awesome video. Very helpful. I just subscribed.</p>
                    <div className="comment-action">
                      <img src={like} alt="" />
                      <span>244</span>
                      <img src={dislike} alt="" />
                    </div>
                </div>{/* end userComment */}
              </div>{/* end comment div */}

        </div>{/*end vid-description */}

    </div>/* end of play-video div */

  
  )
}

export default playvideo