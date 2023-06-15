"use client";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import useHBOContext from "@/src/hooks/useHBOContext";
import NavItem from "@/src/components/side-nav/NavItem";

const AccountSideNav = () => {
  const [activeItem, setActiveItem] = useState<string>("My List");

  const hboContext = useHBOContext();
  const { toggleAccountSideNav } = hboContext || {};

  const handleActiveItemClick = (item: string) => {
    setActiveItem(item);
    toggleAccountSideNav?.();
  };

  const handleAccountClose = () => {
    toggleAccountSideNav?.();
  };

  const accountNav = [
    { title: "My List", href: "" },
    { title: "Continue Watching", href: "" },
  ];

  return (
    <nav className="bg-color-primary p-11">
      <AiOutlineClose
        className="absolute top-2 right-48 text-xl text-color-secondary cursor-pointer"
        onClick={handleAccountClose}
      />
      <ul>
        {accountNav.map(({ title, href }) => (
          <NavItem
            key={title}
            title={title}
            href={href}
            activeItem={activeItem === title}
            onClick={() => handleActiveItemClick(title)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default AccountSideNav;
