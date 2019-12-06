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
                <li><img src={iconOrganization} alt=''></img> <span>{organization}</span></li>
                <li><img src={iconLocation} alt=''></img><span>{location}</span></li>
                <li><img src={iconStar} alt=''></img><span>{star}</span></li>
                <li><img src={iconRepositories} alt=''></img>{repositories}<span></span></li>
                <li><img src={iconFollowers} alt=''></img><span>{followers}</span></li>
            </ul>
        </Fragment>
    )
}
export default Information