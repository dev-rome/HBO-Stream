"use client";

import { useState } from "react";
import Image from "next/image";

export default function Login() {
  const [activeButton, setActiveButton] = useState<string>("kid");

  const handleMouseEnter = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <section className="bg-background-user">
      <div className="flex flex-col justify-between items-center h-screen">
        <div className="flex flex-col content-center items-center gap-4 mt-8">
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
          <div className="flex flex-col justify-center items-center gap-x-12">
            <Image
              src="/assets/images/pic.jpeg"
              alt="profile-image"
              width={125}
              height={125}
              className="rounded-full object-cover mb-4 cursor-pointer"
            />
            <p className="text-color-secondary">Jerome</p>
          </div>
        </div>
        <div className="flex gap-5 mb-8">
          <button
            onMouseEnter={() => handleMouseEnter("adult")}
            onFocus={() => handleMouseEnter("adult")}
            className={`bg-color-secondary text-color-primary font-semibold rounded-2xl w-32 h-9 ${
              activeButton === "adult" ? "opacity-100" : "opacity-40"
            }`}
          >
            Add Adult
          </button>
          <button
            onMouseEnter={() => handleMouseEnter("kid")}
            onFocus={() => handleMouseEnter("kid")}
            className={`bg-color-secondary text-color-primary font-semibold rounded-2xl w-32 h-9 ${
              activeButton === "kid" ? "opacity-100" : "opacity-40"
            }`}
          >
            Add Kid
          </button>
        </div>
      </div>
    </section>
  );
}
