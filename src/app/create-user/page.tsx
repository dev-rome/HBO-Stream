"use client";

import { useState } from "react";
import Image from "next/image";

export default function CreateUser() {
  const [activeButton, setActiveButton] = useState<string>("save");

  const handleMouseEnter = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <section className="bg-background-user">
      <div className="flex flex-col justify-between items-center h-screen">
        <div className="flex flex-col items-center gap-4 mt-8">
          <Image
            src="/assets/images/logo.svg"
            width={130}
            height={130}
            alt="HBO Max"
          />
          <span className="text-2xl font-light text-color-secondary">
            Who is Watching?
          </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center gap-x-12">
            <Image
              src="/assets/images/pic.jpeg"
              alt="profile-image"
              width={125}
              height={125}
              className="rounded-full object-cover mb-4 cursor-pointer"
            />
            <form className="flex flex-col justify-center gap-4">
              <label className="text-xs text-color-secondary">Name</label>
              <input
                type="text"
                className="w-[18.75rem] bg-transparent border-0 border-b-2 border-color-secondary outline-none caret-color-secondary text-color-secondary py-3 mb-8"
              />
            </form>
          </div>
        </div>
        <div className="flex gap-5 mb-8">
          <button
            onMouseEnter={() => handleMouseEnter("cancel")}
            onFocus={() => handleMouseEnter("cancel")}
            className={`bg-color-secondary text-color-primary uppercase font-bold rounded-2xl w-32 h-9 ${
              activeButton === "cancel" ? "opacity-100" : "opacity-40"
            }`}
          >
            Cancel
          </button>
          <button
            onMouseEnter={() => handleMouseEnter("save")}
            onFocus={() => handleMouseEnter("save")}
            className={`bg-color-secondary text-color-primary font-bold uppercase rounded-2xl w-32 h-9 ${
              activeButton === "save" ? "opacity-100" : "opacity-40"
            }`}
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
}
