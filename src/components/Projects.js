import React, { useState } from 'react';
import { allImages } from '../images';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [clicked, setClicked]=useState('All')
    const [selectedProject, setSelectedProject] = useState(null);

    const handleClickButton=(category) => {
        setClicked(category)
        setSelectedProject(null)
    }
    const handleImageClick=(project) => {
        setSelectedProject(project)
    }
   
    const showImages=clicked=== 'All' ? allImages : allImages.filter(image=> image.category ===clicked)
    return (
        <div className='projects-container'>
            <h2 className='head4'>
                <span>/</span>our projects
            </h2>
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
                        <Link to={`/projects/${image.project.name}`}>
                        <div className='image-container' onClick={() => handleImageClick(image.project.name)}>
                        <img 
                            key={index} 
                            src={image.url} 
                            alt='images' 
                            className='custom-image'
                        />
                        <div className='image-overlay'>
                            <div className='text1'>-{image.category}-</div>
                            <div className='text2'>{image.text}</div>
                        </div>
                        </div>
                        </Link>
                    ))
                ) : (
                    <p>No images</p>
                )}
            </div>
        </div>
    )
}

export default Projects