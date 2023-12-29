
import { useState } from 'react';
import { useCursor } from '@react-three/drei';
import * as THREE from 'three';

const Grid = ({position, materials, step}) => {
    const ring = new THREE.RingGeometry(0.047, 0.05, 32);
    const circle = new THREE.CircleGeometry(0.047);
    const [isHover, setHover] = useState(false);
    useCursor(isHover);
    return (
        <mesh
            geometry={ring}
            material={materials.Smooth_Gold}
            position={position}
            rotation={[Math.PI/2, 0, 0]}
        >
            <mesh
                geometry={circle}
                material={isHover ? (materials.Smooth_Gold) : (materials.Wood_procedural_Table)}
                position={[0, 0, 0]}
                onPointerEnter={(e) => {
                    if(step === 2){
                        e.stopPropagation();
                        setHover(true);
                    }
                }}
                onPointerLeave={() => setHover(false)}
            />
        </mesh>
    );
}

export default Grid;