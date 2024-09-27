import React from 'react'
import './home.css'
import Sidebar from '../../Components/Sidebar/sidebar'
/**In this code we want to import the contents of the 
 * sidebar.jsx into this page dynamically. We import it first
 * , name is Sidebar and create a custom html tag called <Sidebar/>
 */
import Feed from '../../Components/Feed/feed'

const home = ({sidebar}) => {
  return (
    <>
      <Sidebar sidebar={sidebar}/>
      <div className={`container ${sidebar?"":'large-container'}`}>
        {/*The <Feed/> tag comes from importing the page component Feed
        and inserting it into this page with the custom HTML tag called Feed */} 
        <Feed/>
      </div>
    </>
  )
}

export default home