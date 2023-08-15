import React from 'react';
import { allImages } from '../images';

const ClassicBathroom = ({paramName}) => {
    const projectClassicBathroom=allImages.filter((image) => image.project.name === paramName)
    return (
        <div className='design-project'>
             <h3 className='title'>
                <span>/</span>Classic Bathroom
            </h3>
            {projectClassicBathroom.map((imageItem) => (
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
            <div className='text5'>A classic bathroom design is characterized by its timeless elegance, refined aesthetics, and attention to detail. It draws inspiration from traditional and historical styles, often evoking a sense of luxury and sophistication. Here are some key features and characteristics of a classic bathroom design:</div>
                <br />
                <ul className='modern'>
                    <li className='lista'> Neutral Color Palette: Classic bathrooms often feature a neutral color palette with shades of white, beige, cream, and soft pastels. These colors create a clean and calming atmosphere.</li>
                    <li className='lista'> Elegant Fixtures: High-quality and intricately designed fixtures are a hallmark of classic bathrooms. Think of clawfoot tubs, pedestal sinks, and traditional faucets with cross handles.</li>
                    <li className='lista'> Intricate Tilework: Tilework plays a significant role in a classic bathroom design. Look for ceramic or marble tiles with intricate patterns, such as herringbone, basketweave, or subway tiles arranged in a classic pattern.</li>
                    <li className='lista'>Freestanding Bathtub: A freestanding bathtub is a focal point in a classic bathroom. Clawfoot tubs, slipper tubs, and roll-top tubs add a touch of luxury and old-world charm.</li>
                    <li className='lista'>Ornate Mirrors and Frames: Choose mirrors with decorative frames, such as gilded or carved designs. These mirrors add elegance and contribute to the classic aesthetic.</li>
                    <li className='lista'>Rich Materials: Classic bathrooms often incorporate rich and luxurious materials, such as marble, granite, and polished wood. These materials add depth and sophistication to the space.</li>
                    <li className='lista'>Chandeliers and Sconces: Elegant lighting fixtures, including chandeliers and wall sconces, add a touch of glamour and provide soft, warm illumination.</li>
                    <li className='lista'>Wainscoting and Paneling: Wainscoting and beadboard paneling on walls can create a sense of architectural detail and lend a traditional feel to the bathroom.</li>
                    <li className='lista'>Traditional Cabinetry: Cabinetry with raised panels, decorative molding, and intricate hardware contributes to the classic design. Wooden vanities with a rich finish are common.</li>
                    <li className='lista'>Vintage Accents: Incorporate vintage-style accessories, such as perfume bottles, antique vases, and ornamental trays, to enhance the classic ambiance.</li>
                    <li className='lista'>Frequent use of Symmetry: Classic bathroom designs often follow a symmetrical layout, with fixtures and elements placed in a balanced manner.</li>
                    <li className='lista'>Elegant Flooring: Opt for flooring materials like marble, ceramic, or patterned tiles that align with the classic style. Heated flooring is a modern comfort that can also be integrated.</li>
                    <li className='lista'>Timeless Patterns: Classic bathrooms may include timeless patterns like damask, toile, or florals in textiles, wallpapers, and even shower curtains.</li>
                    <li className='lista'>Crown Molding: Crown molding adds a touch of elegance to the upper edges of walls and complements the overall traditional look.</li>
                    <li className='lista'>Vintage-Inspired Hardware: Use vintage-style hardware for faucets, showerheads, towel bars, and other fixtures to maintain the classic theme.</li>
                </ul>
            </div>
        </div>
    )
}

export default ClassicBathroom