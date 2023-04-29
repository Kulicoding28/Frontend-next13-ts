import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className="flex flex-row items-center">
      <div className="relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full p-4 hover:bg-slate-200 hover:bg-opacity-10 lg:hidden">
        <Icon size={28} color="gray" />
      </div>
      <div className="relative hidden cursor-pointer items-center gap-4 rounded-full p-4 hover:bg-slate-200 hover:bg-opacity-10 lg:flex ">
        <Icon size={24} color="gray" />
        <p className="hidden text-neutral-300 lg:block">{label}</p>
      </div>
    </div>
  );
};
