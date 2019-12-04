import React, { Fragment } from 'react'
import Nav from '../../components/Nav/Nav'
import Card from '../../components/Card/Card'
import Repo from '../../components/Repo/Repo'
import Profile from '../../components/Profile/Profile'
import Description from '../../components/Description/Description'
import Information from '../../components/Information/Information'

import './style.css'

const Result = (props) => {

    const { repos } = props.location.state
    

    return (
        <Fragment>
            <div className='result'>
                <Nav />
            </div>
            <div className='result-flex'>
                <div className='result-margin'>
                    <Card>
                        {/* <Profile
                            avatar_url={user.avatar_url} />
                        <Description
                            name={user.name}
                            description={user.login}
                        />
                        <Information
                            organization={user.organizations_url}
                            location={user.location}
                            star={user.starred_url}
                            repositories={user.public_repos}
                            followers={user.followers_url}
                            /> */}
                    </Card>
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