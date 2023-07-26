import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    let navigate=useNavigate()
    const routeChange=() => {
        let path=`/contact`
        navigate(path)
    }
    return (
        <div className='header-container'>
            <div className='head'>
                We're Lux design company
            </div>
            <button className='button' onClick={routeChange}>
                contact us
            </button>
        
        </div>
    )
}

export default Header