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
                <div className='footer-info'>
                    <span>Emma is a web designer with a specialization <br/>
                          in React, learning from Bloom Institute of Technology. <br/>
                          She has experience working with HTML, CSS, JavaScript, <br/>
                          Node.js, React.js, Redux.js, Cypress, Postman API. <br/>
                          She hopes to utilize her expertise to work in strict <br/>
                          React development and establish a place for herself in <br/>
                          front-end web development. </span>
                    <span>Email: emmahtml@gmail.com &nbsp;<a href='mailto:emmahtml@gmail.com'>Send Email</a><br/>
                          Phone: 682-587-7957 &nbsp;<a href='tel:9366625774'>Call Now</a></span> {/* Update with actual email when one is made */}
                </div>
            </footer>
        </div>
    )
}

export default Home