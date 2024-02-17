import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "../util/useMediaQuery";

import logo from "../assets/images/logo.png";

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const Header = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width:1080px)");

  // console.log(matches);

  return (
    <header>
      <nav className=" relative mx-8 flex  justify-between items-center  font-medium md:mx-16 lg:mx-32 z-[999999]">
        <div>
          <img
            src={logo.src}
            alt="Gajinkar Builders Logo"
            className=" max-w-24"
          />
        </div>
        {/*  */}
        {matches && (
          <div className=" flex gap-12">
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/projects">Projects</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
            <a href="/faqs">FAQs</a>
          </div>
        )}
        {!matches && (
          <div
            onClick={() => setToggled((prevToggled) => !prevToggled)}
            className=" space-y-1.5 cursor-pointer z-[9999]"
          >
            <motion.span
              animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
              className="block h-0.5 w-8 bg-black"
            ></motion.span>
            <motion.span
              animate={{ width: toggled ? 0 : 24 }}
              className="block h-0.5 w-6 bg-black"
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggled ? -45 : 0,
                y: toggled ? -8 : 0,
                width: toggled ? 32 : 16,
              }}
              className="block h-0.5 w-4 bg-black"
            ></motion.span>
          </div>
        )}
        {toggled && !matches && (
          <div className="fixed  flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center">
            <motion.div
              variants={navMotion}
              animate="visible"
              initial="hidden"
              className=" flex flex-col gap-14 text-lg"
            >
              <motion.a variants={itemMotion} href="/">
                Home
              </motion.a>
              <motion.a variants={itemMotion} href="/services">
                Services
              </motion.a>
              <motion.a variants={itemMotion} href="/projects">
                Projects
              </motion.a>
              <motion.a variants={itemMotion} href="/about">
                About Us
              </motion.a>
              <motion.a variants={itemMotion} href="/contact">
                Contact Us
              </motion.a>
              <motion.a variants={itemMotion} href="/faqs">
                FAQs
              </motion.a>
            </motion.div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
