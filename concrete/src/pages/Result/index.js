import React, { Fragment } from 'react'
import Nav from './../../components/Nav/Nav'
import Card from '../../components/Card/Card'


import './style.css'

const Result = (props) => {
    return (
        <Fragment>
            <div className="result">
                <Nav />
            </div>
            <div>
                <Card/>
            </div>
        </Fragment>
    )
}

export default Result