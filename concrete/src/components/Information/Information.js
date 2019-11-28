import React, { Fragment } from 'react'
import Organization from '../../assets/organization icon.png'
import Location from '../../assets/location icon.png'
import Star from '../../assets/star icon.png'
import Repositories from '../../assets/repositorie icon.png'
import Followers from '../../assets/followers icon.png'

import './Information.css'



const Information = (props) => (
    <Fragment>
        <ul>
            <li><img src={Organization}></img> <span>Organização</span></li>
            <li><img src={Location}></img><span>Localização</span></li>
            <li><img src={Star}></img><span>Star </span></li>
            <li><img src={Repositories}></img>Repositories<span></span></li>
            <li><img src={Followers}></img><span>Followers</span></li>
        </ul>
    </Fragment>
)
export default Information