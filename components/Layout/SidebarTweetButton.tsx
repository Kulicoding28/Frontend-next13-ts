import { useRouter } from "next/router";
import { FaPenSquare } from "react-icons/fa";

export const SidebarTweetButton = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")}>
      <div className="mt-6 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-blue-400 p-4 transition hover:bg-opacity-80 lg:hidden">
        <FaPenSquare size={24} color="white" />
      </div>
      <div className="mt-6 hidden cursor-pointer rounded-full bg-blue-400 px-4 py-4 transition hover:bg-opacity-80 lg:block">
        <p className="hidden text-center text-[20px] font-semibold text-white lg:block">
          Ngoceh
        </p>
      </div>
    </div>
  );
};
