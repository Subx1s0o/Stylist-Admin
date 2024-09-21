import { useState } from "react";

export default function useChangeFormat(format: "online" | "offline") {
  const [activeFormat, setActiveFormat] = useState(format);

  const changeFormat = (newFormat: "online" | "offline") => {
    if (newFormat === activeFormat) return;
    setActiveFormat(newFormat);
  };

  return {
    activeFormat,
    changeFormat,
  };
}
