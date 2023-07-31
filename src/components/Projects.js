import React, { useState } from 'react'

const Projects = () => {
    const [clicked, setClicked]=useState('All')

    const handleClickButton=(category) => {
        setClicked(category)
    }
    const allImages=[
        {url: 'https://www.thespruce.com/thmb/Y0HiB5NzQV1fknY0z-QKq-zUHRg=/4881x3305/filters:fill(auto,1)/bright-modern-white-kitchen-184844742-5b705d2946e0fb00256f722c.jpg', category: 'Kitchen'},
        {url: 'https://housely.com/wp-content/uploads/2016/02/outdoor-bathroom-the-trident-hotel-jamaica-conde-nast-traveller-26jan15-pr.jpg', category: 'Bathroom'},
        {url: 'https://besthomish.com/wp-content/uploads/2019/11/comfy-master-bedroom-design-ideas33.jpg', category: 'Bedroom'},
        {url: 'https://www.mydomaine.com/thmb/Ny3QduO7z2hYI4N4YDpEfDInlvU=/2500x1693/filters:no_upscale():max_bytes(150000):strip_icc()/ErinWilliamsonDesign-a4d2a7195d3549009112571f40834c41.jpeg', category: 'Kitchen'},
        {url: 'https://i.pinimg.com/originals/93/64/ad/9364ad552f4876c07c0dde4b6586060e.jpg', category: 'Bathroom'},
        {url: 'https://www.bigbathroomshop.co.uk/info/blog/wp-content/uploads/2014/06/vintage-bathroom-2.jpg', category: 'Bathroom'}
    ]
    const showImages=clicked=== 'All' ? allImages : allImages.filter(image=> image.category ===clicked)
    return (
        <div className='projects-container'>
            <header className='head4'>
                our projects
            </header>
            <section className='buttons'>
                <button 
                    className={clicked === 'All' ? 'active' : ''}
                    onClick={() => handleClickButton('All')}
                >
                    All
                </button>
                <button 
                    className={clicked === 'Kitchen' ? 'active' : ''}
                    onClick={() => handleClickButton('Kitchen')}
                >
                    Kitchen
                </button>
                <button 
                    className={clicked === 'Bathroom' ? 'active' : ''}
                    onClick={() => handleClickButton('Bathroom')}
                >
                    Bathroom
                </button>
                <button 
                    className={clicked === 'Bedroom' ? 'active' : ''}
                    onClick={() => handleClickButton('Bedroom')}
                >
                    Bedroom
                </button>
            </section>
            <div className='img'>
                {showImages.length > 0 ? (
                    showImages.map((image, index) => (
                        <img 
                            key={index} 
                            src={image.url} 
                            alt='images' 
                            className='custom-image'
                        />
                    ))
                ) : (
                    <p>No images</p>
                )}
            </div>
            <div className='section-center'>
                <article></article>
            </div>
        </div>
    )
}

export default Projects