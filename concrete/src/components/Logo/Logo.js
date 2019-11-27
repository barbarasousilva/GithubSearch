import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'

const Logo = (props) => {
    return (
        <Fragment>
            <Link to='/'>
                <h1 className="Github-Search">Github<span className="Github-Search text-style-1"> Search</span></h1>
            </Link>
        </Fragment>
    )
}

export default Logo