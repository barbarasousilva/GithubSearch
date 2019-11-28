import React, { Fragment } from 'react'
import Nav from './../../components/Nav/Nav'
import Profile from '../../components/Profile/Profile'
import Description from '../../components/Description/Description'

import './style.css'
import Information from '../../components/Information/Information'

const Result = (props) => {
    return (
        <Fragment>
            <div className="result">
                <Nav />
            </div>
            <div className="profile">
                <Profile
                    imageClass="user-avatar" />
                <Description
                    nameClass="user-name"
                    loginClass="user-login" />
                <Information/>
            </div>
        </Fragment>



    )
}

export default Result