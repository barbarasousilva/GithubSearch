import React, { Fragment, Component } from 'react';
import Description from '../../components/Description/Description';
import starIcon from '../../assets/star icon.png'

import './Repo.css'

const Repo = (props) => {
    console.log(props)
    return (
        <div className='repo-margin'>
            <Description
                nameClass='repo-name'
                loginClass='repo-description'
                nome={props.nome}
            />
            <img src={starIcon} alt=''></img>
        </div>
    )
}

export default Repo