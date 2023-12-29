
import { motion } from "framer-motion";

const ConnectionLogos = ({ url, alt, href, type="large" }) => (
  <a href={href} target="_blank" rel="noreferrer" draggable="false" >
    <motion.img 
      src={url} 
      alt={alt} 
      draggable="false" 
      className={
        type === "large" ? (
          `h-[50px] w-[50px] connection-logo`
        ) : (
          `h-[40px] w-[40px] connection-logo`
        )
      }
      whileHover={{
        scale: 1.1,
      }}
    />
  </a>
);

export default ConnectionLogos;