
import { useState } from 'react';
import { useCursor } from '@react-three/drei';
import * as THREE from 'three';

const Line = ({position, rotation, hoverPosition, isEdge, nodes, materials, index, handleClick, step, canSelect}) => {
    const hoverLineEdge = new THREE.BoxGeometry(0.006, 0, 0.081); 
    const hoverLine = new THREE.BoxGeometry(0.006, 0, 0.056);

    const [isHover, setHover] = useState(false);
    useCursor(isHover);
    const hoveringPosition = Array.from(position);
    hoveringPosition[1] += 0.026;

    return (
        <>
            {isHover && 
                <mesh
                    geometry={nodes.wall_1.geometry}
                    material={materials.Translucent_Wall}
                    position={hoveringPosition}
                    scale={[0.006, 0.053, 0.106]}
                    rotation={rotation}
                />
            }
            <mesh
                geometry={isEdge ? hoverLineEdge : hoverLine }
                material={materials.Table}
                position={hoverPosition}
                rotation={rotation}
                onPointerEnter={(e) => {
                    if(step === 2 && canSelect) {
                        e.stopPropagation();
                        setHover(true);
                    }
                }}
                onPointerLeave={() => setHover(false)}
                onClick={(e) => {
                    if(step === 2 && canSelect){
                        e.stopPropagation();
                        handleClick(index);
                    }
                }}
            />
        </>
    );
}

export default Line;