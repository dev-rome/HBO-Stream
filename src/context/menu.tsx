"use client";

import { createContext, useState } from "react";

interface MenuContextProps {
  showSideNav: boolean;
  toggleSideNav: () => void;
}

interface MenuProviderProps {
  children: React.ReactNode;
}
// Defines a default value for the menu context
const defaultMenuContext: MenuContextProps = {
  showSideNav: false, // Default value for showing side navigation
  toggleSideNav: () => {}, // Default placeholder function for toggling side navigation
};

const MenuContext = createContext<MenuContextProps>(defaultMenuContext);

const MenuProvider = ({ children }: MenuProviderProps) => {
  const [showSideNav, setShowSideNav] = useState<boolean>(false);

  const toggleSideNav = () => {
    setShowSideNav((prevValue) => !prevValue);
  };

  return (
    <MenuContext.Provider value={{ showSideNav, toggleSideNav }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider };
export default MenuContext;
