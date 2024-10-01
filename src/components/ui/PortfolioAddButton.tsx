"use client";
import { useState } from "react";
import Icon from "../features/Icon";

import PortfolioAddModal from "../modals/Portfolio/PortfolioAddModal";
import Button from "./Button";

export default function PortfolioAddButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        variant="black"
        onClick={() => setOpen(true)}
        className="ml-auto flex gap-3"
      >
        <span>
          <Icon width={24} height={24} id="icon-plus" />
        </span>
        Додати
      </Button>
      {open && <PortfolioAddModal isOpen={open} close={() => setOpen(false)} />}
    </>
  );
}
