import React from 'react';
import { allImages } from '../images';

const ComfyBedroom = ({paramName}) => {
    const projectComfyBedroom=allImages.filter((image) => image.project.name === paramName)
    return (
        <div className='design-project'>
             <h3 className='title'>
                <span>/</span>Comfy bedroom
            </h3>
            {projectComfyBedroom.map((imageItem) => (
                <div key={imageItem.text} className='design-container'>
                    {imageItem.project && imageItem.project.images && (
                        <div className='image-gallery'>
                            {imageItem.project.images.map((image) => (
                                <div key={image.id} className='custom-design'>
                                    <img 
                                        src={image.url} 
                                        alt={image.description} 
                                        className='image-wrapper'
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <div className='list-container'>
            <div className='text5'>A comfy bathroom design focuses on creating a warm, inviting, and cozy space where you can relax and unwind. It emphasizes comfort, functionality, and aesthetics, combining elements that make you feel at ease and pampered. Here are some key features and considerations for a comfy bathroom design:</div>
                <br />
                <ul className='modern'>
                    <li className='lista'> Warm Color Palette: Choose warm and soothing colors for the walls, tiles, and decor. Earthy tones, soft pastels, and neutrals create a calming atmosphere that contributes to the overall comfort of the space.</li>
                    <li className='lista'> Soft Lighting: Opt for soft and ambient lighting options that create a relaxing environment. Incorporate dimmable lights, sconces, pendant lights, or even chandeliers to achieve a cozy glow.</li>
                    <li className='lista'>Luxurious Materials: Use high-quality materials that add a touch of luxury and comfort. Consider materials like natural stone, marble, soft-textured tiles, and rich wood finishes for a sense of elegance.</li>
                    <li className='lista'>Plush Textiles: Integrate plush textiles such as soft towels, bath rugs, and curtains. These textiles add a tactile comfort and warmth, enhancing the cozy feeling of the bathroom.</li>
                    <li className='lista'> Freestanding Bathtub: A freestanding bathtub can be a focal point of a comfy bathroom. Choose a deep soaking tub with comfortable contours that allow you to unwind and enjoy a soothing bath.</li>
                    <li className='lista'>Heated Flooring: Heated flooring, especially in colder climates, can make a significant difference in the comfort of a bathroom. Stepping onto warm tiles in the morning enhances the overall cozy experience.</li>
                    <li className='lista'> Ample Storage: Ensure sufficient storage space for toiletries, towels, and other bathroom essentials. Well-organized storage prevents clutter and contributes to the overall comfort and functionality.</li>
                    <li className='lista'> Spa-like Accessories: Incorporate spa-like accessories such as scented candles, essential oil diffusers, and bath salts. These elements create a tranquil and relaxing environment.</li>
                    <li className='lista'>Comfortable Seating: If space allows, consider adding a comfortable seating area. A small bench or chair can provide a spot to relax, read, or prepare for the day ahead.</li>
                    <li className='lista'>Natural Elements: Integrate natural elements like indoor plants, wooden accents, and natural textures. These elements bring a sense of nature indoors and contribute to a comforting ambiance.</li>
                    <li className='lista'> Personal Touches: Add personal touches through artwork, photographs, or decor that resonate with your sense of comfort and style. These touches make the space feel uniquely yours.</li>
                    <li className='lista'>Adequate Ventilation: Ensure proper ventilation to prevent moisture-related issues and maintain a comfortable environment. Ventilation systems help keep the bathroom fresh and mold-free.</li>
                </ul>
            </div>
        </div>
    )
}

export default ComfyBedroom