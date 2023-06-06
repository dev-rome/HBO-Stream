"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ActiveButton from "@/src/components/ActiveButton";

function Home() {
  const [activeButton, setActiveButton] = useState<string>("Sign-up");

  const handleButtonActive = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <motion.section
      className="relative bg-background-main-image bg-center bg-cover bg-no-repeat h-screen"
      variants={variants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <div className="absolute inset-0 bg-black opacity-50 w-full h-full"></div>
      <div className="absolute z-10 top-1/4 pl-4 md:pl-12">
        <motion.h1
          className="max-w-2xl text-4xl md:text-6xl leading-tight md:leading-snug text-color-secondary font-bold mb-2"
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.7 }}
        >
          Unlimited Movies, TV Shows, and More!
        </motion.h1>
        <motion.p
          className="text-2xl text-color-secondary mb-5"
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, ease: "easeIn", delay: 1.4 }}
        >
          Watch anywhere. Cancel anytime.
        </motion.p>
        <motion.div
          className="flex gap-5"
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, ease: "easeIn", delay: 2.1 }}
        >
          <ActiveButton
            buttonName="Sign-in"
            href="/login"
            activeButton={activeButton}
            handleMouseEnter={handleButtonActive}
            handleFocus={handleButtonActive}
          />
          <ActiveButton
            buttonName="Sign-up"
            href="/create-user"
            activeButton={activeButton}
            handleMouseEnter={handleButtonActive}
            handleFocus={handleButtonActive}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Home;
