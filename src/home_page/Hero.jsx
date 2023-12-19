
import { motion } from 'framer-motion';

import styles from '../styles/styles';
import { ConnectionLogos } from '../components';
import { connectWithMe } from '../constants';
import { fadeIn, staggerContainer } from '../styles/motion';

const Hero = () => (
    <section id="home" className={`${styles.xPaddings} h-screen flex items-center justify-center relative select-none`}>
        <div className={`${styles.innerWidth}`}>
            <motion.div 
                className={`mx-auto ${styles.flexStart} flex-col`}
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <motion.h1 
                    className={`${styles.heroPretitle}`}
                    variants={fadeIn("up", "tween", 0.2, 1)}
                >
                    Hi, my name is
                </motion.h1>
                <motion.h1 
                    className={`${styles.heroName}`}
                    variants={fadeIn("up", "tween", 0.4, 1)}
                >
                    Sugianto
                </motion.h1>
                <motion.h1 
                    className={`${styles.heroSubtitle}`}
                    variants={fadeIn("up", "tween", 0.6, 1)}
                >
                    I'm a Tech Enthusiast on a coding journey...
                </motion.h1>
                <motion.div 
                    className="flex flex-row gap-6 py-4"
                    variants={fadeIn("up", "tween", 0.8, 1)}
                >
                    {connectWithMe.map((infos) => (
                        <ConnectionLogos {...infos} type="small"/>
                    ))}
                </motion.div>
            </motion.div>
        </div>
        {/* <div className={`${styles.innerWidth} grid grid-cols-5`}>
            <div className="col-span-3">
            
            </div>
            <div className="col-span-2">

            </div>
        </div> */}
    </section>
);

export default Hero;