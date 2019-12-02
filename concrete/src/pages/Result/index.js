import React, { Fragment } from 'react'
import Nav from '../../components/Nav/Nav'
import Card from '../../components/Card/Card'
import Repo from '../../components/Repo/Repo'
import Profile from '../../components/Profile/Profile'

import './style.css'

const Result = (props) => {

    const { repos } = props.location.state
    console.log(repos)
    return (
        <Fragment>
            <div className='result'>
                <Nav />
            </div>
            <div className='result-flex'>
                <div className='result-margin'>
                   <Card/>
                </div>
                <div>
                    <ul>
                        {repos.map(i => (
                            <li key={i.id}>
                                <Repo 
                                name={i.name} 
                                description={i.description}
                                starCount={i.stargazers_count}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Result