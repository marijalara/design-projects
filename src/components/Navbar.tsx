import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';

const Navbar: React.FC = () => {
    const [clicked, setClicked]=useState<boolean>(false)
    
    const handleClick=() => {
        setClicked(!clicked)
    }
    return (
        <nav className='navbar'>
            <header className='header'>
                Design 
            </header>
            <ul className={clicked ? 'navMenu-active' : 'navMenu'} onClick={() => setClicked(false)}>
                <Link to='/' className='navLink'>
                    <li>Home</li>
                </Link>
                <Link to='/about' className='navLink'>
                    <li>About Us</li>
                </Link>
                <Link to='/projects' className='navLink'>
                    <li>Projects</li>
                </Link>
                <Link to='/contact' className='navLink'>
                    <li>Contact Us</li>
                </Link>
            </ul>
            <div className='mobile' onClick={handleClick}>
                {clicked ? <i><AiOutlineClose /></i> : <i><GiHamburgerMenu /></i>}
            </div>
        </nav>
    )
}

export default Navbar