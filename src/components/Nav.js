import React from 'react'
import {useNavigate} from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate()
    return (
        <div className='redirects'>
            <div onClick={navigate('http://github.com/delimmaemma')}>GitHub</div> {/* These are placeholders. Make sure to change them later */}
            <div onClick={navigate('http://linkedin.in/emmahtml')}>LinkedIn</div>
        </div>
    )
}

export default Nav