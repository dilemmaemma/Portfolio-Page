import React from 'react'
import '../css/App.css';
import '../css/header.css'
import '../css/footer.css'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import SearchBar from './SearchBar';

function App() {

  return (
    <>
      <header>
        <nav className='navbar'>
          <div className="hamburger-menu navbar-container">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>

            <ul className="menu__box">
              <nav>
                <li><Link to='/' className='menu__item'>Home</Link></li>
                <li><Link to='projects' className='menu__item'>Projects</Link></li>
                <li><Link to='about' className='menu__item'>About</Link></li>
                <li><Link to='contact' className='menu__item'>Contact</Link></li>
              </nav>
            </ul>
              <span></span>
              <span><a href='http://github.com/dilemmaemma' className='redirect child1'>GitHub</a></span>
              <span><a href='http://linkedin.com/in/emmahtml' className='redirect child2'>LinkedIn</a></span>
              <span><a href='https://app.codesignal.com/profile/emmahtml' className='redirect child3'>CodeSignal</a></span>
              <SearchBar />
          </div>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='projects' element={<Projects />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
