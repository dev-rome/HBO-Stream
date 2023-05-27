"use client";

import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import Image from "next/image";
import useMenuContext from "@/src/hooks/useMenuContext";

const Header = () => {
  // Extracting toggleSideNav values from the menu context
  const { toggleSideNav } = useMenuContext() || {};
  // Invokes the toggleSideNav function if it exists or true
  const handleOpenMenuClick = () => {
    toggleSideNav?.();
  };

  return (
    <header className="fixed top-0 left-0 z-10 w-full flex justify-between items-center text-[#f8f9fa] bg-transparent transition-colors duration-300 ease-in-out hover:bg-[#212529] py-4 px-12">
      <div className="flex gap-10">
        <HiOutlineBars3CenterLeft
          className="cursor-pointer"
          onClick={handleOpenMenuClick}
        />
        <HiOutlineSearch className="icon" />
      </div>
      <Image
        src="/assets/images/logo.svg"
        alt="HBO Max"
        width={130}
        height={130}
      />
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
    </header>
  );
};

export default Header;
