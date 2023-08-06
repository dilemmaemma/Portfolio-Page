import React from 'react'
import '../css/header.css'
import {Link, Route, Routes} from 'react-dom'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

const Menu = () => {
    return (
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
          </label>

          <ul className="menu__box">
            <li><Link to='/' className='menu__item'>Home</Link></li>
            <li><Link to='projects' className='menu__item'>Projects</Link></li>
            <li><Link to='about' className='menu__item'>About</Link></li>
            <li><Link to='contact' className='menu__item'>Contact</Link></li>
          </ul>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='projects' element={<Projects />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Routes>
        </div>
    )
}

export default Menu