"use client";

import { createContext, useState } from "react";

interface HBOContextProps {
  showSideNav: boolean;
  showAccountSideNav: boolean;
  showSearchModal: boolean;
  toggleSideNav?: () => void;
  toggleAccountSideNav?: () => void;
  toggleSearchModal?: () => void;
}

// Defines a default value for the menu context
const defaultHBOContext: HBOContextProps = {
  showSideNav: false,
  showAccountSideNav: false,
  showSearchModal: false,
};

const HBOContext = createContext<HBOContextProps>(defaultHBOContext);

const HBOStreamProvider = ({ children }: { children: React.ReactNode }) => {
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
    <HBOContext.Provider
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
    </HBOContext.Provider>
  );
};

export { HBOStreamProvider };
export default HBOContext;
