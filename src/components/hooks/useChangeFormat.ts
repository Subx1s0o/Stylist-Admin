import { Format } from "@/types/global.types";
import { useState } from "react";

export default function useChangeFormat(format: Format) {
  const [activeFormat, setActiveFormat] = useState(format);

  const changeFormat = (newFormat: Format) => {
    if (newFormat !== activeFormat) {
      setActiveFormat(newFormat);
    }
  };

  return {
    activeFormat,
    changeFormat,
  };
}
