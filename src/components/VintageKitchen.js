import React from 'react';
import { useParams } from 'react-router-dom';
import { allImages } from '../images';

const VintageKitchen = () => {
    const {vintageKitchen}=useParams()
    
    const projectOutsideBathroom=allImages.filter((image) => image.project.name === vintageKitchen)
    return (
        <div className='modern-design'>
            {projectOutsideBathroom.map((imageItem) => (
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

export default VintageKitchen