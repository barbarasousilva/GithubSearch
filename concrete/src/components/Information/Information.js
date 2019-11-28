import React, { Fragment } from 'react'
import iconOrganization from '../../assets/organization icon.png'
import iconLocation from '../../assets/location icon.png'
import iconStar from '../../assets/star icon.png'
import iconRepositories from '../../assets/repositorie icon.png'
import iconFollowers from '../../assets/followers icon.png'

import './Information.css'



const Information = (props) => {
    const {organization, location, star, repositories, followers} = props
    return (
        <Fragment>
            <ul>
                <li><img src={iconOrganization}></img> <span>{organization}</span></li>
                <li><img src={iconLocation}></img><span>{location}</span></li>
                <li><img src={iconStar}></img><span>{star}</span></li>
                <li><img src={iconRepositories}></img>{repositories}<span></span></li>
                <li><img src={iconFollowers}></img><span>{followers}</span></li>
            </ul>
        </Fragment>
    )
}
export default Information