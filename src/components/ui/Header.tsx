"use client";

import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import Image from "next/image";
import useHBOContext from "@/src/hooks/useHBOContext";
import Account from "@/src/components/ui/Account";
import SideNavMenu from "@/src/components/side-nav/SideNavMenu";
import SearchModal from "@/src/components/ui/SearchModal";

const Header = () => {
  const hboContext = useHBOContext();
  const { toggleSideNav, toggleAccountSideNav, toggleSearchModal } =
    hboContext || {};

  const handleOpenMenuClick = () => {
    toggleSideNav?.();
  };

  const handleOpenAccountClick = () => {
    toggleAccountSideNav?.();
  };

  const handleOpenSearchClick = () => {
    toggleSearchModal?.();
  };

  return (
    <header className="fixed top-0 left-0 z-10 w-full flex justify-between items-center text-color-secondary bg-transparent transition-colors duration-300 ease-in-out hover:bg-[#212529] py-4 px-12">
      <div className="flex gap-10">
        <HiOutlineBars3CenterLeft
          className="text-xl cursor-pointer"
          onClick={handleOpenMenuClick}
        />
        <HiOutlineSearch
          className="text-xl cursor-pointer"
          onClick={handleOpenSearchClick}
        />
      </div>
      <Image
        src="/assets/images/logo.svg"
        alt="HBO Max"
        width={130}
        height={130}
      />
      <button onClick={handleOpenAccountClick}>
        <div className="flex items-center gap-4">
          <Image
            src="/assets/images/pic.jpeg"
            alt="User account image"
            width={30}
            height={30}
            className="rounded-full"
          />
          <p>Jerome</p>
        </div>
      </button>
      <Account />
      <SideNavMenu />
      <SearchModal />
    </header>
  );
};

export default Header;
