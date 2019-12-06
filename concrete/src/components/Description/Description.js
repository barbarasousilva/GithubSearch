import React, { Fragment } from 'react'

import './Description.css'


const Description = (props) => {
    const { nameClass, loginClass, name, description } = props
    return (

        <Fragment>
            <span
                className={nameClass} >
                {name}
            </span>
            <span
                className={loginClass} >
                {description}
            </span>
        </Fragment>
    )
}

export default Description