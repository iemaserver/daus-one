import React, { useState } from 'react';
import classes from './Sidebar.module.css'
import { AnimatePresence, motion } from 'framer-motion';
import { FaUser, FaDollarSign, FaUserGraduate, FaUsers, FaDochub, FaBookMedical, FaHeart, FaSyringe, FaBars } from 'react-icons/fa'
import { NavLink, useLocation } from 'react-router-dom';

const routes = [
    {
        path: "/",
        name: "Profile",
        icon: <FaUser/>,
    },
    {
        path: "/users",
        name: "Finance",
        icon: <FaDollarSign />,
    },
    {
        path: "/messages",
        name: "HR",
        icon: <FaUserGraduate />,
    },
    {
        path: "/analytics",
        name: "Staff Bank",
        icon: <FaUsers />,
    },
    {
        path: "/filemanager",
        name: "Medical Tests",
        icon: <FaDochub />,
        subRoutes: [
            {
                path: "/settings/profile",
                name: "Lab Tests",
                icon: <FaBookMedical />,
            },
            {
                path: "/settings/2fa",
                name: "Cardiography",
                icon: <FaHeart />,
            },
            {
                path: "/settings/billing",
                name: "Blood Tests",
                icon: <FaSyringe />,
            },
        ],
    },
];

function Sidebar(props) {
    let location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            },
        },
    };
    return (
        <div className={classes["main-container"]}>
            <motion.div animate={{ width: isOpen ? "200px" : "45px", transition:{duration:"0.5s",type:"spring",damping:"13"} }} className={classes["sidebar"]}>
                <div className={classes["top_section"]}>
                    {isOpen && <AnimatePresence> <motion.div initial="hidden" animate="show" exit="hidden" variant={showAnimation} className={classes["logo"]}>
                        <h1>ARIA</h1>
                    </motion.div></AnimatePresence>}
                    <div className={classes["bars"]} onClick={toggle}>
                        <FaBars style={{fontSize:"28px"}}/>
                    </div>
                </div>
                <section className={classes["routes"]}>
                    {routes.map((route) => (
                        <NavLink to={route.path} key={route.name} className={route.path===location.pathname?`${classes["active"]} ${classes["link"]}`:`${classes["link"]}`}>
                            <div className={classes["icon"]}>
                                {route.icon}
                            </div>
                            {isOpen && <AnimatePresence>
                                <motion.div initial="hidden" animate="show" exit="hidden" variant={showAnimation} className={classes["link_text"]}>{route.name}</motion.div>
                            </AnimatePresence>}
                        </NavLink>
                    ))}
                </section>
            </motion.div>
            <main className={classes['main-content']}>
                {props.children}
            </main>
        </div>
    )
}

export default Sidebar
