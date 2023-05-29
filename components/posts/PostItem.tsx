import useCurrentUser from "@/hooks/useCurrentUser";
import useLike from "@/hooks/useLike";
import useLoginModal from "@/hooks/useLoginModal";
import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { Avatar } from "../Avatar";

interface PostItemProps {
  data: Record<string, any>;
  userId?: string;
}
export const PostItem: React.FC<PostItemProps> = ({ data, userId }) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();
  const { hasLiked, toggleLike } = useLike({ postId: data.id, userId });

  const goToUser = useCallback(
    (ev: any) => {
      ev.stopPropagation();
      router.push(`/users/${data.user.id}`);
    },
    [router, data.user.id]
  );

  const goToPost = useCallback(() => {
    router.push(`/posts/${data.id}`);
  }, [router, data.id]);

  const onLike = useCallback(
    (ev: any) => {
      ev.stopPropagation();
      if (!currentUser) {
        return loginModal.onOpen();
      }
      toggleLike();
    },
    [loginModal, currentUser, toggleLike]
  );

  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data?.createdAt]);

  const LikeIcon = hasLiked ? AiFillHeart : AiOutlineHeart;

  return (
    <div
      onClick={goToPost}
      className="
        cursor-pointer 
        border-b-[1px] 
        border-neutral-500 
        p-5 
        transition 
        hover:bg-slate-700
      "
    >
      <div className="flex flex-row items-start gap-3">
        <Avatar userId={data.user.id} />
        <div>
          <div className="flex flex-row items-center gap-2">
            <p
              onClick={goToUser}
              className="cursor-pointer font-semibold text-neutral-300 hover:underline"
            >
              {data.user.name}
            </p>
            <span
              onClick={goToUser}
              className="hidden cursor-pointer text-neutral-500 hover:underline md:block"
            >
              @{data.user.username}
            </span>
            <span className="hidden cursor-pointer text-neutral-500 hover:underline md:block">
              {createdAt}
            </span>
          </div>
          <div className="mt-1 text-neutral-300">{data.body}</div>
          <div className="mt-3 flex flex-row items-center gap-10">
            <div className="flex cursor-pointer flex-row items-center gap-2 text-neutral-300 transition hover:text-blue-400">
              <AiOutlineMessage size={20} />
              <p>{data.comments?.length || 0}</p>
            </div>
            <div
              onClick={onLike}
              className="hover:text-red-5 00 flex cursor-pointer flex-row items-center gap-2 text-neutral-300
            
            
            transition"
            >
              <LikeIcon color={hasLiked ? "red" : ""} size={20} />
              <p>{data.likedIds.length || 0}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
