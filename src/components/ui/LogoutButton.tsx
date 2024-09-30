"use client";
import { useState } from "react";
import Icon from "../features/Icon";
import LogoutModal from "../modals/LogoutModal";

export default function LogoutButton() {
  const [isOpen, setIsOpen] = useState(false);
  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <button
        className="text-xl flex gap-3 transition-colors duration-200 border-2 border-transparent hover:border-white rounded-xl items-center px-5 py-2 focus:bg-white focus:text-black"
        onClick={() => setIsOpen(true)}
      >
        <Icon
          id="icon-logout"
          className="fill-current"
          width={32}
          height={32}
        />
        Вихід
      </button>
      <LogoutModal isOpen={isOpen} close={close} />
    </>
  );
}
