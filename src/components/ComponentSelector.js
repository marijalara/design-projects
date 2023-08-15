import React from 'react';
import ModernKitchen from './ModernKitchen';
import ClassicBathroom from './ClassicBathroom';
import ComfyBedroom from './ComfyBedroom';
import VintageKitchen from './VintageKitchen';
import RetroBathroom from './RetroBathroom';
import OutsideBathroom from './OutsideBathroom';

const ComponentSelector = ({paramName}) => {
    switch (paramName) {
        case 'modernKitchen':
            return <ModernKitchen paramName={paramName}/>
        case 'outsideBathroom':
            return <OutsideBathroom paramName={paramName}/>
        case 'comfyBedroom':
            return <ComfyBedroom paramName={paramName}/>
        case 'vintageKitchen':
            return <VintageKitchen paramName={paramName}/>
        case 'classicBathroom':
            return <ClassicBathroom paramName={paramName}/>
        case 'retroBathroom':
            return <RetroBathroom paramName={paramName}/>
        default:
            return <div>Invalid component</div>
    }
}

export default ComponentSelector