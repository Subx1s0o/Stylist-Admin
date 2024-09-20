import Icon from "@/components/features/Icon";
import Navigation from "./Navigation/Navigation";
import Settings from "./Settings/Settings";

export default function SideBar() {
  return (
    <aside className="text-white bg-black rounded-md px-5 pt-15 pb-10 flex flex-col justify-between">
      <div>
        <div className="flex justify-center mb-[100px]">
          <Icon id="icon-sidebar-logo" width={64} height={64} />
        </div>
        <Navigation />
      </div>
      <Settings />
    </aside>
  );
}
