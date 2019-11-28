import React, { Fragment } from 'react'

import './Description.css'


const Description = (props) => (
    <Fragment>
        <h2 className={props.nameClass} >Boneca Aneesa</h2>
        <h3 className={props.loginClass} >@bonecaaneesa</h3>
    </Fragment>
)

export default Description