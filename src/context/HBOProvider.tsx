"use client";

import { createContext, useState, useEffect } from "react";

interface HBOContextProps {
  showSideNav: boolean;
  showAccountSideNav: boolean;
  showSearchModal: boolean;
  user: string;
  toggleSideNav?: () => void;
  toggleAccountSideNav?: () => void;
  toggleSearchModal?: () => void;
  createUser?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetUser?: () => void;
}

// Defines a default value for the menu context
const defaultHBOContext: HBOContextProps = {
  showSideNav: false,
  showAccountSideNav: false,
  showSearchModal: false,
  user: "",
};

const HBOContext = createContext<HBOContextProps>(defaultHBOContext);

const HBOStreamProvider = ({ children }: { children: React.ReactNode }) => {
  const [showSideNav, setShowSideNav] = useState<boolean>(false);
  const [showAccountSideNav, setShowAccountSideNav] = useState<boolean>(false);
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    if (showSideNav || showAccountSideNav || showSearchModal) {
      document.body.style.overflowY = "hidden";
      document.querySelector("html")!.style.overflowY = "hidden";
    }

    return () => {
      document.body.style.overflowY = "auto";
      document.querySelector("html")!.style.overflowY = "auto";
    };
  }, [showAccountSideNav, showSearchModal, showSideNav]);

  const toggleSideNav = () => {
    setShowSideNav((prevValue) => !prevValue);
  };

  const toggleAccountSideNav = () => {
    setShowAccountSideNav((prevValue) => !prevValue);
  };

  const toggleSearchModal = () => {
    setShowSearchModal((prevValue) => !prevValue);
  };

  const createUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const resetUser = () => {
    setUser("");
  };

  const contextValues = {
    showSideNav,
    showAccountSideNav,
    showSearchModal,
    toggleSideNav,
    toggleAccountSideNav,
    toggleSearchModal,
    user,
    createUser,
    resetUser,
  };

  return (
    <HBOContext.Provider value={contextValues}>{children}</HBOContext.Provider>
  );
};

export { HBOStreamProvider };
export default HBOContext;
