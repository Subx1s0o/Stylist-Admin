import NavLink from "../NavLink";

export default function Settings() {
  return (
    <div className="flex flex-col gap-4">
      <NavLink
        href="/dashboard/change-password"
        iconId="icon-settings"
        label="Змінити пароль"
      />
      <NavLink href="/dashboard/logout" iconId="icon-logout" label="Вихід" />
    </div>
  );
}
