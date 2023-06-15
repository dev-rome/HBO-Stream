"use client";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import useHBOContext from "@/src/hooks/useHBOContext";
import NavItem from "@/src/components/side-nav/NavItem";

const SideNavMenu = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");
  const hboContext = useHBOContext();
  const { showSideNav, toggleSideNav } = hboContext || {};

  const handleActiveItemClick = (item: string) => {
    setActiveItem(item);
    toggleSideNav?.();
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const navItems = [
    { title: "Home", href: "/browse" },
    { title: "Series", href: "/tv" },
    { title: "Movies", href: "/movie" },
  ];

  return (
    <AnimatePresence>
      {showSideNav && (
        <motion.nav
          className="fixed top-0 left-0 z-20 min-h-screen bg-color-primary p-11"
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <AiOutlineClose
            className="absolute top-2 left-56 text-xl text-color-secondary cursor-pointer"
            onClick={toggleSideNav}
          />
          <ul className="w-44">
            {navItems.map(({ title, href }) => (
              <NavItem
                key={title}
                title={title}
                href={href}
                activeItem={activeItem === title}
                onClick={() => handleActiveItemClick(title)}
              />
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default SideNavMenu;
