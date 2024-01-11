
import { useState } from 'react';
import { useCursor } from '@react-three/drei';

const Piece = ({geometry, material, position, rotation, scale, handleClick, step, isSelected, canSelect}) => {
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
                if(step === 1 && canSelect) {
                    e.stopPropagation();
                    setHover(true);
                }
            }}
            onPointerLeave={() => setHover(false)}
            onClick={(e) => {
                if(step === 1 && canSelect) {
                    e.stopPropagation();
                    handleClick();
                }
            }}
        />
    );
}

export default Piece;