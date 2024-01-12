


import { useState } from 'react';
import { useCursor } from '@react-three/drei';

const Wall = ({geometry, material, position, scale, rotation, index, handleClick, indexSelected, canSelect}) => {
    const [isHover, setHover] = useState(false);
    useCursor(isHover);
    const hoverPosition = Array.from(position);
    hoverPosition[1] = 0.01;

    return (
        <mesh
            geometry={geometry}
            material={material}
            position={isHover || indexSelected === index ? hoverPosition : position}
            scale={scale}
            rotation={rotation}
            onPointerEnter={(e) => {
                if(canSelect) {
                    e.stopPropagation();
                    setHover(true);
                }
            }}
            onPointerLeave={() => setHover(false)}
            onClick={(e) => {
                if(canSelect) {
                    e.stopPropagation();
                    handleClick(index);
                }
            }}
        />
    );
}

export default Wall;