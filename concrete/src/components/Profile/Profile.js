import React, { Fragment } from 'react'

import './Profile.css'

const Profile = (props) => {
    const { imageClass, img } = props
    return (
        <Fragment>
            <img
                className={imageClass}
                src={img}
                alt="">
            </img>
        </Fragment>
    )
}

export default Profile