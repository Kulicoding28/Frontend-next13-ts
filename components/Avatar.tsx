import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface AvatarProps {
  userId: string;
  isLarge: boolean;
  hasBorder: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  userId,
  isLarge,
  hasBorder,
}) => {
  const router = useRouter();
  const { data: fetchedUser } = useUser(userId);

  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();

      const url = `/users/${userId}`;

      router.push(url);
    },
    [router, userId]
  );

  return (
    <div
      className={`
    ${hasBorder ? "boder-4 border-slate-300" : ""}
    ${isLarge ? "h-32" : "h-12"}
    ${hasBorder ? "w-32" : "w-12"}
    relative
    cursor-pointer
    rounded-full
    transition
    hover:opacity-80
    `}
    >
      <Image
        fill
        style={{
          objectFit: "cover",
          borderRadius: "100%",
        }}
        alt="Avatar"
        onClick={onClick}
        src={fetchedUser?.profileImage || "/images/placeholder.png"}
      />
    </div>
  );
};
