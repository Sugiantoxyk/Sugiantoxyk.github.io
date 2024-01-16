
import { useState } from 'react';
import { useCursor } from '@react-three/drei';
import * as THREE from 'three';

const Grid = ({position, piece, win, materials, step, index, handleClick, piecesInfo, indexSelected}) => {
    const ring = new THREE.RingGeometry(0.047, 0.05, 32);
    const circle = new THREE.CircleGeometry(0.047);
    const [isHover, setHover] = useState(false);
    useCursor(isHover);
    const hovertingPosition = Array.from(position);
    hovertingPosition[1] = 0.045;

    return (
        <>
            {isHover &&
                <mesh 
                    geometry={piecesInfo[indexSelected].geometry}
                    material={piecesInfo[indexSelected].char[0] === "D" ? materials.Translucent_wood_procedural : materials.Translucent_wood_procedural_lighter }
                    position={hovertingPosition}
                    rotation={piecesInfo[indexSelected].rotation}
                    scale={piecesInfo[indexSelected].scale}
                />
            }
            <mesh
                geometry={ring}
                material={materials.Smooth_Gold}
                position={position}
                rotation={[Math.PI/2, 0, 0]}
            >
                <mesh
                    geometry={circle}
                    material={isHover || win === 1 ? (materials.Smooth_Gold) : (materials.Wood_procedural_Table)}
                    position={[0, 0, 0]}
                    onPointerEnter={(e) => {
                        if(step === 2 && piece === ""){
                            e.stopPropagation();
                            setHover(true);
                        }
                    }}
                    onPointerLeave={() => setHover(false)}
                    onClick={(e) => {
                        if(step === 2 && piece === ""){
                            e.stopPropagation();
                            setHover(false);
                            handleClick(index);
                        }
                    }}
                />
            </mesh>
        </>
    );
}

export default Grid;