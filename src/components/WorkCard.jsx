
import { motion } from 'framer-motion';

import { staggerContainer, fadeIn, companyVariants } from '../styles/motion';
import { TechStackLogos } from '.';

const WorkCard = ({ url, alt, techUrl, title, subTitle, texts, index }) => (
    <motion.div 
        className="grid grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
    >
        <motion.div 
            className="flex flex-col"
            variants={fadeIn("right", "tween", 0.2, 1)}
        >
            <div className="flex flex-row">
                <h2 className="relative font-semibold sm:text-[32px] text-[24px] text-white">
                    {title}
                </h2>
            </div>
            <p className="my-[12px] font-thin text-[16px] leading-[20.16px] text-white uppercase">
                {subTitle}
            </p>
            <div className="flex flex-row flex-wrap gap-4">
                {techUrl.map((infos) => (
                    <TechStackLogos {...infos}/>
                ))}
            </div>
            <div className="pt-4 flex flex-col gap-4">
                {texts.map((sentence) => (
                    <div className="flex flex-row gap-2">
                        <div className="border-2 rounded-full border-dark-primary" />
                        <p className="text-white font-thin lg:text-[18px] md:text-[18px] sm:text-[14px] text-[14px]">{sentence}</p>
                    </div>
                ))}
            </div>
        </motion.div>
        <motion.div 
            className="flex justify-center items-center"
            variants={companyVariants("right")}
        >
            <img 
                src={url}
                alt={alt}
                draggable="false"
                className="w-[50%]"
            />
        </motion.div>
    </motion.div>
);
  
export default WorkCard;