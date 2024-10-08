
import React from 'react'
import './sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const sidebar = ({sidebar,category,setCategory}) => {

    //Have you write any code of https?

    //const [categories, SetCategories] = useDa one secone I need to commit it git
 

  return (
    /*as seen in the line below we had to use the ` character to create the dynamic classes
    not the ' character */
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`} >
        <div className="shortcut-links">

            <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                <img src={home} alt="" /><p className={`${category===0 ? "active-menu-sidebar":""}`}>Home</p>
            </div>
 
            <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                <img src={game_icon} alt="" /><p className={`${category=== 20 ? "active-menu-sidebar":""}`}>Gaming</p>
            </div>
            
            <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                <img src={automobiles} alt="" /><p className={`${category===2 ? "active-menu-sidebar":""}`}>Automobiles</p>
            </div>
            
            <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                <img src={sports} alt="" /><p className={`${category=== 17 ? "active-menu-sidebar":""}`}>Sports</p>
            </div>
            
            <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                <img src={entertainment} alt="" /><p className={`${category=== 24 ? "active-menu-sidebar":""}`}>Entertainment</p>
            </div>
            
            <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                <img src={tech} alt="" /><p className={`${category=== 28 ? "active-menu-sidebar":""}`}>Technology</p>
            </div>
            
            <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                <img src={music} alt="" /><p className={`${category=== 10 ? "active-menu-sidebar":""}`}>Music</p>
            </div>
            
            <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                <img src={blogs} alt="" /><p className={`${category=== 22 ? "active-menu-sidebar":""}`}>Blogs</p>
            </div>
            
            <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                <img src={news} alt="" /><p className={`${category===25 ? "active-menu-sidebar":""}`}>News</p>
            </div>

            <hr/>
                       
        </div>

        <div className="subscribed-list">
            <h3>Subscribed</h3>

            <div className="side-link">
                <img src={jack} alt=""/><p>PewDiePie</p>
            </div>

            <div className="side-link">
                <img src={simon} alt=""/><p>Mr Beast</p>
            </div>

            <div className="side-link">
                <img src={tom} alt=""/><p>Justin Bieber</p>
            </div>

            <div className="side-link">
                <img src={megan} alt=""/><p>5-Minute Crafts</p>
            </div>

            <div className="side-link">
                <img src={cameron} alt=""/><p>Nas Daily</p>
            </div>

        </div>

    </div>
  )
}

export default sidebar


