import React, { Fragment } from 'react'
import './Button.css'
import IconePesquisa from '../../assets/Search Icon.png'

const Button = (props) => {
    return (
        <Fragment>
        <button><img src={IconePesquisa} alt='Clique aqui' ></img></button>
        </Fragment>
    )
}

export default Button 