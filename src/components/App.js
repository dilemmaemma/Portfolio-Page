import React from 'react'
import '../css/App.css';
import '../css/header.css'
import '../css/home.css'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'

function App() {

  return (
    <div>
      <nav className='navbar'>
        <Header />
      </nav>
      <div className='body'>
        <Home />
      </div>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
