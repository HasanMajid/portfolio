import "./navbar.scss";
import { motion } from "framer-motion";

function Navbar() {
    return (
        <nav className="navbar">
            {/* Sidebar */}
            <div className="wrapper">
                <span>Hasan Majid</span>
                <motion.div
                    className="box"
                    initial={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1 }}
                    // animate={{ opacity: 1, scale: 1, y: 10, boxShadow: "3px 2px 5px whitesmoke" }}
                    whileHover={{
                        opacity: 1,
                        scale: 1,
                        y: 10,
                        boxShadow: "3px 2px 5px whitesmoke",
                    }}
                ></motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    transition={{ duration: 2 }}
                    whileInView={{ opacity: 1, scale: 1, y: 10 }}
                    className="social"
                >
                    <a href="#">
                        <motion.img
                            whileHover={{ boxShadow: "0 0 8px whitesmoke" }}
                            src="/linkedin-icon.png"
                        />
                    </a>
                    <a href="#">
                        <motion.img
                            whileHover={{ boxShadow: "0 0 8px whitesmoke" }}
                            id="github-icon"
                            src="/github-icon.png"
                        />
                    </a>
                </motion.div>
            </div>
        </nav>
    );
}

export default Navbar;
