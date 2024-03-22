import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "../util/useMediaQuery";

import logo from "../assets/icons/logo.png";

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
  const [proj, setProj] = useState(false);

  // console.log(matches);

  return (
    <header>
      <nav className=" bg-[#ffffff81] rounded-b-md px-4 relative mx-8 flex  justify-between items-center  font-medium md:mx-16 lg:mx-32 z-[999999]">
        <a href="/" className=" inline-block">
          <img
            src={logo.src}
            alt="Gajinkar Builders Logo"
            className=" max-w-24 p-1"
          />
        </a>
        {/*  */}
        {matches && (
          <div className=" flex gap-12 ">
            <a
              href="/"
              className=" transition-all duration-500 p-2 px-3 rounded-2xl hover:bg-blue-800 hover:text-white font-bold"
            >
              Home
            </a>
            <a
              href="/services"
              className=" transition-all duration-500 p-2 px-3 rounded-2xl hover:bg-blue-800 hover:text-white font-bold"
            >
              Services
            </a>
            <div className=" relative group">
              <button className="flex flex-row items-center w-full p-2 px-3 text-base transition-all duration-500 font-bold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none hover:bg-blue-800 hover:text-white">
                <span>Projects</span>
              </button>
              <div className="absolute z-10 hidden bg-grey-200 group-hover:block w-44">
                <div className="px-2 pt-2 pb-4 ml-4 rounded-lg bg-white shadow-lg">
                  <div className=" w-full">
                    <a
                      href="/completed-projects"
                      className=" inline-block transition-all duration-400 hover:text-blue-800"
                    >
                      Completed Project
                    </a>
                    <a
                      href="/ongoing-projects"
                      className=" inline-block transition-all duration-400 hover:text-blu-800"
                    >
                      Ongoing Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className=" relative group">
              <button className="flex flex-row items-center w-full p-2 px-3 text-base transition-all duration-500 font-bold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none hover:bg-blue-800 hover:text-white">
                <span>Properties</span>
              </button>
              <div className="absolute z-10 hidden bg-grey-200 group-hover:block w-44">
                <div className="px-2 pt-2 pb-4 ml-4 rounded-lg bg-white shadow-lg">
                  <div className=" w-full">
                    <a
                      href="/properties/for-sale"
                      className=" inline-block transition-all duration-400 hover:text-blue-800"
                    >
                      Properties for Sale
                    </a>
                    <a
                      href="/properties/for-rent"
                      className=" inline-block transition-all duration-400 hover:text-blu-800"
                    >
                      Properties for Rent
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

            <a
              href="/about"
              className=" transition-all duration-500 p-2 px-3 rounded-2xl hover:bg-blue-800 hover:text-white font-bold"
            >
              About Us
            </a>
            <a
              href="/contact"
              className=" transition-all duration-500 p-2 px-3 rounded-2xl hover:bg-blue-800 hover:text-white font-bold"
            >
              Contact Us
            </a>
            {/* <a
              href="/faqs"
              className=" transition-all duration-500 p-2 px-3 rounded-2xl hover:bg-blue-800 hover:text-white font-bold"
            >
              FAQs
            </a> */}
            <a
              href="/properties/for-sale"
              className=" transition-all duration-500 p-2 px-3 border-2 border-blue-800 rounded-2xl hover:bg-blue-800 hover:text-white font-bold"
            >
              Properties For Sale
            </a>
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
              <motion.div variants={itemMotion} className="  ">
                <AnimatePresence>
                  <motion.div
                    key="projects"
                    onClick={() => setProj((prev) => !prev)}
                  >
                    <motion.div className=" cursor-pointer">
                      Projects{" "}
                      <span className=" w-[100px] inline-block "> </span>
                    </motion.div>
                  </motion.div>
                  {proj && (
                    <motion.div
                      key="list"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,

                        transition: {
                          duration: 0.5,
                        },
                      }}
                      exit={{ opacity: 0 }}
                    >
                      <div
                        className={` flex flex-col items-start gap-2 bg-gray-200 p-2 rounded-md`}
                      >
                        <a
                          href="/completed-projects"
                          className=" hover:text-blue-800"
                        >
                          Completed Projects
                        </a>
                        <a
                          href="/ongoing-projects"
                          className=" hover:text-blue-800"
                        >
                          Ongoing Projects
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              {/* <motion.div variants={itemMotion} className="  ">
                <AnimatePresence>
                  <motion.div
                    key="projects"
                    onClick={() => setProj((prev) => !prev)}
                  >
                    <motion.div className=" cursor-pointer">
                      Properties{" "}
                      <span className=" w-[100px] inline-block "> </span>
                    </motion.div>
                  </motion.div>
                  {proj && (
                    <motion.div
                      key="list"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,

                        transition: {
                          duration: 0.5,
                        },
                      }}
                      exit={{ opacity: 0 }}
                    >
                      <div
                        className={` flex flex-col items-start gap-2 bg-gray-200 p-2 rounded-md`}
                      >
                        <a
                          href="/properties/for-sale"
                          className=" hover:text-blue-800"
                        >
                          For Sale
                        </a>
                        <a
                          href="/properties/for-rent"
                          className=" hover:text-blue-800"
                        >
                          For Rent
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div> */}

              <motion.a variants={itemMotion} href="/about">
                About Us
              </motion.a>
              <motion.a variants={itemMotion} href="/contact">
                Contact Us
              </motion.a>
              {/* <motion.a variants={itemMotion} href="/faqs">
                FAQs
              </motion.a> */}
              <motion.a
                variants={itemMotion}
                href="/properties/for-sale"
                className=" text-blue-950 hover:text-blue-50"
              >
                Properties For Sale
              </motion.a>
            </motion.div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
