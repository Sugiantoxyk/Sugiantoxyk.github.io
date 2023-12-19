
import { motion } from 'framer-motion';
import { useState } from 'react';

import styles from '../styles/styles';
import { navVariants, menuBackgroundVariants, menuListVariants } from '../styles/motion';
import { MenuButton } from '../components';
import { menuItems } from '../constants';

function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const handleClick = (index) => {
        setMenuOpen(!isMenuOpen);
        window.location.replace("/#"+menuItems[index].ref);
    };
    const logoClick = () => {
        if (isMenuOpen) {
            setMenuOpen(!isMenuOpen);
        }
        window.location.replace("/#"+menuItems[0].ref);
    };

    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className={`${styles.xPaddings} py-8 top-0 fixed w-[100%] select-none z-20`}
        >
            <div className="navbar-gradient absolute w-[100%] inset-0" />

            {/* Menu Section */}
            <motion.div
                className="menu-shade absolute h-screen w-[100%] inset-0 flex"
                variants={menuBackgroundVariants}
                initial={false}
                animate={isMenuOpen ? "open" : "closed"}
            />
            <motion.div 
                className="absolute h-screen w-[100%] inset-0 text-center flex"
                variants={menuListVariants}
                initial={false}
                animate={isMenuOpen ? "open" : "closed"}
            >
                <div className="m-auto">
                    {menuItems.map((infos, index) => (
                        <motion.h1
                            className={`${styles.menuTitle} menu-item`}
                            whileHover={{
                                scale: 1.2,
                                translateY: -5,
                                transition: {
                                    type: "spring",
                                }
                            }}
                            onClick={() => handleClick(index)}
                        >
                            {infos.title}
                        </motion.h1>
                    ))}
                </div>
            </motion.div>
            <div
                className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
            >
                <img
                    src="/logo.svg"
                    alt="logo"
                    draggable="false"
                    className="w-[30px] h-[30px] object-contain z-10 cursor-pointer"
                    onClick={logoClick}
                />
                <MenuButton 
                    className="w-[30px] h-[30px] object-contain z-10 cursor-pointer"
                    isOpen={isMenuOpen}
                    onClick={() => setMenuOpen(!isMenuOpen)}
                    width = "30"
                    height = "30"
                    color="#FFF"
                    strokeWidth="3"
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                />
            </div>
        </motion.nav>
    );
};

export default Navbar;