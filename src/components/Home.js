import React from 'react'
import '../css/home.css'
import CodingKitty from '../images/CodingKitty_Background.png'

const Home = () => {
    return (
        <div>
            <div className='body'>
                <img src={CodingKitty}></img>
                <h1>Hello World!</h1>
            </div>
            <footer className='footer'>
                    <div className='footer-container'>
                    <span>About</span>
                    <span>Contact</span>
                    <span><a href='http://github.com/dilemmaemma' className='redirects'>GitHub</a></span>
                    <span><a href='http://linkedin.com/in/emmahtml' className='redirects'>LinkedIn</a></span>
                </div>
            </footer>
        </div>
    )
}

export default Home