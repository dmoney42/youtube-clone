import React from 'react'
import './navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
/*we can import logos into this code by using the import
keyword, then naming it "logo" then telling the path of
where the logo image is. Then we can use the {} to insert 
the image dynamically into our code*/
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'

const navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>

        <div className='nav-left flex-div'>
            <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
            <Link to='/'><img className='logo' src={logo} alt=""/></Link>
        </div>

        <div className="nav-middle flex-div">
            <div className=" search-box flex-div">
              <input type="text" placeholder='Search'/>
              <img src={search_icon} alt=""/>
            </div>
        </div>

        <div className="nav-right flex-div">
            <img src={upload_icon} alt=""/>
            <img src={more_icon} alt=""/>
            <img src={notification_icon} alt=""/>
            <img src={profile_icon} className='user-icon' alt=""/>
        </div>


    </nav>
  )
}

export default navbar