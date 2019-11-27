import React, { Fragment } from 'react'
import Logo from '../../components/Logo/Logo'
import Search from '../../components/Search/Search'

import './style.css'

const Home = () => {
 return(
     <div className="Home">
         <Logo 
         font="Github-Search"
         fontSpan="text-style-1"/>
         <Search 
         />
     </div>
 )
}

export default Home


