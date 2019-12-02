import React, {Component} from 'react'
import Logo from '../../components/Logo/Logo'
import Search from '../../components/Search/Search'
import { getUser, getRepos } from '../../api/users'

import './style.css'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            user: {},
            repos: {}
        }
    }

    catchValue = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    searchUser = () => {
        getUser(this.state.value).then((res) => {
            this.setState({
                user: res.data
            })
        }
        ).catch(error => console.log(error))
    }

    searchRepos = (login) => {
        getRepos(login).then((res) => {
            console.log(res)
           this.props.history.push({
                pathname: '/result',
                state: { repos: res.data }
            })
        })
    }

    render() {
        return (
            <div className='Home'>
                <Logo
                    font="Github-Search"
                    fontSpan="text-style-1"/>
                <Search
                    click={() => this.searchRepos(this.state.value)}
                    takeInputValue={this.catchValue}
                />
            </div>
        )
    }
}

export default Home


