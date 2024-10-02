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
import { API_KEY, value_converter } from '../../data'
import moment from 'moment' /**the moment() function didnt work we we had to 
import moment dependency from npm (as seen in the package.json file)*/

const feed = ({category}) => {

    //please send message in upwork
     const [data,setData] = useState([]);
     console.log(data , "data123") //this line is for testing purposes when inspecting the data in google chrome console

     const fetchData = async () => {
        console.log("Inside the fetchData-=-=");
        // const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=50&videoCategoryId=0&key=${API_KEY}`;
        const videoList_url =  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=0&key=${API_KEY}`;
        await fetch(videoList_url)
        .then(response=>response.json())
        .then(data=>setData(data.items))



        console.log(data);
     } 

     useEffect(()=>{
        console.log("-=-=-=-");
        fetchData();
     },[category])

/*remember that html elements inside of a JSX function has to all

    /*The <Link> tag in react allow you to turn a div into a link
        that will load a page using quickly using Reacts router instead
        of loading a whole new page reeuest from a server. resulting in
        significantly quicker load times */

  return (
    <div className="feed">
       

            {data.map((item,index)=>{
                console.log(item , "item 44")
                return(
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{value_converter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    </Link>  
                )
            })}
            
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

    </div>/* end of 'feed' div */



  )

}

export default feed