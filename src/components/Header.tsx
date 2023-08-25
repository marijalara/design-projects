import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    let navigate=useNavigate()
    const routeChange=() => {
        let path='/contact'
        navigate(path)
    }
    const routeChangeProjects=() => {
        let path='/projects'
        navigate(path)
    }
    return (
        <div className='header-container'>
            <div className='overlay'>
            <div className='head'>
                We're Lux design company
            </div>
            <button className='button' onClick={routeChange}>
                contact us
            </button>
            <div className='body'>
                if you can dream it, we can create it
            </div>
            <p className='par'>let your home be inique and stylish</p>
            <div className='button-container'>
            <button className='button2' onClick={routeChangeProjects}>Projects</button>
            </div>
            </div>
        </div>
    )
}

export default Header