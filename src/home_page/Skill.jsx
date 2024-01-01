
import { motion } from 'framer-motion';

import { fadeIn, staggerContainer } from '../styles/motion';
import styles from '../styles/styles';
import { TechStackLogos } from '../components';
import { languageSkills, frameworkSkills, databaseSkills, cloudSkills, applicationSkills, otherSkills } from '../constants';

const Skill = () => {

    return (
        <section id="skills" className={`${styles.paddings} relative select-none`}>
            <motion.div 
                className={`${styles.innerWidth} mx-auto flex flex-col pb-[10vh] pt-5`}
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <div>
                    <motion.h1 
                        className={`${styles.preTitle}`}
                        variants={fadeIn("up", "tween", 0.2, 1)}
                    >
                        Skills
                    </motion.h1>
                    <motion.h1 
                        className={`${styles.mainTitle}`}
                        variants={fadeIn("up", "tween", 0.4, 1)}
                    >
                        My Skills
                    </motion.h1>
                    <motion.h1 
                        className={`${styles.subTitle}`}
                        variants={fadeIn("up", "tween", 0.6, 1)}
                    >
                        Unleashing my tech toolkits.
                    </motion.h1>
                </div>

                <div>
                    {/* 1st row */}
                    <motion.div
                        variants={fadeIn("up", "tween", 1, 0.75)}
                    >
                        <h1 className={`${styles.preTitle} py-4`}>Languages</h1>
                        <div className="flex flex-row flex-wrap gap-6">
                            {languageSkills.map((infos) => (
                                <TechStackLogos {...infos} />
                            ))}
                        </div>
                    </motion.div>
                    {/* 2nd row */}
                    <motion.div
                        variants={fadeIn("up", "tween", 1.5, 0.75)}
                    >
                        <h1 className={`${styles.preTitle} py-4`}>Libraries and Frameworks</h1>
                        <div className="flex flex-row flex-wrap gap-6">
                            {frameworkSkills.map((infos) => (
                                <TechStackLogos {...infos} />
                            ))}
                        </div>
                    </motion.div>
                    
                    {/* 3rd row */}
                    <div className="flex flex-row flex-wrap gap-x-24 md:gap-x-28">
                        <motion.div
                            variants={fadeIn("up", "tween", 2, 0.75)}
                        >
                            <h1 className={`${styles.preTitle} py-4`}>Databases</h1>
                            <div className="flex flex-row flex-wrap gap-6">
                                {databaseSkills.map((infos) => (
                                    <TechStackLogos {...infos} />
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeIn("up", "tween", 2.2, 0.75)}
                        >
                            <h1 className={`${styles.preTitle} py-4`}>Clouds</h1>
                            <div className="flex flex-row flex-wrap gap-6">
                                {cloudSkills.map((infos) => (
                                    <TechStackLogos {...infos} />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                    {/* 4th row */}
                    <div className="flex flex-row flex-wrap gap-x-24 md:gap-x-28">
                        <motion.div
                            variants={fadeIn("up", "tween", 2.5, 0.75)}
                        >
                            <h1 className={`${styles.preTitle} py-4`}>Applications</h1>
                            <div className="flex flex-row flex-wrap gap-6">
                                {applicationSkills.map((infos) => (
                                    <TechStackLogos {...infos} />
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeIn("up", "tween", 2.7, 0.75)}
                        >
                            <h1 className={`${styles.preTitle} py-4`}>Other</h1>
                            <div className="flex flex-row flex-wrap gap-6">
                                {otherSkills.map((infos) => (
                                    <TechStackLogos {...infos} />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                    
                </div>
            </motion.div>
        </section>
    )    
};

export default Skill;