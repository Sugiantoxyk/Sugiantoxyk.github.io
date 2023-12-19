
import { motion, useMotionValue, useTransform } from 'framer-motion';

import { fadeIn, staggerContainer } from '../styles/motion';
import styles from '../styles/styles';
import { Button } from '../components';

function Resume() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(
        y,
        [-0.5, 0.5],
        ["15deg", "-15deg"]
    );
      const rotateY = useTransform(
        x,
        [-0.5, 0.5],
        ["-15deg", "15deg"]
    );

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
    
        const width = rect.width;
        const height = rect.height;
    
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
    
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
    
        x.set(xPct);
        y.set(yPct);
      };
    
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const resumeRef = "/Sugianto_resume.pdf";

    return (
        <section id="resume" className={`${styles.paddings} relative select-none`}>
            <motion.div
                className={`${styles.innerWidth} mx-auto pt-5`}
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <motion.h1 
                    className={`${styles.preTitle}`}
                    variants={fadeIn("up", "tween", 0.2, 1)}
                >
                    Resume
                </motion.h1>
                <div className="grid grid-cols-2">
                    <div className="flex flex-col">
                        <motion.h1 
                            className={`${styles.mainTitle}`}
                            variants={fadeIn("up", "tween", 0.4, 1)}    
                        >
                            My Resume
                        </motion.h1>
                        <motion.h1 
                            className={`${styles.subTitle}`}
                            variants={fadeIn("up", "tween", 0.6, 1)}
                        >
                            Explore my journey on my resume.
                        </motion.h1>
                        <motion.div 
                            className="pt-8"
                            variants={fadeIn("up", "tween", 0.8, 1)}
                        >
                            <Button text="View Resume" href={resumeRef}/>
                        </motion.div>
                    </div>
                    <div className="flex justify-center">
                        <motion.div 
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            whileHover={{
                                scale: 1.05,
                            }}
                            transition={{
                                ease: 'easeOut',
                            }}
                        >
                            <a href={resumeRef} target="_blank" rel="noreferrer" draggable="false">
                                <motion.img 
                                    src="/resume.jpg" 
                                    alt="resume"
                                    draggable="false"
                                    className="w-[50vh] rounded-[40px]"
                                    style={{
                                        rotateY,
                                        rotateX,
                                        transformStyle: "preserve-3d",
                                        transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                                    }}
                                    variants={fadeIn("left", "tween", 1, 1)}
                                />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
};
    

export default Resume;