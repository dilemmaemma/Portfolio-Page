import React from 'react'
import '../css/footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <span>About</span>
            <span>Contact</span>
            <span><a href='http://github.com/dilemmaemma' className='redirects'>GitHub</a></span>
            <span><a href='http://linkedin.com/in/emmahtml' className='redirects'>LinkedIn</a></span>
        </div>
    )
}

export default Footer