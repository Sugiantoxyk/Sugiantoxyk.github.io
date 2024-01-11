
import { useState } from 'react';
import { useCursor } from '@react-three/drei';
import * as THREE from 'three';

const Grid = ({position, materials, index, handleClick, step, canSelect}) => {
    const square = new THREE.BoxGeometry(0.05, 0.008, 0.05);
    const [isHover, setHover] = useState(false);
    useCursor(isHover);

    return (
        <mesh
            geometry={square}
            material={canSelect ? materials.Hover : materials.Grid}
            position={position}
            onPointerEnter={(e) => {
                if(step === 2 && canSelect) {
                    e.stopPropagation();
                    setHover(true);
                }
            }}
            onPointerLeave={() => setHover(false)}
            onClick={(e) => {
                if(step === 2 && canSelect) {
                    e.stopPropagation();
                    handleClick(index);
                }
            }}
        />
    );
}

export default Grid;