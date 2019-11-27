import React, { Fragment } from 'react'
import Nav from './../../components/Nav/Nav'
import Profile from '../../components/Profile/Profile'

import './style.css'

const Result = (props) => {
    return (
        <Fragment>
            <div className="result">
                <Nav />
            </div>
            <div>
                <Profile />
            </div>
        </Fragment>



    )
}

export default Result