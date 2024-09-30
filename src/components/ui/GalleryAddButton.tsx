"use client";
import { useState } from "react";
import Icon from "../features/Icon";

import dynamic from "next/dynamic";
import Button from "./Button";

const GalleryModal = dynamic(() => import("../modals/Gallery/GalleryModal"), {
  ssr: false,
});

export default function GalleryAddButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        variant="black"
        onClick={() => setIsOpen(true)}
        className="ml-auto flex gap-3"
      >
        <span>
          <Icon width={24} height={24} id="icon-plus" />
        </span>
        Додати
      </Button>
      {isOpen && (
        <GalleryModal isOpen={isOpen} close={() => setIsOpen(false)} />
      )}
    </>
  );
}
