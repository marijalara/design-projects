import React from 'react';
import { useParams } from 'react-router-dom';
import { allImages } from '../images';

const ModernKitchen = () => {
    const {modernKitchen}=useParams()
    
    const projectKitchen=allImages.filter((image) => image.project.name === modernKitchen)
    return (
        <div className='modern-design'>
            {projectKitchen.map((imageItem) => (
                <div key={imageItem.text}>
                    {imageItem.project && imageItem.project.images && (
                        <div>
                            {imageItem.project.images.map((image) => (
                                <div key={image.id} className='modern-container'>
                                    <img 
                                        src={image.url} 
                                        alt={image.description} 
                                        className='custom-modern'
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default ModernKitchen