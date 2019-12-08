import React, { Fragment } from 'react'
import Logo from '../../components/Logo/Logo'
import Search from '../../components/Search/Search'
import './Nav.css'

const Nav = (props) => {
    const { takeInputValue, click } = props
    return (
        <Fragment>
            <Logo
                font='Github-Result'
                fontSpan='Github-Result text-style-2' />
            <Search
                takeInputValue={takeInputValue}
                click={click} />
        </Fragment>
    )
}

export default Nav