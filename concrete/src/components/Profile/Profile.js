import React, { Fragment } from 'react'
import Organization from '../../assets/organization icon.png'
import Location from '../../assets/location icon.png'
import Star from '../../assets/star icon.png'
import Repositories from '../../assets/repositorie icon.png'
import Followers from '../../assets/followers icon.png'
import Aneesa from '../../assets/aneesa2.jpg'

import './Profile.css'

const Profile = (props) => (
    <div className="profile">
        <img className="user-avatar" src={Aneesa} alt=""></img>
        <h2 className="user-name" >Boneca Aneesa</h2>
        <h3 className="user-login" >@bonecaaneesa</h3>
        <ul>
            <li><img src={Organization}></img> <span>Organização</span></li>
            <li><img src={Location}></img><span>Localização</span></li>
            <li><img src={Star}></img><span>Star </span></li>
            <li><img src={Repositories}></img>Repositories<span></span></li>
            <li><img src={Followers}></img><span>Followers</span></li>
        </ul>
    </div>

)

export default Profile