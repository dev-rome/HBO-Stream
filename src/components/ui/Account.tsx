"use client";

import { motion, AnimatePresence } from "framer-motion";
import useHBOContext from "@/src/hooks/useHBOContext";
import AccountSideNav from "@/src/components/side-nav/AccountSideNav";

const Account = () => {
  const hboContext = useHBOContext();
  const { showAccountSideNav } = hboContext || false;

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
          <AccountSideNav />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Account;
