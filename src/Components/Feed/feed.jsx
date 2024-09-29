import React, { useEffect, useState } from 'react'
import './feed.css' //first we link the css file to this feed page
//then we have to install this component of the app on the home page
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import { API_KEY } from '../../data'

const feed = ({category}) => {

     const [data,setData] = useState([]);

     const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?maxResults=50&videoCategoryId=${category}&key=${API_KEY}`;
        await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
     } 

     useEffect(()=>{
        fetchData();
     },[category])

/*remember that html elements inside of a JSX function has to all

    /*The <Link> tag in react allow you to turn a div into a link
        that will load a page using quickly using Reacts router instead
        of loading a whole new page reeuest from a server. resulting in
        significantly quicker load times */

  return (
    <div className="feed">
       

            
        {/*
            {data.map((item,index)=>{
                return(
                
                )
            })}
        
        */}

        <Link to={`video/20/4521`} className='card'>
            <img src={thumbnail1} alt="" />
            <h2>Best channel to learn coding that will help you to be a web developer</h2>
            <h3>Greatstack</h3>
            <p>15k views &bull; 2 days ago</p>
        </Link>

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
    

    </div>/* end of 'feed' div */



  )

}

export default feed