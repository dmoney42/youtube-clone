import React, { useEffect, useState } from 'react';
import './feed.css';
import { Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';

const Feed = ({ category }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        
        try {
            const response = await fetch(videoList_url);
            const result = await response.json();
            setData(result.items);
            console.log(result.items, "Fetched items"); // for debugging
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    return (
        <div className="feed">
            {data.map((item, index) => (
                <Link to={`video/${item.snippet.categoryId}/${item.id}`} key={index} className='card'>
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>{value_converter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </Link>
            ))}

             {/*  
        <div className='card'>
            <img src={thumbnail2} alt="" />
            <h2>Best channel to learn coding that will help you to be a web developer</h2>
            <h3>Greatstack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>

        <div className='card'>
            <img src={thumbnail3} alt="" />
            <h2>Best channel to learn coding that will help you to be a web developer</h2>
            <h3>Greatstack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>

        <div className='card'>
            <img src={thumbnail4} alt="" />
            <h2>Best channel to learn coding that will help you to be a web developer</h2>
            <h3>Greatstack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>

        <div className='card'>
            <img src={thumbnail5} alt="" />
            <h2>Best channel to learn coding that will help you to be a web developer</h2>
            <h3>Greatstack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>

        <div className='card'>
            <img src={thumbnail6} alt="" />
            <h2>Best channel to learn coding that will help you to be a web developer</h2>
            <h3>Greatstack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>

        <div className='card'>
            <img src={thumbnail7} alt="" />
            <h2>Best channel to learn coding that will help you to be a web developer</h2>
            <h3>Greatstack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>

        <div className='card'>
            <img src={thumbnail8} alt="" />
            <h2>Best channel to learn coding that will help you to be a web developer</h2>
            <h3>Greatstack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className='card'>
            <img src={thumbnail1} alt="" />
            <h2>Best channel to learn coding that will help you to be a web developer</h2>
            <h3>Greatstack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>

        <div className='card'>
            <img src={thumbnail2} alt="" />
            <h2>Best channel to learn coding that will help you to be a web developer</h2>
            <h3>Greatstack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>

        <div className='card'>
            <img src={thumbnail3} alt="" />
            <h2>Best channel to learn coding that will help you to be a web developer</h2>
            <h3>Greatstack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>

        <div className='card'>
            <img src={thumbnail4} alt="" />
            <h2>Best channel to learn coding that will help you to be a web developer</h2>
            <h3>Greatstack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>

        <div className='card'>
            <img src={thumbnail5} alt="" />
            <h2>Best channel to learn coding that will help you to be a web developer</h2>
            <h3>Greatstack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>

        <div className='card'>
            <img src={thumbnail6} alt="" />
            <h2>Best channel to learn coding that will help you to be a web developer</h2>
            <h3>Greatstack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>

        <div className='card'>
            <img src={thumbnail7} alt="" />
            <h2>Best channel to learn coding that will help you to be a web developer</h2>
            <h3>Greatstack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>

        <div className='card'>
            <img src={thumbnail8} alt="" />
            <h2>Best channel to learn coding that will help you to be a web developer</h2>
            <h3>Greatstack</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        */}  
        </div>
    );
};

export default Feed;
