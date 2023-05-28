"use client";

import { createContext, useState } from "react";

interface MenuContextProps {
  showSideNav: boolean;
  showAccountSideNav: boolean;
  toggleSideNav: () => void;
  toggleAccountSideNav: () => void;
}

interface MenuProviderProps {
  children: React.ReactNode;
}
// Defines a default value for the menu context
const defaultMenuContext: MenuContextProps = {
  showSideNav: false, // Default value for showing side navigation
  showAccountSideNav: false,
  toggleSideNav: () => {}, // Default placeholder function for toggling side navigation
  toggleAccountSideNav: () => {},
};

const MenuContext = createContext<MenuContextProps>(defaultMenuContext);

const MenuProvider = ({ children }: MenuProviderProps) => {
  const [showSideNav, setShowSideNav] = useState<boolean>(false);
  const [showAccountSideNav, setShowAccountSideNav] = useState<boolean>(false);

  const toggleSideNav = () => {
    setShowSideNav((prevValue) => !prevValue);
  };

  const toggleAccountSideNav = () => {
    setShowAccountSideNav((prevValue) => !prevValue);
  };

  return (
    <MenuContext.Provider
      value={{
        showSideNav,
        showAccountSideNav,
        toggleSideNav,
        toggleAccountSideNav,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider };
export default MenuContext;
