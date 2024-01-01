
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import styles from '../styles/styles';

const Introduction = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["center 1", "center 0.8"],
    });
    const scaleOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.section 
            ref={ref} 
            className={`${styles.paddings} relative select-none`}
            style={{
                opacity: scaleOpacity,
            }}
        >
            <div 
                className={`${styles.innerWidth} mx-auto flex ${styles.flexCenter} flex-col pb-[25vh]`}
            >
                <span 
                    className={`${styles.introText}`}
                >
                    I'm a Computer Science enthusiast with a strong aspiration to be a Software Developer.
                </span>
            </div>
        </motion.section>
    )
};

export default Introduction;