
import { useState } from 'react';
import { useCursor } from '@react-three/drei';
import * as THREE from 'three';

const Grid = ({position, nodes, materials, index, handleClick, canSelect, playerTurn}) => {
    const square = new THREE.BoxGeometry(0.05, 0.008, 0.05);

    const [isHover, setHover] = useState(false);
    useCursor(isHover);
    const hoveringPosition = Array.from(position);
    hoveringPosition[1] += 0.0249;

    return (
        <>
            {isHover && 
                <mesh
                    geometry={nodes.Player_1.geometry}
                    material={playerTurn === 1 ? materials.Translucent_P1 : materials.Translucent_P2 }
                    position={hoveringPosition}
                    scale={0.005}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
            }
            <mesh
                geometry={square}
                material={canSelect ? materials.Hover : materials.Grid}
                position={position}
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
                        setHover(false);
                        handleClick(index);
                    }
                }}
            />
        </>

    );
}

export default Grid;