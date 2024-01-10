
import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useCursor } from '@react-three/drei';

const Player = ({nodes, materials}) => {
    
    return (
        <>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Player_1.geometry}
                material={materials.Wood_procedural_p1}
                position={[0, 0.043, 0.224]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.005}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Player_2.geometry}
                material={materials.Wood_procedural_p2}
                position={[0, 0.043, -0.224]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.005}
            />
        </>
    );
}

export default Player;