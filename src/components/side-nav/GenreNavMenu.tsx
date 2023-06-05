"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import GenreNavItem from "@/src/components/side-nav/GenreNavItem";

interface GenreNavMenuProps {
  media_type: string;
  genres: any[];
}

const GenreNavMenu = ({ genres }: GenreNavMenuProps) => {
  const [activeItem, setActiveItem] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { media_type } = useParams();

  const handleActiveItemClick = (name: string) => {
    setActiveItem(name);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      buttonRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleButtonClick = () => {
    toggleDropdown();
  };

  return (
    <nav className="mt-10 px-4 lg:px-12 relative">
      <div className="relative">
        <button
          className="bg-background-movie-poster text-white py-2 px-4 rounded"
          onClick={handleButtonClick}
          ref={buttonRef}
        >
          Select Genre
        </button>
        {showDropdown && (
          <div
            ref={dropdownRef}
            className="absolute top-full left-0 bg-color-primary z-50 text-white rounded shadow max-h-60 overflow-y-auto mt-2"
            style={{ width: buttonRef.current?.offsetWidth }}
          >
            <ul className="max-w-xs mx-auto p-4">
              {genres.map(({ name, id }) => (
                <GenreNavItem
                  key={id}
                  title={name}
                  href={`/${media_type}/genre/${id}`}
                  activeItem={activeItem === name}
                  genres={genres}
                  onClick={() => handleActiveItemClick(name)}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default GenreNavMenu;
