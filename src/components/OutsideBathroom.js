import React from 'react';
import { allImages } from '../images';

const OutsideBathroom = ({paramName}) => {
    const projectOutsideBathroom=allImages.filter((image) => image.project.name === paramName)
    return (
        <div className='design-project'>
             <h3 className='title'>
                <span>/</span>Outside Bathroom
            </h3>
            {projectOutsideBathroom.map((imageItem) => (
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
            <div className='text5'>An outdoor bathroom design is a unique and innovative concept that brings the comfort and convenience of an indoor bathroom to an outdoor setting. It offers a refreshing and luxurious experience, allowing you to enjoy nature while maintaining privacy and functionality. Here are some key aspects and considerations of an outside bathroom design:</div>
                <br />
                <ul className='modern'>
                    <li className='lista'> Location and Privacy: Choose a suitable location for your outdoor bathroom that offers both convenience and privacy. It could be near a pool, garden, or in a secluded area of your property. Consider natural barriers, screens, or partitions to maintain privacy.</li>
                    <li className='lista'>Nature Integration: One of the highlights of an outdoor bathroom is the opportunity to connect with nature. Incorporate elements like plants, natural stones, and water features to create a soothing and tranquil atmosphere.</li>
                    <li className='lista'>Materials and Durability: Select materials that are resistant to outdoor elements, such as moisture, sunlight, and temperature fluctuations. Durable materials like stone, concrete, and weather-resistant wood are commonly used for outdoor bathrooms.</li>
                    <li className='lista'>Plumbing and Drainage: Proper plumbing and drainage are essential for an outdoor bathroom. Consult with professionals to ensure proper water supply, drainage, and waste disposal to prevent water pooling and other issues.</li>
                    <li className='lista'> Fixtures and Accessories: Choose fixtures and accessories that can withstand outdoor conditions. Stainless steel or rust-resistant materials are often used for faucets, sinks, and showerheads. Incorporate storage solutions to keep toiletries organized.</li>
                    <li className='lista'>Shelter and Shade: Consider providing shelter or shade to protect the bathroom from rain and harsh sunlight. This could be achieved through pergolas, awnings, or other roofing structures.</li>
                    <li className='lista'>Lighting: Strategically place lighting fixtures to ensure visibility during the day and night. Use energy-efficient outdoor lighting options to enhance the ambiance and safety.</li>
                    <li className='lista'> Flooring: Opt for slip-resistant and durable flooring materials. Natural stones, textured tiles, or composite decking can provide a safe and comfortable surface for walking.</li>
                    <li className='lista'> Ventilation: Ensure proper ventilation to prevent humidity buildup and moisture-related issues. Incorporate windows, vents, or open-air designs to promote air circulation.</li>
                    <li className='lista'>Comfort and Relaxation: Add elements that enhance the comfort and relaxation experience. Consider features like an outdoor bathtub, rain shower, lounge area, or even a fireplace for colder months.</li>
                    <li className='lista'>Permits and Regulations: Check local building codes and regulations before starting your outdoor bathroom project. Permits may be required for certain modifications or constructions.</li>
                    <li className='lista'> Maintenance: Outdoor bathrooms require regular maintenance to keep them clean and functional. Regularly clean surfaces, check for leaks, and perform upkeep tasks to ensure a pleasant experience.</li>
                </ul>
            </div>
        </div>
    )
}

export default OutsideBathroom