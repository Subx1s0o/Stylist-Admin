"use client";
import Icon from "@/components/features/Icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  iconId,
  label,
}: {
  href: string;
  iconId: string;
  label: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const activeClass = isActive
    ? "bg-white text-black rounded-xl"
    : "text-white";
  const iconFill = isActive ? "fill-black" : "fill-white";

  return (
    <Link
      href={href}
      className={`text-xl flex gap-3 items-center px-5 py-2 ${activeClass}`}
    >
      <span>
        <Icon id={iconId} width={32} height={32} className={iconFill} />
      </span>
      {label}
    </Link>
  );
}
