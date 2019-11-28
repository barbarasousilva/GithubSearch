import React, { Fragment } from 'react'
import Aneesa from '../../assets/aneesa2.jpg'

import './Profile.css'

const Profile = (props) => (
    <Fragment>
        <img className={props.imageClass} src={Aneesa} alt=""></img>
    </Fragment>

)

export default Profile