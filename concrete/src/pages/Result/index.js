import React, { Fragment, Component } from 'react'
import Nav from '../../components/Nav/Nav'
import Repo from '../../components/Repo/Repo'
import Profile from '../../components/Profile/Profile'
import Description from '../../components/Description/Description'
import Information from '../../components/Information/Information'
import NotFound from '../../components/NotFound/NotFound'
import { getUser, getRepos } from '../../api/users'

import './style.css'

class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            error: '',
            repos: [],
            user: {}
        }
    }


    componentDidMount() {
        if (this.props.location.state) {
            if (this.props.location.state.user) {
                this.setState({
                    user: this.props.location.state.user
                })
                this.searchRepos(this.props.location.state.user.login)
            }
            if (this.props.location.state.error) {
                this.setState({
                    err: this.props.location.state.error
                })
            }
        }
    }

    catchValue = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    searchUser = (value) => {
        getUser(value).then(res => {
            this.setState({
                user: res.data,
                error: ''
            })
        })
            .catch((error) => {
                this.setState({
                    error: 'User not found :('
                })
            })
    }

    searchRepos = (value) => {
        getRepos(value).then(res => {
            this.setState({
                repos: res.data
            })
        })
    }

    search = () => {
        this.searchUser(this.state.value)
        this.searchRepos(this.state.value)
    }

    render() {
        const { avatar_url, name, login, company, location, followers, public_repos, following } = this.state.user
        return (
            <Fragment>
                <div className='result'>
                    <Nav
                        click={this.search}
                        takeInputValue={this.catchValue}
                        changeUser={this.changeUser} />
                </div>

                {!this.state.error ?
                    <div className='result-flex result-margin'>
                        <div>
                            <Profile
                                avatar_url={avatar_url} />
                            <Description
                                nameClass='user-name'
                                loginClass='user-login'
                                name={name}
                                description={login}
                            />
                            <Information
                                organization={company}
                                location={location}
                                star={followers}
                                repositories={public_repos}
                                followers={following}
                            />
                        </div>
                        <div className='repos-container'>
                            <ul>
                                {this.state.repos.map(i => (
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
                    : <NotFound />}
            </Fragment>
        )
    }
}

export default Result