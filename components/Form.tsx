import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import usePosts from "@/hooks/usePosts";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

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
      <div className="py-4">
        <h1 className="mb-4 text-center text-2xl font-bold text-neutral-300">
          Welcome to Ngoceh
        </h1>
      </div>
    </div>
  );
};

export default Form;
