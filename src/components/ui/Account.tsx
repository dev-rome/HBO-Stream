"use client";

import { FaPlay } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import AccountSideNav from "@/src/components/side-nav/AccountSideNav";
import useMenuContext from "@/src/hooks/useMenuContext";

const Account = () => {
  const menuContext = useMenuContext();
  const showAccountSideNav = menuContext?.showAccountSideNav || false;

  const imagesData = [
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
  ];

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <AnimatePresence>
      {showAccountSideNav && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed z-20 top-0 right-0 min-h-screen bg-[rgba(0, 0, 0, .3)] backdrop-blur-3xl flex"
        >
          <div className="p-6">
            <h2 className="text-4xl text-color-secondary mb-8">My List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {imagesData.map((imageUrl, index) => (
                <div key={index} className="relative w-[200px] h-[200px]">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={imageUrl}
                    alt="Placeholder description"
                  />
                  <div className="group absolute top-0 left-0 w-full h-full flex justify-center items-center bg-background-movie-poster opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-90">
                    <div className="flex gap-6">
                      <button className="transform translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 hover:scale-125 text-white text-xl">
                        <FaPlay />
                      </button>
                      <button className="transform translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 hover:scale-125 text-white text-2xl">
                        <AiOutlineClose />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <AccountSideNav />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Account;
