import React from 'react'
import './playvideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data';
import { useState } from 'react'; /*we have to import useState hook from react to be able to use the useState() function*/
import { useEffect } from 'react'; /* we have to import useEffect hook from react to be able to use the useEffect() function*/
import moment from 'moment';

  const playvideo = ({videoId}) => {

   const [apiData,setApiData] = useState(null);
   const [channelData,setChannelData] = useState(null);
   const [commentData,setCommentData] = useState([]);

   const fetchVideoData = async () => {
      //Fetching Video's data
      const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      await fetch(videoDetails_url).then(res=>res.json()).then(data => setApiData(data.items[0]));
    } 


    const fetchOtherData = async () => {
      //fetching channel data
      const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
      await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]))

      //fetching Comment Data
      const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
      await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))
    }

    
    useEffect(()=>{

      fetchVideoData();

    },[])

    useEffect(()=>{
      fetchOtherData();
    },[apiData])
    

  return (
    <div className='play-video'>
        {/*<video src={video1} controls autoPlay muted>
        Your browser does not support the video tag.
        </video>*/}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
      
      {/*The <h3> statement checks if apiData, apiData.snippet, and apiData.snippet.title exist.
       If they do, it displays the title; if not, it shows "Title not pulled from API." 
       This prevents errors by ensuring each part is defined before accessing the next. */}
       <h3>
       {apiData && apiData.snippet && apiData.snippet.title 
        ? apiData.snippet.title 
        : "Title not pulled from API"}
       </h3>

       {/* <h3>Default title without youtube api</h3> */}
        
        <div className="play-video-info">
          
          <p>{apiData?value_converter(apiData.statistics.viewCount):"View count not pulled from youtube api"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():"upload time not pulled from youtube api"}</p>
            <div>
              <span><img src={like} alt=""/> {apiData?value_converter(apiData.statistics.likeCount):"like count not pulled from youtube api"}</span>
              <span><img src={dislike} alt=""/></span> {/*we cant pull dislikes from youtube api because youtube not longer displays dislikes */}
              <span><img src={share} alt=""/> Share</span>
              <span><img src={save} alt=""/> save</span>
            </div>
        </div>{/* end of play-video-info */}

        <hr/>

        <div className="publisher">
          <img src={channelData?channelData.snippet.thumbnails.default.url:"channel logo not pulled from youtube api"} alt="" />
          <div>
            <p>{apiData?apiData.snippet.channelTitle:"Channel title not pulled from youtube api"}</p>
            <span>{channelData?value_converter(channelData.statistics.subscriberCount):"subscriber count not pulled from youtube api"} Subscribers</span> {/* to dynamcially pull the channel subscribers and channel image
            we have to create another youtube api link under the channels api section of youtube api */}
          </div>{/*channel name div */}
          {/***************** */}
          <button>Subscribe</button>

        </div>{/* end publisher div */}

        <div className="vid-description">
          <p>{apiData?apiData.snippet.description.slice(0,250):"description not pulled from youtube api"}</p>
          <p>Channel that makes learning easy</p>
          <p>Subscribe to GreatStack to Watch More Tutorials on web development</p>
          <hr />
          <h4>{apiData?value_converter(apiData.statistics.commentCount):"comment count not pulled from youtube api"} Comments</h4>
              {/* to dynamcially pull the comments under a videi
            we have to create another youtube api link under the commentThreads api section of youtube api */}
            
            {/*
                {commentData.map((item,index)=>{
                    return(

                      console.log("hello");  


                    )
                })} */}
           

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

              {/* we comment out the hard coded comments because we are dynamically pulling comments on
              each
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
                </div>
              </div>

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
                </div>
              </div>

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
                </div>
              </div>

                  */}

        </div>{/*end vid-description */}

    </div>/* end of play-video div */

  
  )
}

export default playvideo