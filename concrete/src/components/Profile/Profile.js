import React, { Fragment } from 'react'

import './Profile.css'

const Profile = (props) => {
    const { avatar_url } = props
    return (
        <Fragment>
            <img
                className='user-avatar'
                src={avatar_url}
                alt=''>
            </img>
        </Fragment>
    )
}

export default Profile