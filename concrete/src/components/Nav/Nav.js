import React, { Fragment} from 'react'
import Logo from '../../components/Logo/Logo'
import Search from '../../components/Search/Search'
import './Nav.css'

const Nav = (props) => {
    return (
        <Fragment>
            <Logo 
            font="Github-Result"
            fontSpan="Github-Result text-style-2"/>
            <Search />
        </Fragment>
    )
}

export default Nav