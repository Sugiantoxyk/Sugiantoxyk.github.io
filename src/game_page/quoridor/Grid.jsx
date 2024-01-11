
import { useState } from 'react';
import { useCursor } from '@react-three/drei';
import * as THREE from 'three';

const Grid = ({position, materials, index, step, canSelect}) => {
    const square = new THREE.BoxGeometry(0.05, 0.008, 0.05);
    const [isHover, setHover] = useState(false);
    useCursor(isHover);

    return (
        <mesh
            geometry={square}
            material={isHover ? materials.Hover : materials.Table}
            position={position}
            onPointerEnter={(e) => {
                if(step === 2 && canSelect) {
                    e.stopPropagation();
                    setHover(true);
                }
                // TODO DELETE
                console.log(index);
            }}
            onPointerLeave={() => setHover(false)}
        />
    );
}

export default Grid;