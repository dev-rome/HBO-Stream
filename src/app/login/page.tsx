"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ls from "local-storage";
import useMounted from "@/src/hooks/useMounted";
import ActiveButton from "@/src/components/ActiveButton";

interface User {
  id: string;
  name: string;
}

function Login() {
  const [activeButton, setActiveButton] = useState<string>("Create-user");
  const router = useRouter();

  const isMounted = useMounted();
  const storedUsers = ls("users");
  const users: User[] = Array.isArray(storedUsers) ? storedUsers : [];

  const handleButtonActive = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const handleUserSelection = (id: string) => {
    ls("activeUser", id);
    router.push("/browse");
  };

  const renderUsers = () => {
    return users.map((user) => (
      <div
        key={user.id}
        className="flex flex-col justify-center items-center gap-x-12"
      >
        <button onClick={() => handleUserSelection(user.id)}>
          <Image
            src="/assets/images/pic.jpeg"
            alt="profile-image"
            width={125}
            height={125}
            className="rounded-full object-cover mb-4 cursor-pointer"
          />
        </button>
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
          <ActiveButton
            buttonName="Cancel"
            href="/"
            activeButton={activeButton}
            handleMouseEnter={handleButtonActive}
            handleFocus={handleButtonActive}
          />
          <ActiveButton
            buttonName="Create-user"
            href="/create-user"
            activeButton={activeButton}
            handleMouseEnter={handleButtonActive}
            handleFocus={handleButtonActive}
          />
        </div>
      </div>
    </section>
  );
}

export default Login;
