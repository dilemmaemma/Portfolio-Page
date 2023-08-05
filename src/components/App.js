import React from 'react'
import '../css/App.css';
import '../css/header.css'
import Search from '../images/search-btn.jpg'

function App() {

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
          </label>

          <ul className="menu__box">
            <li><a className="menu__item" href="#">Home</a></li>
            <li><a className="menu__item" href="#">Projects</a></li>
            <li><a className="menu__item" href="#">About</a></li>
            <li><a className="menu__item" href="#">Contact</a></li>
          </ul>
        </div>
        <div className='topnav search-container'>
          <form className='searchbar'>
            <input type="text" placeholder="Search.." name="search" />&nbsp;&nbsp;
            <input className='search-icon' type='image' src={Search} />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default App;
