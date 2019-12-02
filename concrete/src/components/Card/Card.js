import React, {Component} from 'react'
import Profile from '../../components/Profile/Profile'
import Description from '../../components/Description/Description'
import Information from '../../components/Information/Information'

const Card = () => {
    return (
        <div className="profile">
            <Profile
                imageClass="user-avatar" />
            <Description
                nameClass="user-name"
                loginClass="user-login" />
            <Information />
        </div>
    )
}

export default Card