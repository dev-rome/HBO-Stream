"use client";

import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
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
    <header className="fixed top-0 left-0 z-10 w-full flex justify-between items-center text-color-secondary bg-[#212529] py-4 px-12">
      <div className="flex gap-5">
        <HiOutlineBars3CenterLeft
          className="text-xl cursor-pointer"
          onClick={handleOpenMenuClick}
        />
        <HiOutlineSearch
          className="text-xl cursor-pointer"
          onClick={handleOpenSearchClick}
        />
      </div>
      <Link href="/browse">
        <Image
          src="/assets/images/logo.svg"
          alt="HBO Streaming Service Logo"
          width={130}
          height={130}
        />
      </Link>
      <button onClick={handleOpenAccountClick}>
        <div className="flex items-center gap-4">
          <Image
            src="/assets/images/pic.jpeg"
            alt="User account image"
            width={25}
            height={25}
            className="rounded-full"
          />
          <p className="text-sm">Jerome</p>
        </div>
      </button>
      <Account />
      <SideNavMenu />
      <SearchModal />
    </header>
  );
};

export default Header;
