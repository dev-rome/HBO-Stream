"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import ls from "local-storage";
import useHBOContext from "@/src/hooks/useHBOContext";
import ActiveButton from "@/src/components/ActiveButton";

interface User {
  id: string;
  name: string;
  myListID: string[];
}

function CreateUser() {
  const [activeButton, setActiveButton] = useState<string>("Save");

  const hboContext = useHBOContext();
  const {
    user: newUser = "",
    createUser = () => {},
    resetUser = () => {},
  } = hboContext || {};

  const router = useRouter();

  const handleSaveUserClick = () => {
    let user;
    let users: User[] = [];
    // Get users from localStorage
    const storedUsers = ls("users");
    // Check if users exist in localStorage
    if (Array.isArray(storedUsers) && storedUsers.length > 0) {
      users = storedUsers;
    }

    user = {
      id: uuidv4(),
      name: newUser,
      myListID: [],
    };

    users.push(user);
    ls("users", users);
    resetUser();
    router.push("/login");
  };

  const handleButtonActive = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    createUser(e);
  };

  return (
    <section className="bg-background-main-gradient">
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
                value={newUser}
                onChange={handleOnChange}
                className="w-[18.75rem] bg-transparent border-0 border-b-2 border-color-secondary outline-none caret-color-secondary text-color-secondary py-3 mb-8"
              />
            </form>
          </div>
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
            buttonName="Save"
            activeButton={activeButton}
            handleMouseEnter={handleButtonActive}
            handleFocus={handleButtonActive}
            onClick={handleSaveUserClick}
          />
        </div>
      </div>
    </section>
  );
}

export default CreateUser;
