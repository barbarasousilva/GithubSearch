import React, { Fragment } from 'react'
import IconePesquisa from '../../assets/Search Icon.png'

import './Button.css'

const Button = (props) => {
    return (
        <Fragment>
        <button className='button'><img src={IconePesquisa} alt='Clique aqui' ></img></button>
        </Fragment>
    )
}

export default Button 