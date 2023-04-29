import { useRouter } from "next/router";
import { GiSharpLips } from "react-icons/gi";

export const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full p-4 transition hover:bg-slate-200 hover:bg-opacity-10"
    >
      <GiSharpLips
        size={28}
        color="gray
      "
      />
    </div>
  );
};
