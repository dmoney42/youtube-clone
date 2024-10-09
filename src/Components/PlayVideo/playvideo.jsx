import React, { useState, useEffect } from 'react';
import './playvideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';

const playvideo = ({videoId}) => {

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [comments, setComments] = useState([]); // State to store comments

    const fetchVideoData = async () => {
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url)
            .then(res => res.json())
            .then(data => setApiData(data.items[0]));
    };

    const fetchOtherData = async () => {
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelData_url)
            .then(res => res.json())
            .then(data => setChannelData(data.items[0]));
    };

    // Fetch comments for the video
    const fetchComments = async () => {
        const comments_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`;
        await fetch(comments_url)
            .then(res => res.json())
            .then(data => setComments(data.items));
    };

    useEffect(() => {
        fetchVideoData();
    }, [videoId]);

    useEffect(() => {
        if (apiData) {
            fetchOtherData();
        }
    }, [apiData]);

    // Fetch comments when videoId changes
    useEffect(() => {
        fetchComments();
    }, [videoId]);

    return (
        <div className='play-video'>
            {/* Existing code for video iframe, title, and stats */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h3>{apiData && apiData.snippet && apiData.snippet.title ? apiData.snippet.title : "Title not pulled from API"}</h3>
            <div className="play-video-info">
                <p>{apiData ? value_converter(apiData.statistics.viewCount) : "View count not pulled from YouTube API"} Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "Upload time not pulled from YouTube API"}</p>
                <div>
                    <span><img src={like} alt=""/> {apiData ? value_converter(apiData.statistics.likeCount) : "Like count not pulled from YouTube API"}</span>
                    <span><img src={dislike} alt=""/></span>
                    <span><img src={share} alt=""/> Share</span>
                    <span><img src={save} alt=""/> Save</span>
                </div>
            </div>

            <hr/>

            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : "Channel logo not pulled from YouTube API"} alt="" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : "Channel title not pulled from YouTube API"}</p>
                    <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : "Subscriber count not pulled from YouTube API"} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>

            <div className="vid-description">
                <p>{apiData ? apiData.snippet.description.slice(0, 250) : "Description not pulled from YouTube API"}</p>
                <p>Channel that makes learning easy</p>
                <p>Subscribe to GreatStack to Watch More Tutorials on web development</p>
                <hr />
                <h4>{apiData ? value_converter(apiData.statistics.commentCount) : "Comment count not pulled from YouTube API"} Comments</h4>

                {/* Dynamically displaying fetched comments */}
                {comments.length > 0 ? comments.map(comment => (
                    <div className="comment" key={comment.id}>
                        <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl || user_profile} alt="User" />
                        <div name="userComment">
                            <h3>{comment.snippet.topLevelComment.snippet.authorDisplayName} 
                                <span>{moment(comment.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>
                            </h3>
                            <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                            <div className="comment-action">
                                <img src={like} alt=""/>
                                <span>{comment.snippet.topLevelComment.snippet.likeCount}</span>
                                <img src={dislike} alt=""/>
                            </div>
                        </div>
                    </div>
                )) : <p>No comments available</p>}

            </div>
        </div>
    );
}

export default playvideo;
