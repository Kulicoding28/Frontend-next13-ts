import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import usePosts from "@/hooks/usePosts";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { Button } from "./Button";
import { Avatar } from "./Avatar";

interface FormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
}

const Form: React.FC<FormProps> = ({ placeholder, isComment, postId }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();
  const { mutate: mutatePosts } = usePosts();

  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      const url = isComment ? `/api/comments?postId=${postId}` : "api/posts";

      await axios.post(url, { body });

      toast.success("Ngoceh created");
      setBody("");
      mutatePosts();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [body, mutatePosts, isComment, postId]);

  return (
    <div className="border-b-[0.5px] border-slate-600 px-5 py-2">
      {currentUser ? (
        <div className="flex flex-row gap-4">
          <div>
            <Avatar userId={currentUser?.id} />
          </div>
          <div className="w-full">
            <textarea
              disabled={isLoading}
              onChange={(e) => setBody(e.target.value)}
              value={body}
              className="peer mt-3
          w-full
          resize-none
          bg-slate-900
          text-[20px]
          text-neutral-300
          placeholder-neutral-300
          outline-none
          ring-0
          disabled:opacity-80"
              placeholder={placeholder}
            ></textarea>
            <hr
              className="
                h-[1px] 
                w-full 
                border-neutral-500 
                opacity-0 
                transition 
                peer-focus:opacity-100"
            />
            <div className="mt-4 flex flex-row justify-end">
              <Button
                disable={isLoading || !body}
                onClick={onSubmit}
                label="Post"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="py-4">
          <h1 className="mb-4 text-center text-2xl font-bold text-neutral-300">
            Welcome to Ngoceh
          </h1>
          <div className="flex flex-row items-center justify-center gap-4">
            <Button label="Login" onClick={loginModal.onOpen} />
            <Button label="Register" onClick={registerModal.onOpen} secondary />
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
