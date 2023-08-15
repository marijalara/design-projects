import React from 'react';
import { allImages } from '../images';

const VintageKitchen = ({paramName}) => {
    const projectVintageKitchen=allImages.filter((image) => image.project.name === paramName)
    return (
        <div className='design-project'>
             <h3 className='title'>
                <span>/</span>Vintage Kitchen
            </h3>
            {projectVintageKitchen.map((imageItem) => (
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
            <div className='text5'>A vintage kitchen design takes inspiration from the past, often drawing from the styles and aesthetics of earlier decades, such as the 1920s, 1930s, 1940s, and 1950s. This design approach seeks to create a nostalgic and charming atmosphere that evokes a sense of history and brings back the charm of bygone eras. Here are some key features and characteristics of a vintage kitchen design:</div>
                <br />
                <ul className='modern'>
                    <li className='lista'>Retro Color Palette: Vintage kitchens often feature a color palette that reflects the hues popular during the chosen era. Pastel colors, bold primary colors, and earthy tones can help recreate the nostalgic vibe.</li>
                    <li className='lista'>Classic Cabinetry: Cabinet design is crucial in a vintage kitchen. Look for cabinets with traditional profiles, framed fronts, and ornate details. You might even find cabinets with glass doors for displaying vintage dishes and glassware.</li>
                    <li className='lista'>Vintage Appliances: Appliances designed to resemble those from the past can be a significant part of a vintage kitchen. Retro-style refrigerators, stoves, and microwaves can add authenticity to the design.</li>
                    <li className='lista'>Patterned Tiles: Tiles with intricate patterns or geometric designs can add character to the kitchen. Vintage-inspired tile backsplashes, flooring, or countertops contribute to the overall aesthetic.</li>
                    <li className='lista'>Farmhouse Sink: A farmhouse sink, also known as an apron sink, is a classic choice for a vintage kitchen. It not only adds a touch of nostalgia but also serves as a functional focal point.</li>
                    <li className='lista'>Vintage Hardware: Consider using vintage-inspired hardware for cabinet handles, knobs, and faucets. Antique brass, oil-rubbed bronze, or porcelain knobs can enhance the vintage charm.</li>
                    <li className='lista'>Open Shelving: Open shelving allows you to display vintage dishes, glassware, and kitchenware. It adds a sense of nostalgia while providing easy access to everyday items.</li>
                    <li className='lista'>Decorative Accents: Add vintage decor accents such as retro clocks, vintage posters, tin signs, and old-fashioned canisters. These small touches contribute to the overall ambiance.</li>
                    <li className='lista'> Wooden Accents: Incorporate wooden elements, such as butcher block countertops or vintage-style wooden chairs, to add warmth and a rustic feel.</li>
                    <li className='lista'> Vintage Lighting: Choose lighting fixtures that evoke the style of a specific era. Pendant lights with vintage designs or fixtures with exposed bulbs can enhance the nostalgic vibe.</li>
                    <li className='lista'> Checkered Flooring: Black-and-white checkered or patterned flooring is a hallmark of vintage kitchens. It adds a playful and timeless touch to the design.</li>
                    <li className='lista'>Displayed Collections: Vintage kitchen designs often showcase collections of vintage cookware, utensils, and dishes. These collections contribute to the nostalgic charm.</li>
                    <li className='lista'>Retro Textiles: Integrate vintage-inspired textiles like gingham tablecloths, floral curtains, and retro-style kitchen towels to enhance the overall theme.</li>
                    <li className='lista'>Curved Lines: Many vintage kitchen designs feature furniture and fixtures with soft, curved lines. Consider curved countertops, chairs, and even the profile of the cabinets.</li>
                </ul>
            </div>
        </div>
    )
}

export default VintageKitchen