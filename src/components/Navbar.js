import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';

const Navbar = () => {
    const [clicked, setClicked]=useState(false)
    
    const handleClick=() => {
        setClicked(!clicked)
    }
    return (
        <nav>
            <header className='header'>
                Design 
            </header>
            <div>
                <ul className={clicked ? 'navMenu active' : 'navMenu'}>
                    <li>
                        <Link to='/' className='navLink'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about' className='navLink'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/projects' className='navLink'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='navLink'>Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div className='mobile' onClick={handleClick}>
                <i>{clicked ? <AiOutlineClose /> : <GiHamburgerMenu />}</i>
            </div>
        
        </nav>
    )
}

export default Navbar