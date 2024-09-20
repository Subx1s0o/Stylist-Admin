import Icon from "@/components/features/Icon";
import NavLink from "../NavLink";

export default function Navigation() {
  return (
    <nav>
      <div className="px-5 mb-4">
        <h2 className="text-xl flex gap-3 items-center">
          <span>
            <Icon
              className="fill-white"
              id="icon-services"
              width={32}
              height={32}
            />
          </span>
          Послуги
        </h2>
      </div>
      <div className="flex flex-col gap-2 pl-16 mb-5">
        <NavLink
          href="/dashboard/services/style"
          iconId="icon-style"
          label="Стиль"
        />
        <NavLink
          href="/dashboard/services/makeup"
          iconId="icon-makeup"
          label="Візаж"
        />
      </div>

      <NavLink
        href="/dashboard/gallery"
        iconId="icon-gallery"
        label="Галерея"
      />
    </nav>
  );
}
