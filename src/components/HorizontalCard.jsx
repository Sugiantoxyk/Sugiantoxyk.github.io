
import { motion } from 'framer-motion';

import { PingLatest } from '.';

const HorizontalCard = ({ url, alt, title, href, index }) => (
    <div className="relative h-[50vh] w-[700px] overflow-hidden cursor-pointer">
        { index === 0 && <PingLatest />}
        <a href={href} target="_blank" rel="noreferrer" draggable="false">
            <img
                src={url}
                alt={alt}
                draggable="false"
                className="absolute w-full h-full object-cover rounded-[24px]"
            />
            <div className="absolute w-full bottom-0">
                <p className="text-white p-8 text-4xl font-black">
                    {title}
                </p>
            </div>
        </a>
    </div>
  );
  
  export default HorizontalCard;