import Icon from "@/components/features/Icon";
import Link from "next/link";

interface ServiceSettingsProps {
  id: string;
  openModal: (id: string) => void;
}

export default function ServiceSettings({
  id,
  openModal,
}: ServiceSettingsProps) {
  return (
    <div className="flex gap-2">
      <Link
        className="p-2 rounded-xl transition-colors hover:text-white hover:bg-black"
        href={`/dashboard/services/${id}`}
      >
        <Icon
          id="icon-update"
          width={24}
          height={24}
          className="fill-current"
        />
      </Link>
      <button
        onClick={() => openModal(id)}
        className="p-2 rounded-xl transition-colors hover:text-white hover:bg-black"
      >
        <Icon
          id="icon-delete"
          width={24}
          height={24}
          className="fill-current"
        />
      </button>
    </div>
  );
}
