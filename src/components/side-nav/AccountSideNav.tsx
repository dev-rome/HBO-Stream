"use client";

import { useState } from "react";
import useMenuContext from "@/src/hooks/useMenuContext";
import NavItem from "@/src/components/side-nav/NavItem";

const AccountSideNav = () => {
  const [activeItem, setActiveItem] = useState<string>("My List");

  const hboContext = useMenuContext();
  const toggleAccountSideNav = hboContext?.toggleAccountSideNav || (() => {});

  const handleActiveItemClick = (item: string) => {
    setActiveItem(item);
    toggleAccountSideNav?.();
  };

  const accountNavTop = [
    { title: "My List", href: "/" },
    { title: "Continue Watching", href: "" },
  ];

  const accountNavMiddle = [
    { title: "Account", href: "" },
    { title: "Billing Information", href: "" },
    { title: "Manage Devices", href: "" },
    { title: "Parental Controls", href: "" },
    { title: "Notifications", href: "" },
  ];

  const accountNavBottom = [
    { title: "Switch Profiles", href: "" },
    { title: "Help", href: "" },
    { title: "Sign Out", href: "" },
  ];

  return (
    <nav className="bg-color-primary p-11">
      <ul>
        {accountNavTop.map(({ title, href }) => (
          <NavItem
            key={title}
            title={title}
            href={href}
            activeItem={activeItem === title}
            onClick={() => handleActiveItemClick(title)}
          />
        ))}
      </ul>
      <hr className="border-t-2 border-gray-200 my-5" />
      <ul>
        {accountNavMiddle.map(({ title, href }) => (
          <NavItem
            key={title}
            title={title}
            href={href}
            activeItem={activeItem === title}
            onClick={() => handleActiveItemClick(title)}
          />
        ))}
      </ul>
      <hr className="border-t-2 border-gray-200 my-5" />
      <ul>
        {accountNavBottom.map(({ title, href }) => (
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
