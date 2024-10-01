import NavLink from "../NavLink";

export default function Navigation() {
  return (
    <nav className="flex flex-col gap-4">
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

      <NavLink
        href="/dashboard/portfolio"
        iconId="icon-gallery"
        label="Галерея"
      />
    </nav>
  );
}
