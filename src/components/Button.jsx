import { motion } from 'framer-motion';

import styles from '../styles/styles';

const Button = ({text, href="", type=1, handleClick=()=>{}}) => {
  if (type === 1 || type === 3) {
    return (
      <div className="">
        <a href={href} target="_blank" rel="noreferrer" draggable="false" >
          <motion.button
            className={`${type === 1 ? (styles.button1) : (styles.button3)} group relative overflow-hidden`}
            whileTap={{
              scale: 0.95,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-dark-secondary to-indigo-600 translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300" />
            <span className="relative z-10">
              {text}
            </span>
          </motion.button>
        </a>
      </div>
    )
  } else if (type === 2) {
    return (
      <div className="">
        <a href={href} target="_blank" rel="noreferrer" draggable="false" >
          <motion.button
            className={`${styles.button2}`}
            whileTap={{
              scale: 0.95,
            }}
            whileHover={{
              backgroundColor: "#9333ea",
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            {text}
          </motion.button>
        </a>
      </div>
    )
  }
};
  
  export default Button;