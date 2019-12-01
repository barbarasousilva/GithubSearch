import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'

const Logo = (props) => {
    const { font, fontSpan } = props
    return (
        <Fragment>
            <Link to='/'>
                <h1
                    className={font}>
                    Github
                    <span
                        className={fontSpan}>
                        Search
                    </span>
                </h1>
            </Link>
        </Fragment>
    )
}

export default Logo