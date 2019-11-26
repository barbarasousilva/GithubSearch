import React, { Fragment } from 'react'
import Logo from '../../components/Logo/Logo'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

import './style.css'

const Home = () => {
 return(
     <div className="Home">
         <Logo />
         <Input />
         <Button />
     </div>
 )
}

export default Home


