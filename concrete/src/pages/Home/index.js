import React, { Component } from 'react'
import Logo from '../../components/Logo/Logo'
import Search from '../../components/Search/Search'
import { getUser } from '../../api/users'

import './style.css'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            user: {},
            repos: [],
        }
    }

    catchValue = (event) => {
        this.setState({
            value: event.target.value
        })
    }


    search = () => {
        if (this.state.value !== "") {

            getUser(this.state.value)
                .then(res => {
                    this.setState({
                        user: res.data
                    })
                    this.props.history.push({
                        pathname: "/result",
                        state: {
                            user: this.state.user
                        }
                    })
                }).catch(error => {
                    console.log('error');
                })
        }
    }


    render() {
        return (
            <div className='Home'>
                <Logo
                    font="Github-Search"
                    fontSpan="text-style-1" />
                <Search
                    takeInputValue={this.catchValue}
                    click={this.search}
                />
            </div>
        )
    }
}

export default Home


