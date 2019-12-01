import React from 'react'
import SearchIcon from '../../assets/Search Icon.png'
import { Link } from 'react-router-dom'

import './Search.css'

const Search = (props) => {
    const { text, takeInputValue, click } = props
    return (
        <div className="search">
            <input
                className='Search-Input'
                type={text}
                onChange={takeInputValue}
            ></input>
            {/* <Link to='/result'>  */}
            <button
                onClick={click}
                className='button'>
                <img
                    className="Search-Icon"
                    src={SearchIcon}
                    alt='Clique aqui' >
                </img>
            </button>
            {/* </Link> */}
        </div>
    )
}

export default Search