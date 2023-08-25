import React from 'react';
import { allImages } from '../images';

interface PropsRetroBathroom {
    paramName: string
}

const RetroBathroom: React.FC<PropsRetroBathroom> = ({paramName}) => {
    const projectRetroBathroom=allImages.filter((image) => image.project.name === paramName)
    return (
        <div className='design-project'>
             <h3 className='title'>
                <span>/</span>Retro Bathroom
            </h3>
            {projectRetroBathroom.map((imageItem) => (
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
            <div className='text5'>A retro bathroom design draws inspiration from the styles and aesthetics of past decades, typically from the mid-20th century. It's all about capturing the charm and nostalgia of a specific era while infusing it with modern functionality. Retro bathrooms often evoke a sense of fun, vibrancy, and personality. Here are some key features and characteristics of a retro bathroom design:</div>
                <br />
                <ul className='modern'>
                    <li className='lista'>Colorful and Bold Palette: Retro bathrooms are known for their vibrant and bold color palettes. Think bright hues like turquoise, pink, mint green, and sunny yellow. These colors can be used on walls, tiles, fixtures, and accessories to create a lively atmosphere.</li>
                    <li className='lista'> Playful Patterns: Patterns play a significant role in retro bathrooms. Look for bold geometric designs, checkerboard patterns, polka dots, and even whimsical prints that were popular during the chosen era.</li>
                    <li className='lista'>Vintage Fixtures: Select fixtures that are reminiscent of the era you're aiming to recreate. Pedestal sinks, clawfoot tubs, and chrome faucets with cross handles are common choices. Don't forget about vintage-inspired towel bars and toilet paper holders.</li>
                    <li className='lista'> Pastel Tiles: Pastel-colored tiles in mint green, soft pink, and pale blue can be used on walls, countertops, and even floors. Subway tiles with colored grout or patterned tiles are also popular choices.</li>
                    <li className='lista'>Freestanding Bathtubs: A freestanding bathtub with a retro silhouette, such as a clawfoot tub or a tub with curved edges, adds a touch of nostalgia to the bathroom.</li>
                    <li className='lista'>Retro Accessories: Incorporate retro accessories like vintage-inspired mirrors, wall art, and decorative items. Old-fashioned perfume bottles, antique radios, and framed advertisements can lend authenticity to the design.</li>
                    <li className='lista'> Vinyl Flooring: Vinyl flooring that mimics the patterns and colors of the era can be a practical and stylish choice. Checkerboard or tile patterns are classic retro options.</li>
                    <li className='lista'> Mid-Century Modern Influences: Mid-century modern design elements, characterized by clean lines and organic shapes, can be integrated into a retro bathroom. Consider furniture pieces with tapered legs and minimalist aesthetics.</li>
                    <li className='lista'> Pop Culture References: Incorporate pop culture references from the chosen era, such as iconic movie posters, vintage advertisements, or album covers, to enhance the retro vibe.</li>
                    <li className='lista'>Unique Lighting Fixtures: Retro bathrooms often feature distinctive lighting fixtures, such as starburst chandeliers, globe pendant lights, or sconces with atomic-era designs.</li>
                    <li className='lista'>Vintage Wallpapers: Consider using wallpapers with retro patterns like atomic motifs, boomerangs, or bold floral prints to add character to the space.</li>
                    <li className='lista'>Rounded Shapes: Opt for fixtures and elements with rounded edges and curves, such as circular mirrors, curved vanity tops, and rounded bathtub designs.</li>
                    <li className='lista'>Art Deco Influences: Incorporate Art Deco elements, such as mirrored accents, geometric patterns, and metallic finishes, to capture the glamour of the 1920s and 1930s.</li>
                    <li className='lista'> Playful Accents: Add playful and kitschy accents like rubber duckies, vintage signs, or retro artwork to evoke a sense of whimsy and lightheartedness.</li>
                </ul>
            </div>
        </div>
    )
}

export default RetroBathroom