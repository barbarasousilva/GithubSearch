import React, { Fragment } from 'react'

import './Description.css'


const Description = (props) => {
    const { nameClass, loginClass, name, login } = props
    return (

        <Fragment>
            <h2
                className={nameClass} >
                {name}
            </h2>
            <h3
                className={loginClass} >
                {login}
            </h3>
        </Fragment>
    )
}

export default Description