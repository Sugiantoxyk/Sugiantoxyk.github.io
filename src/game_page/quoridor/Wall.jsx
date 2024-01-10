


import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useCursor } from '@react-three/drei';

const Wall = ({nodes, materials}) => {
    
    return (
        <group position={[0, 0.046, -0.194]}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_1.geometry}
            material={materials.Wood_procedural_wall}
            position={[-0.252, 0, -0.114]}
            scale={[0.006, 0.053, 0.106]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_2.geometry}
            material={materials.Wood_procedural_wall}
            position={[-0.196, 0, -0.114]}
            scale={[0.006, 0.053, 0.106]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_3.geometry}
            material={materials.Wood_procedural_wall}
            position={[-0.14, 0, -0.114]}
            scale={[0.006, 0.053, 0.106]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_4.geometry}
            material={materials.Wood_procedural_wall}
            position={[-0.084, 0, -0.114]}
            scale={[0.006, 0.053, 0.106]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_5.geometry}
            material={materials.Wood_procedural_wall}
            position={[-0.028, 0, -0.114]}
            scale={[0.006, 0.053, 0.106]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_6.geometry}
            material={materials.Wood_procedural_wall}
            position={[0.028, 0, -0.114]}
            scale={[0.006, 0.053, 0.106]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_7.geometry}
            material={materials.Wood_procedural_wall}
            position={[0.084, 0, -0.114]}
            scale={[0.006, 0.053, 0.106]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_8.geometry}
            material={materials.Wood_procedural_wall}
            position={[0.14, 0, -0.114]}
            scale={[0.006, 0.053, 0.106]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_9.geometry}
            material={materials.Wood_procedural_wall}
            position={[0.196, 0, -0.114]}
            scale={[0.006, 0.053, 0.106]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_10.geometry}
            material={materials.Wood_procedural_wall}
            position={[0.252, 0, -0.114]}
            scale={[0.006, 0.053, 0.106]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_11.geometry}
            material={materials.Wood_procedural_wall}
            position={[-0.252, 0, 0.5]}
            scale={[0.006, 0.053, 0.106]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_12.geometry}
            material={materials.Wood_procedural_wall}
            position={[-0.196, 0, 0.5]}
            scale={[0.006, 0.053, 0.106]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_13.geometry}
            material={materials.Wood_procedural_wall}
            position={[-0.14, 0, 0.5]}
            scale={[0.006, 0.053, 0.106]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_14.geometry}
            material={materials.Wood_procedural_wall}
            position={[-0.084, 0, 0.5]}
            scale={[0.006, 0.053, 0.106]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_15.geometry}
            material={materials.Wood_procedural_wall}
            position={[-0.028, 0, 0.5]}
            scale={[0.006, 0.053, 0.106]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_16.geometry}
            material={materials.Wood_procedural_wall}
            position={[0.028, 0, 0.5]}
            scale={[0.006, 0.053, 0.106]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_17.geometry}
            material={materials.Wood_procedural_wall}
            position={[0.084, 0, 0.5]}
            scale={[0.006, 0.053, 0.106]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_18.geometry}
            material={materials.Wood_procedural_wall}
            position={[0.14, 0, 0.5]}
            scale={[0.006, 0.053, 0.106]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_19.geometry}
            material={materials.Wood_procedural_wall}
            position={[0.196, 0, 0.5]}
            scale={[0.006, 0.053, 0.106]}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.wall_20.geometry}
            material={materials.Wood_procedural_wall}
            position={[0.252, 0, 0.5]}
            scale={[0.006, 0.053, 0.106]}
            />
        </group>
    );
}

export default Wall;