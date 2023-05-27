"use client";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import SideNavItem from "@/src/components/side-nav/SideNavItem";
import useMenuContext from "@/src/hooks/useMenuContext";

const SideNavMenu = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");
  // Extracting showSideNav and toggleSideNav values from the menu context
  const { showSideNav, toggleSideNav } = useMenuContext() || {};

  const handleActiveItemClick = (item: string) => {
    setActiveItem(item);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  // Define the top and bottom items for the navigation menu.
  const navItemsTop = [
    { title: "Home", href: "/" },
    { title: "Series", href: "/" },
    { title: "Movies", href: "/" },
    { title: "Originals", href: "/" },
    { title: "Just Added", href: "/" },
    { title: "Last Chance", href: "/" },
    { title: "Coming Soon", href: "/" },
    { title: "Trending Now", href: "/" },
  ];

  const navItemsBottom = [
    { title: "Action", href: "/" },
    { title: "Animation", href: "/" },
    { title: "Comedy", href: "/" },
    { title: "Crime", href: "/" },
    { title: "Documentaries", href: "/" },
    { title: "Drama", href: "/" },
    { title: "Fantasy & Sci-Fi", href: "/" },
    { title: "Horror", href: "/" },
    { title: "International", href: "/" },
  ];

  return (
    <AnimatePresence>
      {showSideNav && (
        <motion.nav
          className="absolute top-0 left-0 z-20 min-h-screen bg-[#212529] p-11"
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <AiOutlineClose
            className="absolute top-2 left-56 text-xl text-[#f8f9fa] cursor-pointer"
            onClick={toggleSideNav}
          />
          <ul className="w-44">
            {navItemsTop.map(({ title, href }) => (
              <SideNavItem
                key={title}
                title={title}
                href={href}
                activeItem={activeItem === title}
                onClick={() => handleActiveItemClick(title)}
              />
            ))}
          </ul>
          <hr className="border-t-2 border-gray-200 my-5" />
          <ul className="w-44">
            {navItemsBottom.map(({ title, href }) => (
              <SideNavItem
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
