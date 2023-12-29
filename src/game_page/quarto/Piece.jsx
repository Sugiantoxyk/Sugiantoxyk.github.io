
import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useCursor } from '@react-three/drei';

const Piece = ({geometry, material, position, rotation, scale, step}) => {
    const ref = useRef();
    const [isHover, setHover] = useState(false);
    useCursor(isHover);
    useFrame((state, delta) => {
        if(isHover === true) {
            ref.current.rotation.y = ref.current.rotation.y += delta;
        } else {
            ref.current.rotation.y = rotation[2];
        }
    });
    return (
        <mesh
            ref={ref}
            geometry={geometry}
            material={material}
            position={position}
            rotation={rotation}
            scale={(isHover ? scale.map(x => x * 1.1) : scale)}
            onPointerEnter={(e) => {
                if(step === 1) {
                    e.stopPropagation();
                    setHover(true);
                }
            }}
            onPointerLeave={() => setHover(false)}
        />
    );
}

export default Piece;