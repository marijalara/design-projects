import React from 'react';
import Header from './Header';
import Reviews from './Reviews'; 
import Survey from './Survey';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <Survey />
            <Reviews />
        </div>
    )
}

export default Home