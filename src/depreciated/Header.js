import React from 'react'
import SearchBar from '../components/SearchBar'
import '../css/header.css'

const Header = () => {
    return (
        <div className='navbar-container'>
            <span><a href='http://github.com/dilemmaemma' className='redirect'>GitHub</a></span>
            <span><a href='http://linkedin.com/in/emmahtml' className='redirect'>LinkedIn</a></span>
            <SearchBar />
        </div>
    )
}

export default Header