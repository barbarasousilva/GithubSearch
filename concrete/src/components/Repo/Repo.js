import React, { Fragment, Component } from 'react';
import Description from '../../components/Description/Description';
import starIcon from '../../assets/star icon.png'

import './Repo.css'

const Repo = (props) => {
    const { name, login } = props
    return (
        <div className='repo-margin'>
            <Description
                nameClass='repo-name'
                name={name}
                loginClass='repo-description'
                login={login}
            />
            <img
                src={starIcon}
                alt=''
            />
        </div>
    )
}

export default Repo