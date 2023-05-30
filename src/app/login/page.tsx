"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ls from "local-storage";
import useMounted  from "@/src/hooks/useMounted";

interface User {
  id: string;
  name: string;
}

export default function Login() {
  const [activeButton, setActiveButton] = useState<string>("create-user");
  const router = useRouter();

  const isMounted = useMounted();
  const storedUsers = ls("users");
  const users: User[] = Array.isArray(storedUsers) ? storedUsers : [];

  const handleMouseEnter = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const handleOnClick = (id: string) => {
    ls("activeUser", id);
    router.push("/browse");
  };

  const renderUsers = () => {
    return users.map((user) => (
      <div
        key={user.id}
        className="flex flex-col justify-center items-center gap-x-12"
      >
        <Image
          src="/assets/images/pic.jpeg"
          alt="profile-image"
          width={125}
          height={125}
          className="rounded-full object-cover mb-4 cursor-pointer"
          onClick={() => handleOnClick(user.id)}
        />
        <p className="text-color-secondary">{user.name}</p>
      </div>
    ));
  };

  return (
    <section className="bg-background-main-gradient">
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
        <div className="flex justify-center items-center gap-8">
          {isMounted && renderUsers()}
        </div>
        <div className="flex gap-5 mb-8">
          <Link href="/">
            <button
              onMouseEnter={() => handleMouseEnter("cancel")}
              onFocus={() => handleMouseEnter("cancel")}
              className={`bg-color-secondary text-color-primary font-semibold rounded-2xl w-32 h-9 ${
                activeButton === "cancel" ? "opacity-100" : "opacity-40"
              }`}
            >
              Cancel
            </button>
          </Link>
          <Link href="/create-user">
            <button
              onMouseEnter={() => handleMouseEnter("create-user")}
              onFocus={() => handleMouseEnter("create-user")}
              className={`bg-color-secondary text-color-primary font-semibold rounded-2xl w-32 h-9 ${
                activeButton === "create-user" ? "opacity-100" : "opacity-40"
              }`}
            >
              Create User
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
