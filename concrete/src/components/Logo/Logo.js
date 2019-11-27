import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'

const Logo = (props) => {
    return (
        <Fragment>
            <Link to='/'>
                <h1 className={props.font}>Github<span className={props.fontSpan}> Search</span></h1>
            </Link>
        </Fragment>
    )
}

export default Logo