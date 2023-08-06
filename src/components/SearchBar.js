import React from 'react'
import '../css/header.css'
import Search from '../images/search-btn.jpg'

const SearchBar = () => {
    return(
        <div className='topnav search-container'>
          <form className='searchbar'>
            <input type="text" placeholder="Search.." name="search" />&nbsp;&nbsp;
            <input className='search-icon' type='image' src={Search} />
          </form>
        </div>
    )
}

export default SearchBar