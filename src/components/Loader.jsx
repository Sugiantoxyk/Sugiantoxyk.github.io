
import { Html } from "@react-three/drei";

const Loader = () => {
    return (
        <Html className="w-full flex flex-col self-center items-center">
            <span className="relative flex h-20 w-20 z-10">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dark-primary opacity-50"></span>
            </span>
        </Html>
    )
};

export default Loader;