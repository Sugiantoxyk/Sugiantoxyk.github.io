
import { motion } from 'framer-motion';

import { fadeIn } from '../styles/motion';
import { PingLatest, TechStackLogos } from '.';

const ProjectCard = ({ id, url, alt, techUrl, title, subTitle, texts, index, active, handleClick }) => (
    <motion.div
        className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
        } flex items-center justify-center min-w-[170px] h-[620px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
        onClick={() => handleClick(id)}
        variants={fadeIn("right", "tween", index * 0.5, 0.75)}
    >
        { index === 0 ? <PingLatest /> : <></>}
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
                <div className="absolute top-0 bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.8)] rounded-[24px]">
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
                            <TechStackLogos {...infos} type="small"/>
                        ))}
                    </div>
                    <div className="pt-4 flex flex-col gap-4 invisible 2xl:visible">
                        {texts.map((sentence) => (
                            <div className="flex flex-row gap-2">
                                <div className="border-2 rounded-full border-violet-700" />
                                <p className="text-white font-thin">{sentence}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
    </motion.div>
  );
  
  export { ProjectCard };