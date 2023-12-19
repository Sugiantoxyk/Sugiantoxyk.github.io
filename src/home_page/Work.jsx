
import { motion } from 'framer-motion';

import { fadeIn, staggerContainer } from '../styles/motion';
import { WorkCard } from '../components';
import styles from '../styles/styles';
import { works } from '../constants';

const Work = () => {

    return (
        <section id="work" className={`${styles.paddings} relative select-none`}>
            <div className={`${styles.innerWidth} mx-auto flex flex-col pt-5`}>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >
                    <motion.h1 
                        className={`${styles.preTitle}`}
                        variants={fadeIn("up", "tween", 0.2, 1)}
                    >
                        Work
                    </motion.h1>
                    <motion.h1 
                        className={`${styles.mainTitle}`}
                        variants={fadeIn("up", "tween", 0.4, 1)}
                    >
                        Experience
                    </motion.h1>
                    <motion.h1 
                        className={`${styles.subTitle}`}
                        variants={fadeIn("up", "tween", 0.6, 1)}
                    >
                        Dive into my professional journey.
                    </motion.h1>
                </motion.div>
                <div className="mt-12 flex flex-col gap-12">
                    {works.map((infos, index) => (
                        <WorkCard {...infos} index={index}/>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Work;