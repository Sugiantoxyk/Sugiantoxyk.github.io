
import * as THREE from 'three';

const Static = ({nodes, materials}) => {
    const rectangle = new THREE.BoxGeometry(0.05, 0.008, 0.106);
    const rod = new THREE.BoxGeometry(0.006, 0.008, 0.61);

    return (
        <>
            <group position={[0, 0.0201, 0]}>
                <mesh 
                geometry={rod}
                material={materials.Grid}
                position={[0, 0, 0.364]}
                rotation={[0, Math.PI / 2, 0]}
                />
                <mesh 
                geometry={rod}
                material={materials.Grid}
                position={[0, 0, -0.364]}
                rotation={[0, Math.PI / 2, 0]}
                />
            </group>
            <group position={[0, 0.0201, 0]}>
                {/* Player 1 Side Grids */}
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[-0.28, 0, 0.308]}
                />
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[-0.224, 0, 0.308]}
                />
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[-0.168, 0, 0.308]}
                />
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[-0.112, 0, 0.308]}
                />
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[-0.056, 0, 0.308]}
                />
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[0, 0, 0.308]}
                />
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[0.056, 0, 0.308]}
                />
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[0.112, 0, 0.308]}
                />
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[0.168, 0, 0.308]}
                />
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[0.224, 0, 0.308]}
                />
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[0.28, 0, 0.308]}
                />
                {/* Player 2 Side Grids */}
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[-0.28, 0, -0.308]}
                />
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[-0.224, 0, -0.308]}
                />
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[-0.168, 0, -0.308]}
                />
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[-0.112, 0, -0.308]}
                />
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[-0.056, 0, -0.308]}
                />
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[0, 0, -0.308]}
                />
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[0.056, 0, -0.308]}
                />
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[0.112, 0, -0.308]}
                />
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[0.168, 0, -0.308]}
                />
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[0.224, 0, -0.308]}
                />
                <mesh 
                geometry={rectangle}
                material={materials.Grid}
                position={[0.28, 0, -0.308]}
                />
            </group>
            {/* <group position={[0, 0.0201, 0]}>
                <mesh
                geometry={nodes.line_1.geometry}
                material={materials.Table}
                position={[-0.252, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.722]}
                />
                <mesh
                geometry={nodes.line_2.geometry}
                material={materials.Table}
                position={[-0.196, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.722]}
                />
                <mesh
                geometry={nodes.line_3.geometry}
                material={materials.Table}
                position={[-0.14, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.722]}
                />
                <mesh
                geometry={nodes.line_4.geometry}
                material={materials.Table}
                position={[-0.084, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.722]}
                />
                <mesh
                geometry={nodes.line_5.geometry}
                material={materials.Table}
                position={[-0.028, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.722]}
                />
                <mesh
                geometry={nodes.line_6.geometry}
                material={materials.Table}
                position={[0.028, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.722]}
                />
                <mesh
                geometry={nodes.line_7.geometry}
                material={materials.Table}
                position={[0.084, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.722]}
                />
                <mesh
                geometry={nodes.line_8.geometry}
                material={materials.Table}
                position={[0.14, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.722]}
                />
                <mesh
                geometry={nodes.line_9.geometry}
                material={materials.Table}
                position={[0.196, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.722]}
                />
                <mesh
                geometry={nodes.line_10.geometry}
                material={materials.Table}
                position={[0.252, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.722]}
                />
            </group>
            <group position={[0, 0.0201, 0]} rotation={[0, Math.PI / 2, 0]}>
                <mesh
                geometry={nodes.line_1_1.geometry}
                material={materials.Table}
                position={[-0.252, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.5]}
                />
                <mesh
                geometry={nodes.line_2_1.geometry}
                material={materials.Table}
                position={[-0.196, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.5]}
                />
                <mesh
                geometry={nodes.line_3_1.geometry}
                material={materials.Table}
                position={[-0.14, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.5]}
                />
                <mesh
                geometry={nodes.line_4_1.geometry}
                material={materials.Table}
                position={[-0.084, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.5]}
                />
                <mesh
                geometry={nodes.line_5_1.geometry}
                material={materials.Table}
                position={[-0.028, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.5]}
                />
                <mesh
                geometry={nodes.line_6_1.geometry}
                material={materials.Table}
                position={[0.028, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.5]}
                />
                <mesh
                geometry={nodes.line_7_1.geometry}
                material={materials.Table}
                position={[0.084, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.5]}
                />
                <mesh
                geometry={nodes.line_8_1.geometry}
                material={materials.Table}
                position={[0.14, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.5]}
                />
                <mesh
                geometry={nodes.line_9_1.geometry}
                material={materials.Table}
                position={[0.196, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.5]}
                />
                <mesh
                geometry={nodes.line_10_1.geometry}
                material={materials.Table}
                position={[0.252, 0, 0]}
                rotation={[0, 0, -Math.PI]}
                scale={[-0.006, 0, 0.5]}
                />
            </group> */}
        </>
    );
}

export default Static;