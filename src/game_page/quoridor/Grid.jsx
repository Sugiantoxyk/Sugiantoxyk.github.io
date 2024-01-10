

import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useCursor } from '@react-three/drei';

const Grid = ({nodes, materials}) => {
    
    return (
        <>
            <group position={[0, 0.0201, 0]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.line_1.geometry}
                material={materials.Smooth}
                position={[-0.252, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.7]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.line_2.geometry}
                material={materials.Smooth}
                position={[-0.196, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.7]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.line_3.geometry}
                material={materials.Smooth}
                position={[-0.14, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.7]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.line_4.geometry}
                material={materials.Smooth}
                position={[-0.084, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.7]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.line_5.geometry}
                material={materials.Smooth}
                position={[-0.028, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.7]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.line_6.geometry}
                material={materials.Smooth}
                position={[0.028, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.7]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.line_7.geometry}
                material={materials.Smooth}
                position={[0.084, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.7]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.line_8.geometry}
                material={materials.Smooth}
                position={[0.14, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.7]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.line_9.geometry}
                material={materials.Smooth}
                position={[0.196, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.7]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.line_10.geometry}
                material={materials.Smooth}
                position={[0.252, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.7]}
                />
            </group>
            <group position={[0, 0.0201, 0]} rotation={[0, Math.PI / 2, 0]}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.line_1_1.geometry}
                material={materials.Smooth}
                position={[-0.252, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.5]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.line_2_1.geometry}
                material={materials.Smooth}
                position={[-0.196, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.5]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.line_3_1.geometry}
                material={materials.Smooth}
                position={[-0.14, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.5]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.line_4_1.geometry}
                material={materials.Smooth}
                position={[-0.084, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.5]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.line_5_1.geometry}
                material={materials.Smooth}
                position={[-0.028, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.5]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.line_6_1.geometry}
                material={materials.Smooth}
                position={[0.028, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.5]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.line_7_1.geometry}
                material={materials.Smooth}
                position={[0.084, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.5]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.line_8_1.geometry}
                material={materials.Smooth}
                position={[0.14, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.5]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.line_9_1.geometry}
                material={materials.Smooth}
                position={[0.196, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.5]}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.line_10_1.geometry}
                material={materials.Smooth}
                position={[0.252, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.5]}
                />
            </group>
        </>
    );
}

export default Grid;