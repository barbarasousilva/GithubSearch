import React, { Fragment } from 'react'

import './Profile.css'

const Profile = (props) => {
    const { imageClass, avatar_url } = props
    return (
        <Fragment>
            <img
                className={imageClass}
                src={avatar_url}
                alt="">
            </img>
        </Fragment>
    )
}

export default Profile