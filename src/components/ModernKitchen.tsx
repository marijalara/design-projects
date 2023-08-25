import React from 'react';
import { allImages } from '../images';

interface PropsModernKitchen {
    paramName: string
}

const ModernKitchen: React.FC<PropsModernKitchen> = ({paramName}) => {
    const projectKitchen=allImages.filter((image) => image.project.name === paramName)
    return (
        <div className='design-project'>
            <h3 className='title'>
                <span>/</span>Modern Kitchen
            </h3>
            {projectKitchen.map((imageItem) => (
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
            <div className='text5'>A modern kitchen is a style of kitchen design that embraces contemporary aesthetics, functionality, and technological advancements. Modern kitchens are characterized by clean lines, minimalistic design, and innovative features. Here are some key features and characteristics of modern kitchen design:</div>
                <br />
                <ul className='modern'>
                    <li className='lista'>Sleek and Minimalistic Design: Modern kitchens often feature clean lines, smooth surfaces, and a minimalist approach to design. The focus is on simplicity and functionality.</li>
                    <li className='lista'>Neutral Color Palettes: Modern kitchens typically use neutral color palettes, such as whites, grays, and blacks. These colors create a sense of openness and a clean, uncluttered look.</li>
                    <li className='lista'>Open and Spacious Layouts: Modern kitchen designs often prioritize an open layout that integrates the kitchen with other living spaces, creating a sense of spaciousness and fluidity.</li>
                    <li className='lista'>Innovative Materials: Modern kitchens make use of innovative and high-quality materials, such as stainless steel, glass, concrete, and natural stone. These materials contribute to the sleek and contemporary aesthetic.</li>
                    <li className='lista'>Minimal Cabinet Hardware: Cabinet doors and drawers in modern kitchens often feature hidden or minimalistic hardware, such as handleless cabinets or simple, discreet pulls.</li>
                    <li className='lista'>Functional Storage Solutions: Modern kitchens emphasize efficient storage solutions to keep the space organized and clutter-free. This may include pull-out shelves, deep drawers, and concealed storage options.</li>
                    <li className='lista'>High-Tech Appliances: Modern kitchens often incorporate advanced kitchen appliances and technology. This could include smart appliances, touch-screen displays, built-in ovens, induction cooktops, and energy-efficient solutions.</li>
                    <li className='lista'>Ample Lighting: Modern kitchens require ample lighting to highlight the clean lines and provide functionality. This can include recessed lighting, pendant lights, under-cabinet lighting, and large windows to maximize natural light.</li>
                    <li className='lista'>Minimal Decor: Decor in modern kitchens is often kept to a minimum, with the focus on functional elements. However, a few carefully selected decorative accents can add personality to the space.</li>
                    <li className='lista'>Integrated Appliances: Many modern kitchens opt for integrated or built-in appliances that seamlessly blend into the cabinetry and overall design.</li>
                    <li className='lista'>Island and Breakfast Bar: Islands and breakfast bars are common features in modern kitchens, offering additional workspace, storage, and a place for socializing.</li>
                    <li className='lista'>Contrasting Textures: To add visual interest, modern kitchens may incorporate contrasting textures, such as combining smooth surfaces with textured materials like wood or stone.</li>
                </ul>
            </div>
        </div>
    )
}

export default ModernKitchen