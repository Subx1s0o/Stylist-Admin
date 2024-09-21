import { useEffect, useRef } from "react";
import { cn } from "../utils/cn";

type FormatSwitcherProps = {
  changeFormat: (format: "online" | "offline") => void;
  activeFormat: "online" | "offline";
};

export default function FormatSwitcher({
  activeFormat,
  changeFormat,
}: FormatSwitcherProps) {
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (indicatorRef.current) {
      const activeButton = document.querySelector(
        `button[data-format="${activeFormat}"]`
      ) as HTMLButtonElement | null;
      if (activeButton) {
        const { offsetLeft, clientWidth } = activeButton;
        indicatorRef.current.style.width = `${clientWidth}px`;
        indicatorRef.current.style.transform = `translateX(${offsetLeft}px)`;
      }
    }
  }, [activeFormat]);

  return (
    <div className="relative flex gap-2">
      <div
        ref={indicatorRef}
        className="absolute bottom-0 left-0 h-full bg-white rounded-xl transition-transform duration-300 z-0"
      />
      <button
        data-format="online"
        className={cn(
          "relative p-2 text-lg transition-colors z-10",
          activeFormat === "online"
            ? "text-black"
            : "text-grey hover:text-black"
        )}
        onClick={() => changeFormat("online")}
      >
        Online
      </button>
      <button
        data-format="offline"
        className={cn(
          "relative p-2 text-lg transition-colors z-10",
          activeFormat === "offline"
            ? "text-black"
            : "text-grey hover:text-black"
        )}
        onClick={() => changeFormat("offline")}
      >
        Offline
      </button>
    </div>
  );
}
