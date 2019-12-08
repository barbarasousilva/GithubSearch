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
            error: '',
            user: {}
        }
    }

    catchValue = (event) => {
        this.setState({
            value: event.target.value
        })
    }


    search = () => {

        getUser(this.state.value)
            .then(res => {
                this.setState({
                    user: res.data,
                    error: '',
                    value: ''
                })
                this.props.history.push({
                    pathname: '/result',
                    state: {
                        user: this.state.user
                    }
                })
            }).catch(() => {
                this.setState({
                    error: 'Not found :('
                })
                this.props.history.push({
                    pathname: '/result',
                    state: {
                        error: this.state.error
                    }
                })
            })

    }


    render() {
        return (
            <div className='Home'>
                <Logo
                    font='Github-Search'
                    fontSpan='text-style-1' />
                <Search
                    takeInputValue={this.catchValue}
                    click={() =>
                        this.search(this.state.value)
                    }
                />
            </div>
        )
    }
}

export default Home


