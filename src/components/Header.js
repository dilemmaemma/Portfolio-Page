import React from 'react'
import SearchBar from './SearchBar'
import Menu from './Menu'
import Nav from './Nav'

const Header = () => {
    return (
        <div className='navbar-container'>
          <Menu />
          <SearchBar />
          <Nav />
        </div>
    )
}

export default Header