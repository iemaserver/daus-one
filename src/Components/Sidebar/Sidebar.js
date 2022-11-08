import React from 'react';
import classes from './Sidebar.module.css'
// import Navbar from '../Header/Navbar'
import { AnimatePresence, motion } from 'framer-motion';
import { FaUsers, FaBookMedical, FaHeart, FaSyringe } from 'react-icons/fa';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import FolderZipIcon from '@mui/icons-material/FolderZip';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { NavLink, useLocation } from 'react-router-dom';
import AddLocationIcon from '@mui/icons-material/AddLocation';
// import { flexbox } from '@mui/system';

const routes = [
    {
        path: "/",
        name: "Profile",
        icon: <RememberMeIcon/>,
    },
    {
        path: "/docs",
        name: "Document Bank",
        icon: <FolderZipIcon />,
    },
    {
        path: "/rota",
        name: "Rota Management",
        icon: <PendingActionsIcon />,
    },
    {
        path: "/staffs",
        name: "Staff Bank",
        icon: <FaUsers />,
    },
    {
        path: "/locum",
        name: "Locum",
        icon: <AddLocationIcon />,
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
    // const [subMenu, setSubMenu]=useState(true);
    // const toggleSubMenu=()=> setSubMenu(!subMenu)
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
            <motion.div animate={{ width: props.isOpen ? "200px" : "45px", transition:{duration:"0.5s",type:"spring",damping:"13"} }} className={classes["sidebar"]}>
                {/* <div className={classes["top_section"]}>
                    {isOpen && <AnimatePresence> <motion.div initial="hidden" animate="show" exit="hidden" variant={showAnimation} className={classes["logo"]}>
                        <h1>ARIA</h1>
                    </motion.div></AnimatePresence>}
                    <div className={classes["bars"]} onClick={toggle}>
                        <FaBars style={{fontSize:"28px"}}/>
                    </div>
                </div> */}
                <section className={classes["routes"]}>
                    {routes.map((route) => (
                        <NavLink to={route.path} key={route.name} className={route.path===location.pathname?`${classes["active"]} ${classes["link"]}`:`${classes["link"]}`}>
                            <div className={classes["icon"]}>
                                {route.icon}
                            </div>
                            {props.isOpen && <AnimatePresence>
                                <motion.div initial="hidden" animate="show" exit="hidden" variant={showAnimation} className={classes["link_text"]}>{route.name}</motion.div>
                            </AnimatePresence>}
                            {/* {route.subRoutes && 
                            <FaArrowAltCircleDown onClick={toggleSubMenu}/>
                            }
                            {(route.subRoutes && subMenu) && route.subRoutes.map(subRoute=>(
                                <NavLink to={subRoute.path} key={subRoute.name} className={subRoute.path===location.pathname?`${classes["active"]} ${classes["link"]}`:`${classes["link"]}`}>
                                <div className={classes["icon"]}>
                                    {subRoute.icon}
                                </div>
                                {props.isOpen && <AnimatePresence>
                                    <motion.div initial="hidden" animate="show" exit="hidden" variant={showAnimation} className={classes["link_text"]}>{subRoute.name}</motion.div>
                                </AnimatePresence>}
                                </NavLink>
                            ))} */}


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
