import { Button } from "@/components/Button";
import useCurrentUser from "@/hooks/useCurrentUser";
import useEditModal from "@/hooks/useEditModal";
import useFollow from "@/hooks/useFollow";
import useUser from "@/hooks/useUser";
import { format } from "date-fns";
import { useMemo } from "react";
import { BiCalendar } from "react-icons/bi";

interface UserBioProps {
  userId: string;
}

export const UserBio: React.FC<UserBioProps> = ({ userId }) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedUser } = useUser(userId);

  const editModal = useEditModal();

  const { isFollowing, toggleFollow } = useFollow(userId);

  const createdAt = useMemo(() => {
    if (!fetchedUser?.createdAt) {
      return null;
    }

    return format(new Date(fetchedUser.createdAt), "MMMM yyyy");
  }, [fetchedUser?.createdAt]);
  return (
    <div className="boder-b-[1px] border-neutral-800 pb-4">
      <div className="flex justify-end p-2">
        {currentUser?.id === userId ? (
          <Button secondary label="Edit" onClick={editModal.onOpen} />
        ) : (
          <Button
            onClick={toggleFollow}
            label={isFollowing ? "Unfollow" : "Follow"}
            secondary={!isFollowing}
            outline={isFollowing}
          />
        )}
      </div>
      <div className="mt-8 px-4">
        <div className="flex flex-col">
          <p className="text-2xl font-semibold text-neutral-300">
            {fetchedUser?.name}
          </p>
          <p className="text-neutral-300">@{fetchedUser?.username}</p>
        </div>
        <div className="mt-4 flex flex-col">
          <p className="text-neutral-300">{fetchedUser?.bio}</p>
          <div className="mt-4 flex flex-row items-center gap-2 text-neutral-400">
            <BiCalendar size={24} />
            <p>Joined {createdAt}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-row items-center gap-4">
          <div className="flex flex-row items-center gap-1">
            <p className="text-neutral-300">
              {fetchedUser?.followingsIds?.length}
            </p>
            <p className="text-neutral-300">Following</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="text-neutral-300">
              {fetchedUser?.followersCount || 0}
            </p>
            <p className="text-neutral-300">Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};
