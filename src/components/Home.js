import React from 'react';
import Header from './Header';
import Reviews from './Reviews'; 

const Home = () => {
    return (
        <div>
            <Header />
            <div className='reviews'>
                Reviews
            </div>
            <Reviews />
        </div>
    )
}

export default Home