import React from 'react'
import SearchIcon from '../../assets/Search Icon.png'

import './Search.css'

const Search = (props) => {
    const { text, takeInputValue, click } = props
    return (
        <div className='search'>
            <input
                className='Search-Input'
                type={text}
                onChange={takeInputValue}
            ></input>
            <button
                onClick={click}
                className='button'>
                <img
                    className='Search-Icon'
                    src={SearchIcon}
                    alt='Clique aqui' >
                </img>
            </button>
        </div>
    )
}

export default Search