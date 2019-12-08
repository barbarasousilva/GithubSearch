import React from 'react';
import Description from '../../components/Description/Description';
import starIcon from '../../assets/star icon.png'

import './Repo.css'

const Repo = (props) => {
    const { name, description, starCount } = props
    return (
        <div className='repo-margin'>
            <Description
                nameClass='repo-name'
                name={name}
                loginClass='repo-description'
                description={description}
            />
            <img
                src={starIcon}
                alt=''
            ></img><span className='star-count'>{starCount}</span>
        </div>
    )
}

export default Repo