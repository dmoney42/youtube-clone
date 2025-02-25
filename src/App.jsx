import React, { useState } from 'react'
import Navbar from './Components/Navbar/navbar'
/*as seen in the import above, we create something called
navbar and we can import a peice of the page
i.e. navbar otherwise called an component in react so what we can make
changes to the navbar and it will show up on all pages*/
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/home'
import Video from './Pages/Video/video'

const App = () => {
  /**THe following line is added because we want to add functionality to the top left
   menu button. When clicked, we want the left side bard to collapse and hide the words
   and only show icons and when clicked again, show the full sidebar.
   */
  const [sidebar,setSidebar] = useState(true);

  return (
    /* React allows us to create our own html tags based on the name
      as seen in the import above (i.e. navbar) */

      
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
    </div>
  )
}

export default App