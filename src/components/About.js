import React from 'react';
import Cards from './Cards';

const About = () => {
    return (
        <>
        <div className='about-container'>
            <div className='paragraph-container'>
                <header className='head1'>
                    about us
                </header>
                <p className='paragraph'>
                    Welcome to Lux design company - 
                    the first online studio for interior design and decoration in Serbia. 
                    Since 2010, we have been helping families from all over Serbia, 
                    but also from countries around the world, to create a warm home 
                    from the space they live in.
                </p>
                <p className='paragraph'>
                    Over the years, we have developed a system of online communication 
                    with clients that allows us to see your space in the right way 
                    (even though we have not been physically there), to know your needs
                    and wishes, as well as the aesthetics, 
                    style and color that you want to bring into your home, and based on all that, 
                    we can offer solutions for your space 
                    within your budget.
                </p>
                <p className='paragraph'>
                    If you are overwhelmed with photos of beautiful interiors and don't know where 
                    to start or how to harmonize all these ideas and bring them into your home - 
                    we are here to help. So far, we have helped hundreds of clients from Serbia, 
                    Croatia, Slovenia, Montenegro, Bosnia and Herzegovina, Germany, Switzerland, 
                    Austria, USA, Canada and many other countries around the world.
                </p>
                <p className='paragraph'>
                    We hope to help you create the home of your dreams!
                </p>
            </div>
        </div>
        <div className='service-container'>
        <Cards />
    </div>
    </>
    )
}

export default About