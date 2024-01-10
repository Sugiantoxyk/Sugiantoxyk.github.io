
import { useState, useEffect } from "react";

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

const useBoardTransform = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const adjustBoardForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, 0, 0];
        let rotation = [0, 0, 0];

        if(windowSize.innerWidth < 768) {
            screenScale = [4.5, 4.5, 4.5];
            screenPosition = [0, 0, 0];
        } else {
            screenScale = [6, 6, 6];
            screenPosition = [0, 0, 0];
        }

        return [screenScale, screenPosition, rotation];
    }

    return adjustBoardForScreenSize();
};

export default useBoardTransform;