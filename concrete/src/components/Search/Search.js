import React from 'react'
import SearchIcon from '../../assets/Search Icon.png'
import { Link } from 'react-router-dom'

import './Search.css'

const Search = ({ tipo, pegarValorInput }) => {
    return (
        <div className="search">
            <input
                className='Search-Input'
                type={tipo}
                onChange={pegarValorInput}
            ></input>
            <Link to='/result'>
                <button className='button'><img className="Search-Icon" src={SearchIcon} alt='Clique aqui' ></img></button>
            </Link>
        </div>
    )
}

export default Search