import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
}) => {
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  const router = useRouter();

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }

    if (auth && !currentUser) {
      loginModal.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [router, onClick, href, currentUser, auth, loginModal]);
  return (
    <div onClick={handleClick} className="flex flex-row items-center">
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
