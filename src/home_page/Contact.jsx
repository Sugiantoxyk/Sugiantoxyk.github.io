
import { motion } from 'framer-motion';

import { fadeIn, staggerContainer } from '../styles/motion';
import styles from '../styles/styles';
import { connectWithMe } from '../constants';
import { ConnectionLogos } from '../components';

function Contact() {

    return (
        <section id="contact" className={`${styles.paddings} relative select-none`}>
            <motion.div 
                className={`${styles.innerWidth} pt-5 mx-auto flex flex-col items-center`}
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <motion.h1 
                    className={`${styles.preTitle}`}
                    variants={fadeIn("up", "tween", 0.2, 1)}
                >
                    Contact
                </motion.h1>
                <motion.h1 
                    className={`${styles.mainTitle}`}
                    variants={fadeIn("up", "tween", 0.4, 1)}
                >
                    My Contact
                </motion.h1>
                <motion.h1 
                    className={`${styles.subTitle}`}
                    variants={fadeIn("up", "tween", 0.6, 1)}
                >
                    Feel free to connect with me!
                </motion.h1>
                <motion.div 
                    className="flex flex-row gap-6 py-4"
                    variants={fadeIn("up", "tween", 0.8, 1)}
                >
                    {connectWithMe.map((infos) => (
                        <ConnectionLogos {...infos}/>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
};
    

export default Contact;