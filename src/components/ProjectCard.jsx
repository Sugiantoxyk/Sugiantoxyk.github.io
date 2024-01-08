
import { motion } from 'framer-motion';

import { staggerContainer, fadeIn } from '../styles/motion';
import { PingLatest, TechStackLogos, Button } from '.';

const ProjectCard = ({ id, url, alt, techUrl, title, subTitle, texts, link="", index, active, handleClick }) => (
    <motion.div
        className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
        } flex items-center justify-center min-w-[170px] h-[620px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
        onClick={() => handleClick(id)}
        variants={fadeIn("right", "tween", index * 0.5, 0.75)}
    >
        { index === 0 && <PingLatest />}
        <img
            src={url}
            alt={alt}
            draggable="false"
            className="absolute w-full h-full object-cover rounded-[24px]"
        />
            {active !== id ? (
                <div className="absolute h-full w-full flex flex-row lg:items-end justify-center items-center bg-[rgba(0,0,0,0.3)] rounded-[24px]">
                    <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute lg:p-8 lg:[writing-mode:vertical-lr] lg:rotate-180">
                        {title}
                    </h3>
                </div>
            ) : (
                <motion.div 
                    className="absolute top-0 bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.8)] rounded-[24px]"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                >
                    <motion.div className="flex flex-row" variants={fadeIn("up", "tween", 0.2, 1)}>
                        <h2 className="relative font-semibold sm:text-[32px] text-[24px] text-white">
                            {title}
                        </h2>
                    </motion.div>
                    <motion.p className="my-[12px] font-thin text-[16px] leading-[20.16px] text-white uppercase" variants={fadeIn("up", "tween", 0.4, 1)}>
                        {subTitle}
                    </motion.p>
                    <motion.div className="flex flex-row flex-wrap gap-4" variants={fadeIn("up", "tween", 0.6, 1)}>
                        {techUrl.map((infos) => (
                            <TechStackLogos {...infos} type="small"/>
                        ))}
                    </motion.div>
                    <motion.div 
                        className="pt-4 flex-col gap-4 hidden 2xl:flex"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                    >
                        {texts.map((sentence, i) => (
                            <motion.div className="flex flex-row gap-2" variants={fadeIn("right", "tween", 0.2 * (i+1) + 1, 1)}>
                                <div className="border-2 rounded-full border-dark-primary" />
                                <p className="text-white font-thin">{sentence}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                    {
                        link !== "" &&
                        <motion.div 
                            className="pt-8"
                            variants={fadeIn("up", "tween", 0.8, 1)}
                        >
                            <Button text="Video" href={link} type={3}/>
                        </motion.div>
                    }
                </motion.div>
            )}
    </motion.div>
  );
  
  export default ProjectCard;