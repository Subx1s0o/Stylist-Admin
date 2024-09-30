import LogoutButton from "@/components/ui/LogoutButton";
import NavLink from "../NavLink";

export default function Settings() {
  return (
    <div className="flex flex-col gap-4">
      <NavLink
        href="/dashboard/change-password"
        iconId="icon-settings"
        label="Змінити пароль"
      />
      <LogoutButton />
    </div>
  );
}
