"use client";

import { createContext, useState } from "react";

interface MenuContextProps {
  showSideNav: boolean;
  showAccountSideNav: boolean;
  showSearchModal: boolean;
  toggleSideNav?: () => void;
  toggleAccountSideNav?: () => void;
  toggleSearchModal?: () => void;
}

// Defines a default value for the menu context
const defaultMenuContext: MenuContextProps = {
  showSideNav: false,
  showAccountSideNav: false,
  showSearchModal: false,
};

const MenuContext = createContext<MenuContextProps>(defaultMenuContext);

const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [showSideNav, setShowSideNav] = useState<boolean>(false);
  const [showAccountSideNav, setShowAccountSideNav] = useState<boolean>(false);
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);

  const toggleSideNav = () => {
    setShowSideNav((prevValue) => !prevValue);
  };

  const toggleAccountSideNav = () => {
    setShowAccountSideNav((prevValue) => !prevValue);
  };

  const toggleSearchModal = () => {
    setShowSearchModal((prevValue) => !prevValue);
  };

  return (
    <MenuContext.Provider
      value={{
        showSideNav,
        showAccountSideNav,
        showSearchModal,
        toggleSideNav,
        toggleAccountSideNav,
        toggleSearchModal,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider };
export default MenuContext;
