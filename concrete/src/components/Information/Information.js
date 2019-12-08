import React, { Fragment } from 'react'
import iconOrganization from '../../assets/organization icon.png'
import iconLocation from '../../assets/location icon.png'
import iconStar from '../../assets/star icon.png'
import iconRepositories from '../../assets/repositorie icon.png'
import iconFollowers from '../../assets/followers icon.png'

import './Information.css'



const Information = (props) => {
    const { organization, location, star, repositories, followers } = props
    return (
        <Fragment>
            <ul>
                <li className='classInformation'><img src={iconOrganization} alt=''></img> <span className='organization-name'>{organization}</span></li>
                <li className='classInformation'><img src={iconLocation} alt=''></img><span className='location-name'>{location}</span></li>
                <li className='classInformation'><img src={iconStar} alt=''></img><span className='star-count'>{star}</span></li>
                <li className='classInformation'><img src={iconRepositories} alt=''></img><span className='repositories-count'>{repositories}</span></li>
                <li className='classInformation'><img src={iconFollowers} alt=''></img><span className='followers-count'>{followers}</span></li>
            </ul>
        </Fragment>
    )
}
export default Information