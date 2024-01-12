
import { useState } from 'react';
import { useCursor } from '@react-three/drei';

const Piece = ({geometry, material, position, rotation, scale, handleClick, isSelected, canSelect}) => {
    const [isHover, setHover] = useState(false);
    useCursor(isHover);
    const hoverPosition = Array.from(position);
    hoverPosition[1] += 0.01;

    return (
        <mesh
            geometry={geometry}
            material={material}
            position={isHover || isSelected ? (hoverPosition) : (position)}
            rotation={rotation}
            scale={scale}
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
                    handleClick();
                }
            }}
        />
    );
}

export default Piece;