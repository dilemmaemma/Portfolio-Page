import React from 'react'
import SearchBar from './SearchBar'
import Menu from './Menu'

const Header = () => {
 return (
        <div className='navbar-container'>
          <Menu />
          <SearchBar />
        </div>
 )
}

export default Header