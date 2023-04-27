import { useRouter } from "next/router";

export const SidebarTweetButton = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-purple-300 hover:bg-opacity-80 transition cursor-pointer"></div>
    </div>
  );
};
